"use client";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar isTransparent={false} />
      <main className="w-full bg-white px-10 md:px-20 py-16 text-[#111111] font-[Poppins]">
        <h1 className="text-5xl font-bold mb-8">Privacy Policy</h1>

        <p className="mb-4">
          <strong>Effective Date:</strong> 14 Jun, 2025
        </p>
        <p className="mb-4">
          <strong>App Name:</strong> Celevery
        </p>
        <p className="mb-4">
          <strong>Company:</strong> BigBurry Hypersystems LLP
        </p>
        <p className="mb-8">
          <strong>Location:</strong> Kerala, India
        </p>

        <section className="space-y-8 text-[20px] leading-[1.8]">
          <div>
            <h2 className="text-[26px] font-bold mb-2">1. Introduction</h2>
            <p>
              This Privacy Policy outlines how BigBurry Hypersystems LLP ("we",
              "our", or "us") collects, uses, shares, and protects personal data
              of users ("you") when you use the Celevery mobile application
              ("App").
            </p>
          </div>

          <div>
            <h2 className="text-[26px] font-bold mb-2">
              2. Information We Collect
            </h2>
            <p>
              We collect a wide range of information to provide and improve our
              services. Below is a detailed breakdown of the types of data we
              may collect from you:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>
                <strong>Personal Information:</strong> Name, email address,
                phone number, and delivery address
              </li>
              <li>
                <strong>Account Information:</strong> Login credentials and user
                preferences
              </li>
              <li>
                <strong>Location Data:</strong> Only if location-based features
                are used
              </li>
              <li>
                <strong>Transaction Details:</strong> Order history, payment
                records (through secure third-party gateways)
              </li>
              <li>
                <strong>Device and Usage Data:</strong> IP address, device type,
                operating system, and browsing actions
              </li>
              <li>
                <strong>Communications:</strong> Emails, chat messages, and
                support queries
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-[26px] font-bold mb-2">
              3. How We Use Your Information
            </h2>
            <p>
              Your data is used for various essential purposes, including but
              not limited to:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Creating and managing your user account</li>
              <li>Processing and fulfilling your orders</li>
              <li>Providing customer support</li>
              <li>Enhancing user experience through personalization</li>
              <li>Sending service-related messages</li>
              <li>Conducting analytics to improve app performance</li>
              <li>Ensuring legal compliance and security</li>
            </ul>
          </div>

          <div>
            <h2 className="text-[26px] font-bold mb-2">
              4. Legal Basis for Processing
            </h2>
            <ul className="list-disc pl-6 mt-2">
              <li>Your consent</li>
              <li>Performance of a contract</li>
              <li>Legal obligations</li>
              <li>Legitimate interests</li>
            </ul>
          </div>

          <div>
            <h2 className="text-[26px] font-bold mb-2">
              5. Sharing of Information
            </h2>
            <p>
              We do not sell your personal data. We may share information with:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>
                Trusted third-party vendors (e.g., payment gateways, delivery
                services)
              </li>
              <li>Government and legal authorities when legally required</li>
              <li>
                Affiliated companies or successors during business transfers
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-[26px] font-bold mb-2">6. Data Retention</h2>
            <p>
              We store personal information for as long as necessary to provide
              services, comply with legal obligations, resolve disputes, and
              enforce agreements. When data is no longer needed, we delete or
              anonymize it.
            </p>
          </div>

          <div>
            <h2 className="text-[26px] font-bold mb-2">
              7. Security of Your Information
            </h2>
            <p>
              We use administrative, technical, and physical safeguards to
              protect your data from loss, misuse, unauthorized access,
              disclosure, or alteration. While we strive to use commercially
              acceptable means, we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-[26px] font-bold mb-2">
              8. Your Rights and Choices
            </h2>
            <ul className="list-disc pl-6 mt-2">
              <li>Access the personal data we hold about you</li>
              <li>Request corrections or deletions</li>
              <li>Withdraw consent for specific data uses</li>
              <li>Restrict or object to certain types of data processing</li>
            </ul>
          </div>

          <div>
            <h2 className="text-[26px] font-bold mb-2">9. Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries
              other than India. We take appropriate steps to ensure data
              protection consistent with applicable law.
            </p>
          </div>

          <div>
            <h2 className="text-[26px] font-bold mb-2">
              10. Children's Privacy
            </h2>
            <p>
              Celevery does not knowingly collect data from children under the
              age of 18. If we discover such data was collected without parental
              consent, it will be deleted promptly.
            </p>
          </div>

          <div>
            <h2 className="text-[26px] font-bold mb-2">
              11. Cookies and Tracking Technologies
            </h2>
            <p>
              We may use cookies and similar technologies to enhance your
              experience. These technologies help us analyze usage patterns,
              remember preferences, and deliver relevant advertisements.
            </p>
          </div>

          <div>
            <h2 className="text-[26px] font-bold mb-2">
              12. Links to Other Services
            </h2>
            <p>
              Our App may contain links to other websites or services. We are
              not responsible for the privacy practices of these third parties.
              We encourage you to read their privacy policies.
            </p>
          </div>

          <div>
            <h2 className="text-[26px] font-bold mb-2">
              13. Third-Party Services and SDKs
            </h2>
            <p>
              We may integrate third-party software development kits (SDKs) for
              analytics, marketing, and performance monitoring. These providers
              may collect data according to their policies.
            </p>
          </div>

          <div>
            <h2 className="text-[26px] font-bold mb-2">
              14. Updates to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy periodically. When changes are
              made, we will revise the "Effective Date" and notify you via the
              App or email as appropriate.
            </p>
          </div>

          <div>
            <h2 className="text-[26px] font-bold mb-2">15. Contact Us</h2>
            <p>
              Email: support@bigburry.com
              <br />
              Phone: +91 8075107480
            </p>
          </div>

          <p className="pt-8">
            Thank you for trusting Celevery with your personal data. Your
            privacy is important to us.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
