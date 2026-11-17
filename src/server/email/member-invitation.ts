import "server-only";
import { z } from "zod";
import { AppError } from "@/server/http/app-error";

export function getInvitationEmailConfig() {
  const result = z.object({
    RESEND_API_KEY: z.string().trim().min(1),
    RESEND_FROM_EMAIL: z.string().trim().min(1).refine(value => !/[\r\n]/.test(value) && !value.includes("example.com")),
    NEXT_PUBLIC_APP_URL: z.url().refine(value => ["http:", "https:"].includes(new URL(value).protocol)),
  }).safeParse(process.env);
  if (!result.success) {
    const invalidSettings = [...new Set(result.error.issues.map(issue => String(issue.path[0])))];
    const senderHint = invalidSettings.includes("RESEND_FROM_EMAIL")
      ? " RESEND_FROM_EMAIL must be an address Resend allows, such as one on a verified domain."
      : "";
    throw new AppError({
      category: "EXTERNAL_SERVICE_ERROR",
      message: `Invitation email configuration is incomplete. Check ${invalidSettings.join(", ")} in .env.local.${senderHint}`,
    });
  }
  return result.data;
}

export async function sendMemberInvitationEmail(input: { id: string; email: string; token: string; brideName: string; groomName: string; role: string; expiresAt: string }) {
  const env = getInvitationEmailConfig();
  const url = new URL(`/member-invitations/${input.token}`, env.NEXT_PUBLIC_APP_URL).href;
  let response: Response;
  try {
    response = await fetch("https://api.resend.com/emails", {
      method: "POST", signal: AbortSignal.timeout(15000),
      headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json", "Idempotency-Key": `member-invitation/${input.id}` },
      body: JSON.stringify({ from: env.RESEND_FROM_EMAIL, to: [input.email], subject: "You're invited to a wedding workspace", text: `Join ${input.brideName} & ${input.groomName} on Make My Marriage as ${input.role === "ADMIN" ? "an Admin" : "a Manager"}.\n\nSign in or create an account using ${input.email}, then accept your invitation:\n${url}\n\nThis invitation expires on ${new Date(input.expiresAt).toUTCString()}.\nIf you weren't expecting this invitation, you can ignore this email.` }),
    });
  } catch {
    throw new AppError({ category: "EXTERNAL_SERVICE_ERROR", message: "Could not reach Resend to send the invitation. Check the server’s network connection and try again. Any link from this attempt is no longer valid." });
  }

  if (!response.ok) {
    const usesResendTestSender = /@resend\.dev(?:>|$)/i.test(env.RESEND_FROM_EMAIL);
    const message = response.status === 401
      ? "Resend rejected the API key. Check RESEND_API_KEY in .env.local. Any link from this attempt is no longer valid."
      : response.status === 403
        ? usesResendTestSender
          ? "Resend’s testing sender can only deliver to the email on your Resend account. To invite other people, verify a domain in Resend and set RESEND_FROM_EMAIL to an address on it. Any link from this attempt is no longer valid."
          : "Resend refused this send. Verify the sender domain and confirm the API key can send email. Any link from this attempt is no longer valid."
        : response.status === 422
          ? "Resend rejected the sender or recipient. Use a sender address on a verified Resend domain and check the recipient address. Any link from this attempt is no longer valid."
          : response.status === 429
            ? "Resend is rate-limiting email requests. Wait a little and try again. Any link from this attempt is no longer valid."
            : response.status >= 500
              ? "Resend is temporarily unavailable. Try again shortly. Any link from this attempt is no longer valid."
              : `Resend rejected the email request (HTTP ${response.status}). Check the sender and email configuration. Any link from this attempt is no longer valid.`;
    throw new AppError({ category: "EXTERNAL_SERVICE_ERROR", message });
  }

  try {
    if (!z.object({ id: z.string().min(1) }).safeParse(await response.json()).success) throw new Error("Unexpected Resend response");
  } catch {
    // Do not log or return provider payloads; they can contain addresses or identifiers.
    throw new AppError({ category: "EXTERNAL_SERVICE_ERROR", message: "Resend returned an unexpected response, so we couldn’t confirm delivery. Any link from this attempt is no longer valid." });
  }
}
