import type { Metadata } from "next";
import ServicePageTemplate from "../components/ui/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Electrical System Repair for Semi Trucks in South Carolina | KM Truck & Trailer",
  description: "Full electrical diagnostics, wiring repair, ECM/ECU service, and lighting for all commercial trucks. Mobile service available 24/7.",
};

export default function Page() {
  return (
    <ServicePageTemplate
      title="Electrical System Repair for Semi Trucks in South Carolina"
      heroSubtitle="Full electrical diagnostics, wiring repair, ECM/ECU service, and lighting for all commercial trucks. Mobile service available 24/7."
      bodyIntro="Electrical problems can be complex and difficult to diagnose without the right tools. Our certified technicians use advanced diagnostic equipment to pinpoint faults in your truck's electrical system quickly and accurately."
      bodyContent="From simple lighting repairs to complex ECM reprogramming, we handle the full spectrum of electrical issues on all major truck brands. Our mobile units carry the necessary equipment to perform most repairs roadside."
      features={["Wiring Diagnostics","ECM/ECU Repair","Lighting Systems","Sensor Replacement","Charging System","Fuse & Relay","Turn Signal & ABS","Mobile Electrical Service"]}
      faqItems={[{"question":"Do you repair trailer lighting?","answer":"Yes, we diagnose and repair all trailer lighting issues, including short circuits, damaged harnesses, and LED upgrades."},{"question":"Can you fix starting and charging issues?","answer":"Absolutely. We test and replace batteries, alternators, and starters to ensure your truck turns over reliably."},{"question":"What electrical systems do you service?","answer":"We repair all electrical systems including lighting, ECM harnesses, ABS wiring, charging systems, and cab accessories."},{"question":"Is mobile electrical repair available?","answer":"Yes! If your truck won't start or has a dead battery, our mobile units can diagnose and fix the issue at your location."}]}
      relatedServices={[{"label":"Engine Diagnostics","href":"/vehicle-engine-diagnostic"},{"label":"Trailer Repair","href":"/trailer-repair"},{"label":"Battery Service","href":"/battery"}]}
      images={["/electrical-img-1.jpg", "/electrical-img-2.jpg"]}
      imageLayout="sidebar-gallery"
    />
  );
}
