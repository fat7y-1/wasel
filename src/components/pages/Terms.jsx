import { PageHero, PageSection, LegalSection } from "./PageShell"

const Terms = () => (
  <div>
    <PageHero
      kicker="Legal"
      title="Terms of Service"
      subtitle="Last updated August 1, 2026"
    />

    <PageSection>
      <div className="mx-auto max-w-3xl rounded-2xl border border-ink-100 bg-white px-6 shadow-sm">
        <LegalSection number={1} title="Acceptance of Terms">
          <p>
            By creating an account or placing an order on Wasel, you agree to
            be bound by these Terms of Service. If you don't agree, please
            don't use the platform.
          </p>
        </LegalSection>

        <LegalSection number={2} title="Using Wasel">
          <p>
            You must be at least 18 years old to place an order. You're
            responsible for keeping your account credentials secure and for
            all activity that happens under your account.
          </p>
        </LegalSection>

        <LegalSection number={3} title="Orders & Payments">
          <p>
            Prices, availability, and delivery times are set by individual
            restaurants and may change without notice. Payment is authorized
            at checkout; orders are only confirmed once accepted by the
            restaurant.
          </p>
        </LegalSection>

        <LegalSection number={4} title="Cancellations & Refunds">
          <p>
            Orders can generally only be cancelled before a restaurant
            begins preparing them. Refunds for incorrect, missing, or
            undelivered items are handled case by case through support.
          </p>
        </LegalSection>

        <LegalSection number={5} title="Restaurant & Driver Partners">
          <p>
            Restaurants and drivers on Wasel operate as independent partners.
            Wasel facilitates the order and delivery but is not the
            preparer of food or the employer of delivery drivers.
          </p>
        </LegalSection>

        <LegalSection number={6} title="Limitation of Liability">
          <p>
            Wasel is provided "as is." We work hard to keep the platform
            reliable but don't guarantee uninterrupted service, and we're
            not liable for indirect or incidental damages arising from its
            use.
          </p>
        </LegalSection>

        <LegalSection number={7} title="Changes to These Terms">
          <p>
            We may update these terms from time to time. Continued use of
            Wasel after changes take effect means you accept the updated
            terms.
          </p>
        </LegalSection>

        <LegalSection number={8} title="Contact">
          <p>
            Questions about these terms? Reach us at{" "}
            <a
              href="mailto:legal@wasel.example"
              className="font-semibold text-brand-600 hover:underline"
            >
              legal@wasel.example
            </a>
            .
          </p>
        </LegalSection>
      </div>
    </PageSection>
  </div>
)

export default Terms
