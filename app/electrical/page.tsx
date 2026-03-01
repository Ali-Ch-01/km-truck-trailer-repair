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
      faqItems={[{"question":"Can you diagnose electrical problems roadside?","answer":"Yes. Our mobile units are equipped with professional diagnostic tools to identify and repair most electrical faults on-site."},{"question":"What brands do you service?","answer":"We service all major brands including Freightliner, Kenworth, Peterbilt, Volvo, International, and Mack."},{"question":"Can you repair or replace an ECM?","answer":"Yes. We perform ECM diagnostics, repair, and replacement/reprogramming for most truck applications."},{"question":"How long does electrical repair take?","answer":"Diagnosis typically takes 1–2 hours. Repairs vary based on complexity, from 1 hour for simple faults to a full day for complex systems."}]}
      relatedServices={[{"label":"Battery Service","href":"/battery"},{"label":"Engine Diagnostics","href":"/vehicle-engine-diagnostic"},{"label":"Emergency Roadside","href":"/emergency-roadside-repair"}]}
    />
  );
}
