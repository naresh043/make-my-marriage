import 'server-only';
import { z } from 'zod';

const serverEnvSchema = z.object({
  MONGODB_URI: z.string().min(1),
  SESSION_SECRET: z.string().min(32),
  R2_ACCOUNT_ID: z.string().min(1),
  R2_ACCESS_KEY_ID: z.string().min(1),
  R2_SECRET_ACCESS_KEY: z.string().min(1),
  R2_BUCKET_NAME: z.string().min(1),
  RESEND_API_KEY: z.string().min(1),
  GOOGLE_PLACES_API_KEY: z.string().min(1),
  CRON_SECRET: z.string().min(32),
});

export function getServerEnv() {
  return serverEnvSchema.parse(process.env);
}
