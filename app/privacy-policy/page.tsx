import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | KM Truck & Trailer",
  description: "Privacy Policy for KM Truck & Trailer — how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__breadcrumb">
            <Link href="/">Home</Link> <span>/</span>
            <span style={{ color: "#CBD5E1" }}>Privacy Policy</span>
          </div>
          <h1 style={{ color: "#fff", marginBottom: "12px" }}>Privacy Policy</h1>
          <p style={{ color: "#94A3B8" }}>Last updated: January 1, 2025</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
            {[
              {
                title: "1. Information We Collect",
                body: "We collect information you provide directly to us, such as when you contact us through our website, call us, or request a service. This may include your name, phone number, email address, vehicle information, and details about your service request.\n\nWe may also automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, and information about how you use our site."
              },
              {
                title: "2. How We Use Your Information",
                body: "We use the information we collect to:\n• Respond to your inquiries and requests\n• Provide, maintain, and improve our services\n• Send you service updates and communications\n• Comply with legal obligations\n• Protect the safety and security of our services"
              },
              {
                title: "3. Cookies and Tracking Technologies",
                body: "We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service."
              },
              {
                title: "4. Information Sharing",
                body: "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information with trusted service providers who assist us in operating our website or servicing you, so long as they agree to keep your information confidential."
              },
              {
                title: "5. Data Security",
                body: "We implement appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security."
              },
              {
                title: "6. Third-Party Links",
                body: "Our website may contain links to third-party websites. We have no control over the content and practices of these sites and cannot accept responsibility for their respective privacy policies."
              },
              {
                title: "7. Children's Privacy",
                body: "Our services are not directed to individuals under 13 years of age. We do not knowingly collect personal information from children under 13."
              },
              {
                title: "8. Changes to This Policy",
                body: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'Last updated' date."
              },
              {
                title: "9. Contact Us",
                body: "If you have any questions about this Privacy Policy, please contact us at:\n\nKM Truck & Trailer Repair\n1278 State Rd S-20-233, Ridgeway, SC 29130\nPhone: (803) 393-4907\nEmail: repair@kmtrucktrailer.com"
              }
            ].map((section) => (
              <div key={section.title}>
                <h3 style={{ marginBottom: "12px", color: "#111827" }}>{section.title}</h3>
                {section.body.split("\n").map((para, i) => (
                  para.trim() ? <p key={i} style={{ color: "#374151", lineHeight: 1.8, marginBottom: "8px" }}>{para}</p> : null
                ))}
                <div style={{ height: "1px", background: "#F1F4F8", marginTop: "24px" }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
