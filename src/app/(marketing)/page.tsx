import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  CalendarDays,
  Camera,
  Check,
  CircleDollarSign,
  ClipboardCheck,
  Globe2,
  Heart,
  Image as ImageIcon,
  Mail,
  MapPin,
  QrCode,
  UsersRound,
  Video,
  Wallet,
} from "lucide-react";

const features = [
  {
    icon: CalendarDays,
    title: "Events & schedules",
    description:
      "Keep each ceremony’s date, time, venue, and dress code together.",
  },
  {
    icon: ClipboardCheck,
    title: "Tasks & assignments",
    description:
      "Share the to-dos and see what is complete across your family.",
  },
  {
    icon: UsersRound,
    title: "Guests & RSVPs",
    description:
      "Organize your guest list and collect responses from one place.",
  },
  {
    icon: CircleDollarSign,
    title: "Expense tracking",
    description: "Record wedding expenses and keep the details easy to find.",
  },
  {
    icon: Heart,
    title: "Vendor details",
    description:
      "Keep vendor contacts and notes together, and discover local vendors.",
  },
  {
    icon: Globe2,
    title: "Wedding website",
    description:
      "Share your wedding information using one of three predefined themes.",
  },
  {
    icon: Camera,
    title: "Private photo gallery",
    description:
      "Bring family photos together with guest uploads, a link, and a QR code.",
  },
  {
    icon: Video,
    title: "YouTube livestream",
    description: "Add an optional YouTube livestream to your wedding website.",
  },
];

const events = [
  {
    date: "12 FEB",
    name: "Mehendi & Haldi",
    time: "11:30 AM",
    venue: "Courtyard Lawn",
    tone: "rose",
  },
  {
    date: "13 FEB",
    name: "Sangeet Gala",
    time: "6:30 PM",
    venue: "Grand Ballroom",
    tone: "gold",
  },
  {
    date: "14 FEB",
    name: "Wedding Ceremony",
    time: "10:15 AM",
    venue: "The Mandap Lawn",
    tone: "wine",
  },
  {
    date: "15 FEB",
    name: "Reception",
    time: "7:30 PM",
    venue: "Terrace Pavilion",
    tone: "rose",
  },
];

const themes = [
  {
    name: "Classic Indian",
    detail: "Heritage tones and expressive details.",
    style: "classic",
  },
  {
    name: "Minimal Elegant",
    detail: "Warm ivory and calm typography.",
    style: "minimal",
  },
  {
    name: "Modern Celebration",
    detail: "Contemporary color and clean layouts.",
    style: "modern",
  },
];

const benefits = [
  {
    icon: Heart,
    title: "Everything in one place",
    description:
      "Bring schedules, guests, RSVPs, and expenses into one wedding workspace.",
  },
  {
    icon: UsersRound,
    title: "Plan together as a family",
    description:
      "Share wedding information with the family members helping you plan.",
  },
  {
    icon: ClipboardCheck,
    title: "Stay organized",
    description: "Keep ceremony details and task progress easy to find.",
  },
  {
    icon: Camera,
    title: "Preserve the memories",
    description:
      "Gather wedding photos in a private gallery shared by link or QR code.",
  },
];

const problemCards = [
  [
    "Scattered information",
    "Notes, chats, and spreadsheets can be hard to keep in sync.",
  ],
  ["Guest list confusion", "Keep guest details and RSVP responses together."],
  [
    "Many moving parts",
    "Organize dates, tasks, and vendor details in one workspace.",
  ],
  [
    "Photos in many places",
    "Bring guest-contributed wedding memories into one gallery.",
  ],
];

function SectionIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="section-intro">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {children ? <p>{children}</p> : null}
    </div>
  );
}

export default function HomePage() {
  return (
    <main>
      <header className="site-header">
        <div className="nav-wrap">
          <Link
            className="brand"
            href="#top"
            aria-label="Make My Marriage home"
          >
            <span className="brand-mark">
              <Heart size={19} strokeWidth={2.1} />
            </span>
            <span className="brand-name">
              Make My Marriage<span>Wedding workspace</span>
            </span>
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#features">Features</a>
            <a href="#how-it-works">How it works</a>
            <a href="#website-themes">Wedding website</a>
          </nav>
          <div className="nav-actions">
            <Link className="sign-in" href="/login">
              Sign in
            </Link>
            <Link className="button button-primary nav-cta" href="/signup">
              Start planning <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid page-shell">
          <div className="hero-copy">
            <span className="pill">
              <span className="pill-dot" /> The shared wedding planning
              workspace
            </span>
            <h1>
              Plan your entire wedding. <em>Together.</em>
            </h1>
            <p className="hero-lede">
              Bring your events, tasks, guests, invitations, expenses, vendors,
              and wedding memories into one shared space for your family.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/signup">
                Start planning <Heart size={16} />
              </Link>
              <a className="button button-secondary" href="#features">
                Explore features <ArrowDown size={16} />
              </a>
            </div>
            <p className="hero-note">
              <UsersRound size={16} /> Made for couples and the family helping
              them plan.
            </p>
          </div>

          <div
            className="dashboard-window"
            aria-label="Illustrative wedding dashboard preview"
          >
            <div className="dashboard-topline">
              <div className="couple-monogram">
                S<span>&</span>S
              </div>
              <div className="couple-title">
                <strong>Sanjeev Reddy & Siddaganga</strong>
                <span>Bengaluru, Karnataka</span>
              </div>
              <span className="sample-tag">Sample</span>
              <div className="countdown">
                <strong>42</strong>
                <span>days to go</span>
              </div>
            </div>
            <div className="dashboard-stats">
              <div>
                <span>Events</span>
                <strong>5</strong>
                <small>planned</small>
              </div>
              <div>
                <span>Tasks</span>
                <strong>
                  28 <i>/ 36</i>
                </strong>
                <small>78% complete</small>
              </div>
              <div>
                <span>Guests</span>
                <strong>218</strong>
                <small>RSVP responses</small>
              </div>
              <div>
                <span>Expenses</span>
                <strong className="spend">₹12,45,000</strong>
                <small>recorded</small>
              </div>
            </div>
            <div className="dashboard-list-head">
              <strong>Upcoming celebrations</strong>
              <span>Illustrative sample data</span>
            </div>
            {events.slice(0, 3).map((event) => (
              <div className="mini-event" key={event.name}>
                <span className={`event-dot ${event.tone}`} />
                <strong>{event.name}</strong>
                <span>
                  {event.date} · {event.time}
                </span>
              </div>
            ))}
            <div className="sample-caption">
              Fictional example wedding · Sample figures
            </div>
          </div>
        </div>
        <div className="sample-strip">
          <span>Illustrative sample data</span>
          <p>Example wedding details shown for design purposes</p>
        </div>
      </section>

      <section className="benefits section-pad">
        <div className="page-shell">
          <SectionIntro
            eyebrow="Purpose-built for weddings"
            title="One wedding. One workspace. Everything organized."
          >
            Keep celebrations, people, and memories together instead of
            scattered across separate tools.
          </SectionIntro>
          <div className="benefit-grid">
            {benefits.map(({ icon: Icon, title, description }) => (
              <article key={title}>
                <span>
                  <Icon size={19} />
                </span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="planning-problem section-pad">
        <div className="page-shell">
          <SectionIntro
            eyebrow="The planning challenge"
            title="Wedding planning should feel exciting, not overwhelming."
          >
            Bring everyday wedding details into a shared place your family can
            refer to.
          </SectionIntro>
          <div className="problem-card-grid">
            {problemCards.map(([title, description], i) => (
              <article key={title}>
                <span>{["01", "02", "03", "04"][i]}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <div className="problem-banner">
            <Heart size={21} />
            <strong>
              Make My Marriage brings the wedding journey together.
            </strong>
            <span>Plan and coordinate one step at a time.</span>
          </div>
        </div>
      </section>

      <section className="overview section-pad" id="how-it-works">
        <div className="page-shell">
          <SectionIntro
            eyebrow="One place to plan"
            title="A clearer view of your wedding."
          >
            Keep ceremony schedules, task progress, guest responses, and
            recorded expenses organized in a shared family workspace.
          </SectionIntro>
          <div className="overview-card">
            <div className="overview-heading">
              <div>
                <span className="eyebrow">Illustrative sample wedding</span>
                <h3>Sanjeev Reddy & Siddaganga</h3>
                <p>
                  <MapPin size={14} /> Bengaluru, Karnataka <span>·</span> 14
                  February 2027
                </p>
              </div>
              <span className="workspace-label">
                <span /> Shared wedding workspace
              </span>
            </div>
            <div className="overview-metrics">
              <div>
                <span>Events</span>
                <strong>5</strong>
                <small>Roka, Mehendi, Sangeet, Wedding, Reception</small>
              </div>
              <div>
                <span>Tasks & progress</span>
                <strong>28 / 36</strong>
                <small>78% complete</small>
                <div className="progress">
                  <i />
                </div>
              </div>
              <div>
                <span>Guests & RSVPs</span>
                <strong>218 / 280</strong>
                <small>Example guest responses</small>
              </div>
              <div>
                <span>Expenses recorded</span>
                <strong>₹12,45,000</strong>
                <small>Example total recorded expenses</small>
              </div>
            </div>
            <div className="itinerary">
              <div className="itinerary-title">
                <strong>Upcoming event schedule</strong>
                <span>Sample details</span>
              </div>
              <div className="itinerary-grid">
                {events.slice(0, 3).map((event) => (
                  <article key={event.name}>
                    <span>
                      {event.date} · {event.time}
                    </span>
                    <strong>{event.name}</strong>
                    <small>{event.venue}</small>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="problem section-pad">
        <div className="page-shell">
          <SectionIntro
            eyebrow="The planning challenge"
            title="Wedding details belong in one shared place."
          >
            Plans can get scattered across family chats, spreadsheets, notes,
            and calls. Bring the important details together in a wedding
            workspace everyone can refer to.
          </SectionIntro>
          <div className="problem-flow">
            <div className="scattered-list">
              <div>
                <Mail size={17} />
                <span>
                  <strong>Family chats</strong>
                  <small>Decisions mixed into long conversations</small>
                </span>
              </div>
              <div>
                <ClipboardCheck size={17} />
                <span>
                  <strong>Separate spreadsheets</strong>
                  <small>
                    Different versions of the guest list and schedule
                  </small>
                </span>
              </div>
              <div>
                <ImageIcon size={17} />
                <span>
                  <strong>Notes in different places</strong>
                  <small>Vendor details and reminders hard to find</small>
                </span>
              </div>
            </div>
            <div className="flow-arrow">
              <ArrowRight size={23} />
              <span>Bring it together</span>
            </div>
            <div className="organized-card">
              <div className="organized-icon">
                <Heart size={19} />
              </div>
              <div>
                <strong>One shared wedding workspace</strong>
                <small>
                  Events, tasks, guests, expenses, vendors, and memories in one
                  place.
                </small>
              </div>
              <ul>
                <li>
                  <Check size={15} /> Shared event and task details
                </li>
                <li>
                  <Check size={15} /> Guest list and RSVP tracking
                </li>
                <li>
                  <Check size={15} /> Wedding information for your family
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="collaboration section-pad">
        <div className="page-shell collab-grid">
          <div className="collab-copy">
            <span className="eyebrow">Family collaboration</span>
            <h2>Plan together, with the right access.</h2>
            <p>
              Invite your partner, parents, and family members into one wedding
              workspace. Admins and Managers can collaborate on planning. Only
              Admins can manage wedding membership.
            </p>
            <div className="role-notes">
              <div>
                <span className="role-badge admin">Admin</span>
                <p>Manage wedding details and membership.</p>
              </div>
              <div>
                <span className="role-badge manager">Manager</span>
                <p>Help organize the wedding with shared workspace access.</p>
              </div>
            </div>
          </div>
          <div className="family-card">
            <div className="family-card-head">
              <div>
                <span className="eyebrow">Sample workspace</span>
                <h3>Sanjeev Reddy & Siddaganga’s family</h3>
              </div>
              <UsersRound size={20} />
            </div>
            <div className="member-row">
              <span className="avatar burgundy">S</span>
              <div>
                <strong>Sanjeev Reddy & Siddaganga</strong>
                <small>Couple</small>
              </div>
              <span className="role-badge admin">Admin</span>
            </div>
            <div className="member-row">
              <span className="avatar gold">R</span>
              <div>
                <strong>Raghavendra Reddy</strong>
                <small>Family member</small>
              </div>
              <span className="role-badge admin">Admin</span>
            </div>
            <div className="member-row">
              <span className="avatar blush">N</span>
              <div>
                <strong>Nandini Reddy</strong>
                <small>Family member</small>
              </div>
              <span className="role-badge manager">Manager</span>
            </div>
            <div className="member-row">
              <span className="avatar stone">V</span>
              <div>
                <strong>Vikram Reddy</strong>
                <small>Family member</small>
              </div>
              <span className="role-badge manager">Manager</span>
            </div>
            <p className="sample-caption">
              Fictional example members and roles
            </p>
          </div>
        </div>
      </section>

      <section className="features section-pad" id="features">
        <div className="page-shell">
          <SectionIntro
            eyebrow="Made for wedding planning"
            title="The details, thoughtfully organized."
          >
            Practical tools for planning ceremonies, coordinating with family,
            and sharing the celebration.
          </SectionIntro>
          <div className="feature-grid">
            {features.map(({ icon: Icon, title, description }) => (
              <article className="feature-card" key={title}>
                <span className="feature-icon">
                  <Icon size={20} />
                </span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dashboard-detail section-pad">
        <div className="page-shell detail-grid">
          <div>
            <span className="eyebrow">Wedding command center</span>
            <h2>Your entire wedding at a glance.</h2>
            <p>
              See an illustrative summary of events, task progress, guest
              responses, and recorded expenses.
            </p>
            <ul className="check-list">
              <li>
                <Check size={16} /> Wedding countdown and event schedule
              </li>
              <li>
                <Check size={16} /> Task progress and upcoming priorities
              </li>
              <li>
                <Check size={16} /> Guest responses and recorded expenses
              </li>
            </ul>
          </div>
          <div className="detail-preview">
            <div className="dashboard-list-head">
              <strong>Wedding overview</strong>
              <span>Illustrative sample data</span>
            </div>
            <div className="detail-stat-grid">
              <div>
                <span>Guest responses</span>
                <strong>218 / 280</strong>
              </div>
              <div>
                <span>Expenses recorded</span>
                <strong>₹12,45,000</strong>
              </div>
            </div>
            <div className="detail-task">
              <span>Upcoming task</span>
              <strong>Confirm ceremony details</strong>
              <small>Example task · Sample wedding</small>
            </div>
          </div>
        </div>
      </section>

      <section className="events-section section-pad">
        <div className="page-shell">
          <SectionIntro
            eyebrow="Rituals & timing"
            title="Every celebration, in one timeline."
          >
            Keep dates, times, venues, and dress codes together across the
            wedding events.
          </SectionIntro>
          <div className="event-timeline">
            {events.map((event, index) => (
              <article className="event-card" key={event.name}>
                <div className="event-card-top">
                  <span className={`event-number ${event.tone}`}>
                    0{index + 1}
                  </span>
                  <span>{event.date}</span>
                </div>
                <h3>{event.name}</h3>
                <p>
                  <CalendarDays size={14} /> {event.time}
                </p>
                <p>
                  <MapPin size={14} /> {event.venue}
                </p>
                <small>Illustrative sample event</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="invitation section-pad">
        <div className="page-shell invitation-grid">
          <div>
            <span className="eyebrow">Digital invitations & RSVP</span>
            <h2>Make it easy for guests to respond.</h2>
            <p>
              Share a unique invitation link with each guest. They can see the
              events they’re invited to and RSVP without creating an account.
            </p>
            <ul className="check-list">
              <li>
                <Check size={16} /> Shareable invitation links
              </li>
              <li>
                <Check size={16} /> Guests see their invited events
              </li>
              <li>
                <Check size={16} /> RSVP without signing in
              </li>
            </ul>
          </div>
          <div className="invite-preview">
            <div className="invite-heart">
              <Heart size={20} />
            </div>
            <span className="eyebrow">You are cordially invited</span>
            <h3>Sanjeev Reddy & Siddaganga</h3>
            <p>We would love for you to celebrate with us.</p>
            <div className="invite-events">
              <strong>Events you’re invited to</strong>
              <span>
                Sangeet Gala <time>13 Feb</time>
              </span>
              <span>
                Wedding Ceremony <time>14 Feb</time>
              </span>
            </div>
            <div className="rsvp-question">Will you be attending?</div>
            <div className="rsvp-options">
              <span>Joyfully accept</span>
              <span>Regretfully decline</span>
            </div>
            <small>Example invitation preview</small>
          </div>
        </div>
      </section>

      <section className="visibility section-pad">
        <div className="page-shell">
          <SectionIntro eyebrow="A clear view" title="Your wedding, every day.">
            Keep a simple overview of the details your family is organizing.
            Example figures are illustrative.
          </SectionIntro>
          <div className="visibility-card">
            <span className="sample-tag">Illustrative sample data</span>
            <h3>Sanjeev Reddy & Siddaganga’s Wedding</h3>
            <div className="visibility-metrics">
              <div>
                <span>Guest responses</span>
                <strong>218 / 280</strong>
              </div>
              <div>
                <span>Expenses recorded</span>
                <strong>₹12,45,000</strong>
              </div>
              <div>
                <span>Task progress</span>
                <strong>28 / 36</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="memories section-pad">
        <div className="page-shell">
          <SectionIntro
            eyebrow="Shared memories"
            title="Keep wedding memories together."
          >
            Share a private gallery link or QR code so guests can view and
            contribute photos from their phones.
          </SectionIntro>
          <div className="memory-steps">
            <article>
              <span className="memory-icon">
                <QrCode size={25} />
              </span>
              <span className="step-label">01 · Share access</span>
              <h3>Display your gallery QR</h3>
              <p>
                Let guests open the wedding gallery with a shared link or QR
                code.
              </p>
            </article>
            <div className="memory-connector">
              <ArrowRight size={18} />
            </div>
            <article>
              <span className="memory-icon">
                <Camera size={25} />
              </span>
              <span className="step-label">02 · Guest uploads</span>
              <h3>Guests add their photos</h3>
              <p>Guests can contribute wedding photos from a mobile browser.</p>
            </article>
            <div className="memory-connector">
              <ArrowRight size={18} />
            </div>
            <article>
              <span className="memory-icon">
                <ImageIcon size={25} />
              </span>
              <span className="step-label">03 · One gallery</span>
              <h3>Bring memories together</h3>
              <p>Keep shared photos in the wedding gallery for the family.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="themes-section section-pad" id="website-themes">
        <div className="page-shell">
          <SectionIntro
            eyebrow="Three predefined themes"
            title="A wedding website that feels like yours."
          >
            Choose a presentation for your wedding information. The same details
            work across all three themes.
          </SectionIntro>
          <div className="theme-grid">
            {themes.map((theme) => (
              <article className="theme-card" key={theme.name}>
                <div className={`theme-preview ${theme.style}`}>
                  <span>
                    Sanjeev Reddy <Heart size={12} /> Siddaganga
                  </span>
                  <small>14 February 2027 · Bengaluru</small>
                </div>
                <h3>{theme.name}</h3>
                <p>{theme.detail}</p>
                <span className="predefined">Predefined theme</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="vendor-expense section-pad">
        <div className="page-shell">
          <SectionIntro
            eyebrow="Vendors & expenses"
            title="Keep vendor details and expenses organized."
          >
            Save vendor contacts and record the money already spent on your
            wedding.
          </SectionIntro>
          <div className="vendor-expense-grid">
            <article>
              <h3>
                <UsersRound size={18} /> Vendor directory
              </h3>
              {["Wedding photographer", "Venue", "Caterer"].map((v) => (
                <p key={v}>
                  <span>{v}</span>
                  <small>Contact details and notes</small>
                </p>
              ))}
            </article>
            <article>
              <h3>
                <Wallet size={18} /> Recorded expenses <span>₹12,45,000</span>
              </h3>
              {[
                ["Venue & hospitality", "₹6,50,000"],
                ["Catering", "₹3,20,000"],
                ["Decoration", "₹2,75,000"],
              ].map(([label, value]) => (
                <p key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </p>
              ))}
              <small className="sample-caption">Illustrative sample data</small>
            </article>
          </div>
        </div>
      </section>

      <section className="faq-section section-pad" id="faq">
        <div className="page-shell">
          <SectionIntro
            eyebrow="A few helpful answers"
            title="Frequently asked questions."
          />
          <div className="faq-list">
            <details>
              <summary>
                Do guests need an account to RSVP?
                <ArrowDown size={16} />
              </summary>
              <p>
                No. Guests can open their unique invitation link and respond
                without creating an account.
              </p>
            </details>
            <details>
              <summary>
                Can we choose how our wedding website looks?
                <ArrowDown size={16} />
              </summary>
              <p>
                Yes. Choose one of three predefined themes. The same wedding
                information is used in each theme.
              </p>
            </details>
            <details>
              <summary>
                Can we share wedding photos with guests?
                <ArrowDown size={16} />
              </summary>
              <p>
                You can share a private gallery link or QR code so guests can
                view and contribute photos.
              </p>
            </details>
            <details>
              <summary>
                Does Make My Marriage host the livestream?
                <ArrowDown size={16} />
              </summary>
              <p>
                No. You can add a YouTube livestream link to your wedding
                website for guests to watch.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className="closing-cta">
        <div className="closing-mark">
          <Heart size={20} />
        </div>
        <span className="eyebrow">Your wedding, together</span>
        <h2>Make room for the moments that matter.</h2>
        <p>
          Start with your wedding details, invite your family, and bring the
          planning together one step at a time.
        </p>
        <div className="hero-actions">
          <Link className="button button-light" href="/signup">
            Start planning <ArrowRight size={16} />
          </Link>
          <Link className="button button-outline-light" href="/login">
            Sign in
          </Link>
        </div>
      </section>

      <footer className="site-footer">
        <div className="page-shell footer-top">
          <Link className="brand footer-brand" href="#top">
            <span className="brand-mark">
              <Heart size={18} />
            </span>
            <span className="brand-name">
              Make My Marriage<span>Wedding workspace</span>
            </span>
          </Link>
          <nav aria-label="Footer navigation">
            <a href="#features">Features</a>
            <a href="#how-it-works">How it works</a>
            <a href="#website-themes">Wedding website</a>
            <a href="#faq">FAQs</a>
            <Link href="/login">Sign in</Link>
          </nav>
        </div>
        <div className="page-shell footer-bottom">
          <span>© 2026 Make My Marriage</span>
          <div>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
