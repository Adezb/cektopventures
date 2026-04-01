import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { About } from "./components/About";
import { FeaturedProduct } from "./components/FeaturedProduct";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { LegalPage } from "./pages/LegalPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <FeaturedProduct />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-brand-cloud text-brand-navy">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/privacy-policy"
            element={
              <LegalPage
                title="Privacy Policy"
                summary="This Privacy Policy explains how CEK TOP VENTURES LTD may collect, use, protect, and manage personal information when visitors use our website or contact us about our services and products."
                sections={[
                  {
                    heading: "Information We May Collect",
                    paragraphs: [
                      "We may collect information you choose to share with us, such as your name, email address, phone number, business details, and any message sent through email, WhatsApp, or other contact channels.",
                      "We may also collect limited technical data such as browser type, device information, IP address, referral source, and general website usage information to help us understand site performance and improve the visitor experience.",
                    ],
                  },
                  {
                    heading: "How We Use Information",
                    paragraphs: [
                      "We use collected information to respond to enquiries, provide requested information about our services or products, improve our website, support business communication, and maintain the security and reliability of our digital platforms.",
                      "We do not use your information for purposes that are unrelated to our business relationship without a lawful basis or your consent where required.",
                    ],
                  },
                  {
                    heading: "Sharing and Disclosure",
                    paragraphs: [
                      "We may share information with trusted service providers or technical partners only when necessary to operate our website, communicate with users, or support our business operations.",
                      "We may also disclose information where required by law, regulation, legal process, or to protect our rights, users, systems, or business interests.",
                    ],
                  },
                  {
                    heading: "Data Security and Retention",
                    paragraphs: [
                      "We take reasonable administrative, technical, and organizational steps to protect personal information from unauthorized access, misuse, or disclosure. However, no internet-based platform can guarantee absolute security.",
                      "We retain information only for as long as it is reasonably needed for communication, service delivery, legal compliance, or legitimate business purposes.",
                    ],
                  },
                  {
                    heading: "Your Choices",
                    paragraphs: [
                      "You may contact us to request updates to your information, ask questions about how your information is handled, or request that we stop certain communications, subject to legal and operational requirements.",
                      "By continuing to use this website, you acknowledge this Privacy Policy. We may update this page from time to time, and any updates will apply from the date they are published here.",
                    ],
                  },
                ]}
              />
            }
          />
          <Route
            path="/terms-of-service"
            element={
              <LegalPage
                title="Terms of Service"
                summary="These Terms of Service govern the use of the CEK TOP VENTURES LTD website and the informational content made available through it."
                sections={[
                  {
                    heading: "Acceptance of Terms",
                    paragraphs: [
                      "By accessing or using this website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree, you should not use the website.",
                      "This website is provided for general information about CEK TOP VENTURES LTD, its technology services, and its products, including ROT8.",
                    ],
                  },
                  {
                    heading: "Permitted Use",
                    paragraphs: [
                      "You may use this website for lawful, informational, and business communication purposes only. You agree not to misuse the website, interfere with its operation, attempt unauthorized access, or use its content in a misleading or unlawful way.",
                      "We may update, suspend, or remove any part of the website at any time without prior notice.",
                    ],
                  },
                  {
                    heading: "Intellectual Property",
                    paragraphs: [
                      "Unless otherwise stated, the website design, branding, text, graphics, logos, product descriptions, and related materials are owned by or used with permission by CEK TOP VENTURES LTD.",
                      "You may not reproduce, republish, distribute, or exploit website content for commercial purposes without prior written permission.",
                    ],
                  },
                  {
                    heading: "Links and Third-Party Services",
                    paragraphs: [
                      "This website may contain links to third-party services or external websites, including the ROT8 web app and WhatsApp contact links. We provide these links for convenience and do not control third-party platforms.",
                      "Your use of external websites or services is subject to their own terms, policies, and operational practices.",
                    ],
                  },
                  {
                    heading: "Disclaimers and Limitation of Liability",
                    paragraphs: [
                      "The website and its contents are provided on an as-is and as-available basis without warranties of any kind, whether express or implied, except as required by applicable law.",
                      "CEK TOP VENTURES LTD is not liable for indirect, incidental, consequential, or business interruption losses arising from website use, inability to use the website, or reliance on website content.",
                    ],
                  },
                  {
                    heading: "Governing Terms",
                    paragraphs: [
                      "We may revise these Terms of Service from time to time by updating this page. Continued use of the website after updates are published constitutes acceptance of the revised terms.",
                      "If you have questions about these terms, you may contact us through the contact details provided on this website.",
                    ],
                  },
                ]}
              />
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
