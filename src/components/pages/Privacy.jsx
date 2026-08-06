import { PageHero, PageSection, LegalSection } from "./PageShell"

const Privacy = () => (
  <div>
    <PageHero
      kicker="Legal"
      title="Privacy Policy"
      subtitle="Last updated August 1, 2026"
    />

    <PageSection>
      <div className="mx-auto max-w-3xl rounded-2xl border border-ink-100 bg-white px-6 shadow-sm">
        <LegalSection number={1} title="Information We Collect">
          <p>
            We collect information you give us directly — like your name,
            email, phone number, and delivery address — plus information
            about your orders and how you use the app.
          </p>
        </LegalSection>

        <LegalSection number={2} title="How We Use It">
          <p>
            We use your information to process orders, connect you with
            restaurants and drivers, provide support, and improve the
            platform. We don't sell your personal data.
          </p>
        </LegalSection>

        <LegalSection number={3} title="Cookies">
          <p>
            We use cookies to keep you signed in and understand how the app
            is used. You can manage your preferences anytime on our{" "}
            <a href="/cookies" className="font-semibold text-brand-600 hover:underline">
              Cookie Settings
            </a>{" "}
            page.
          </p>
        </LegalSection>

        <LegalSection number={4} title="Sharing With Restaurants & Drivers">
          <p>
            To fulfill your order, we share the details necessary for
            preparation and delivery — like your order contents and
            delivery address — with the relevant restaurant and driver.
          </p>
        </LegalSection>

        <LegalSection number={5} title="Data Retention">
          <p>
            We retain account and order data for as long as your account is
            active, and for a reasonable period after in case it's needed
            for support, legal, or security reasons.
          </p>
        </LegalSection>

        <LegalSection number={6} title="Your Rights">
          <p>
            You can access, correct, or request deletion of your personal
            data at any time by contacting support.
          </p>
        </LegalSection>

        <LegalSection number={7} title="Contact">
          <p>
            Questions about this policy? Reach us at{" "}
            <a
              href="mailto:privacy@wasel.example"
              className="font-semibold text-brand-600 hover:underline"
            >
              privacy@wasel.example
            </a>
            .
          </p>
        </LegalSection>
      </div>
    </PageSection>
  </div>
)

export default Privacy
