// FAQ source of truth — used to render the page AND generate FAQPage schema.
// Answers are self-contained (restate context so they read correctly when
// quoted alone by an AI engine), per SEO-GEO.MD §6. "Leads" avoided per
// Constraints §5 — we say "inquiries / messages / customers".

export interface Faq {
  q: string;
  /** Plain-text answer. Kept prose-only so it doubles as schema text. */
  a: string;
}

export const FAQS: Faq[] = [
  {
    q: 'How do I know Orkha will deliver and not just take my money and disappear?',
    a: "Orkha runs month-to-month with no lock-in, so you can leave the moment we underdeliver — the risk of us vanishing is capped by you, not promised by us. On top of that, the system selling you is verifiable before you pay: the exact automation we'd build is already running live on our own Facebook page. Message it and watch the AI answer and qualify you in real time. Verifiable beats promised.",
  },
  {
    q: "Orkha has no clients or case studies yet — why would I be one of the first?",
    a: "Because being early is the discount. Orkha is in its pilot phase, so the first 5 clients get the founding rate of ₱15,000/month for the service, moving to the ₱20,000 standard rate only once we've grown the potential customers we capture for you by 50% over the past 3 months — plus your website (a ₱15,000 build) included free, and every Future Add-On free, forever, at that locked rate once they stay past month 6. We're openly pricing in the fact that we're new. Later clients pay full price and pay for each add-on individually. We're also prepared to overdeliver early so those first results become the case studies we don't have yet.",
  },
  {
    q: 'Will this actually work for a business like mine?',
    a: "The system's job is to catch the inquiries currently slipping through — the messages that arrive after hours, on weekends, or while you're with a client and can't reply. You don't have to take our word for it: every inquiry the AI captures lands in a Google Sheet you own and can watch in real time, so you're reading the meter yourself. It's best suited to appointment-driven service businesses where each new customer is worth enough that recovering a few missed inquiries a month covers the fee.",
  },
  {
    q: "Why pay ₱15,000 a month when I could just pay once for a website?",
    a: "A one-time website is a brochure: it's built once and then nobody is answering your messages at 9 PM or qualifying inquiries while you work. Orkha's ₱15,000/month isn't for a website — it's a rented, always-on system: continuous SEO/GEO, and AI that answers and qualifies inquiries 24/7, all maintained for you. In fact the website is the part you don't pay extra for — a ₱15,000 build, included free the moment you're on the service. You're comparing a one-time file to a system that runs every day. If your average customer is worth a meaningful amount, the system pays for itself the moment it catches one or two inquiries a month you'd otherwise lose.",
  },
  {
    q: "Once the website is built, what am I actually paying for every month after that?",
    a: "You're not paying Orkha to build a website once — you're renting a working system. Every month the AI keeps answering and qualifying inquiries 24/7, messages keep landing in your Google Sheet, SEO and GEO keep working as search and AI results shift, and everything stays hosted and maintained. It's the same reason you pay a monthly subscription: you're paying for it to keep being on, not for it to be built. The Sheet is your month-to-month evidence it's earning its keep.",
  },
  {
    q: 'Why should I sign up now instead of waiting?',
    a: "Orkha's founding rate is ₱15,000/month for the service, moving to the ₱20,000 standard rate only once we've grown the potential customers we capture for you by 50% over the past 3 months, and pilots who stay past month 6 get every Future Add-On we launch included free, forever, at their locked rate — later clients pay full price for each one. Your website (a ₱15,000 build) is included free either way. The founding batch is limited to the first 5 clients. Waiting costs you the discount and the free-add-ons window; there's no artificial countdown, just a real cap.",
  },
  {
    q: "We're already doing fine without this — why change anything?",
    a: "You're doing fine on the inquiries you can see. The question is the ones you can't: how many people messaged over the weekend and gave up before Monday, or wrote while you were mid-appointment and never heard back? Right now there's no way to know that number, which is exactly the problem. Orkha makes it visible — the AI catches those inquiries and logs every one in a Google Sheet you own, so 'fine' stops being a guess.",
  },
  {
    q: 'What about email, phone, and text inquiries — are those handled too?',
    a: "Not yet. Right now the system handles Instagram DMs and Facebook Messenger plus website form submissions — that's where most missed inquiries actually happen, and both channels are included at the standard rate. WhatsApp, email, and SMS as inquiry channels sit on our Future Add-Ons list — not sold separately today. We'd rather be straight about coverage than oversell it. Founding clients who stay past month 6 get every Future Add-On free, forever, at their locked rate the moment it ships.",
  },
  {
    q: 'Can Orkha book appointments directly into my calendar?',
    a: "Not full calendar booking yet — and that's deliberate. Instead of live booking, the AI captures the customer's preferred time block and logs it for you to confirm. That sidesteps double-bookings and timezone mix-ups and keeps you in control of your actual calendar. Direct calendar booking is on our Future Add-Ons list — founding clients who stay past month 6 get it free, forever, at their locked rate the moment it ships.",
  },
  {
    q: 'Do I own the website, the customer data, and the inquiries?',
    a: "Yes. You own the website, the inquiries, and the data. Orkha hands over your website files upfront along with the domain, so those are yours to keep. The one thing you don't own is our AI system itself — that's the part you're renting month-to-month.",
  },
  {
    q: 'How long until the system is live?',
    a: "The full system — website, SEO/GEO setup, and AI inquiry automation — takes 6 to 12 days to become fully operational from when we start.",
  },
  {
    q: "What's included in the monthly service?",
    a: "One monthly price covers the whole pipeline: a fully managed, fast website; monthly SEO and GEO (including outreach to newsletters, journalists, directories, and local publications to build off-site credibility); AI that auto-answers and qualifies Instagram DMs, Facebook Messenger, and website form submissions into a Google Sheet you own; Google Business Profile setup and optimization for client sites; and 10 free NFC review cards that send happy customers straight to your Google review page — extra cards available anytime at ₱20 each, a simple convenience rather than a plan add-on. Everything beyond that base system — SMS reminders, merch handling, multi-branch, reactivation campaigns, more inquiry channels (WhatsApp, email, SMS), calendar booking, and paid ad management — sits on one Future Add-Ons list. None of it is sold separately today; founding clients who stay past month 6 get all of it free, forever, at their locked rate, the moment each one ships.",
  },
  {
    q: 'Is there a lock-in contract?',
    a: "No. Orkha is month-to-month with no long-term lock-in. You can leave whenever you like — that's intentional, because it means the system has to keep proving its worth every month rather than trapping you in a contract.",
  },
];
