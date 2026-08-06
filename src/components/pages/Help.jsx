import { PageHero, PageSection } from "./PageShell"

const faqCategories = [
  {
    title: "Ordering",
    questions: [
      {
        q: "How do I place an order?",
        a: "Browse restaurants on the home page, open one to see its menu, add items to your cart, then check out. You'll need to sign in or create an account to confirm the order.",
      },
      {
        q: "Can I browse menus without an account?",
        a: "Yes — you can look through every restaurant and menu, and even build a cart, without signing in. You'll only be asked to sign in when you're ready to check out.",
      },
      {
        q: "Can I change my order after placing it?",
        a: "Once an order is confirmed it starts being prepared right away, so changes aren't guaranteed — contact the restaurant as soon as possible if something's wrong.",
      },
    ],
  },
  {
    title: "Payments",
    questions: [
      {
        q: "What payment methods are supported?",
        a: "Card and cash on delivery are supported depending on your restaurant and city.",
      },
      {
        q: "Why was I charged before my order arrived?",
        a: "Card payments are authorized at checkout to confirm your order with the restaurant, the same way most delivery platforms work.",
      },
    ],
  },
  {
    title: "Delivery",
    questions: [
      {
        q: "How do I track my order?",
        a: "Head to My Orders from the navigation bar to see live status and your assigned driver once one is on the way.",
      },
      {
        q: "What if my order arrives late or wrong?",
        a: "Reach out to our support team with your order number and we'll sort it out quickly.",
      },
    ],
  },
  {
    title: "Account",
    questions: [
      {
        q: "How do I reset my password?",
        a: "Password reset from the sign-in page is coming soon — for now, contact support and we'll help you regain access.",
      },
      {
        q: "How do I delete my account?",
        a: "Email support@wasel.example from your account email and we'll process the deletion within 48 hours.",
      },
    ],
  },
]

const Help = () => (
  <div>
    <PageHero
      kicker="Help Center"
      title="How can we help?"
      subtitle="Answers to the most common questions about ordering, payments, and delivery."
    />

    <PageSection>
      <div className="mx-auto max-w-3xl space-y-10">
        {faqCategories.map((cat) => (
          <div key={cat.title}>
            <h2 className="text-lg font-extrabold text-ink-900">
              {cat.title}
            </h2>
            <div className="mt-4 space-y-3">
              {cat.questions.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-xl border border-ink-100 bg-white p-4 shadow-sm open:shadow-md"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-ink-900">
                    {item.q}
                    <span className="ml-4 shrink-0 text-brand-500 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-ink-500">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-brand-200 bg-brand-50 p-6 text-center">
        <p className="font-semibold text-ink-900">Still need help?</p>
        <p className="mt-1 text-sm text-ink-500">
          Our support team is here for you.
        </p>
        <a
          href="mailto:support@wasel.example"
          className="mt-4 inline-block rounded-full bg-brand-500 px-6 py-2.5 text-sm font-bold text-white hover:bg-brand-600 transition-colors"
        >
          Contact Support
        </a>
      </div>
    </PageSection>
  </div>
)

export default Help
