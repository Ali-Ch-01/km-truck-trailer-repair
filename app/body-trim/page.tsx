import type { Metadata } from "next";
import ServicePageTemplate from "../components/ui/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Truck Body & Trim Repair in South Carolina | KM Truck & Trailer",
  description: "Professional truck cab, body, and trim repair to restore your truck's appearance and structural integrity.",
};

export default function Page() {
  return (
    <ServicePageTemplate
      title="Truck Body & Trim Repair in South Carolina"
      heroSubtitle="Professional truck cab, body, and trim repair to restore your truck's appearance and structural integrity."
      bodyIntro="From minor trim damage to cab panel repairs, our technicians handle all types of truck body work. We focus on restoring both appearance and structural integrity to ensure your truck is road-ready."
      bodyContent="We work on all major truck brands and can assist with insurance claims for repair documentation. Our shop is equipped to handle everything from door repairs to full panel replacement."
      features={["Cab Repair","Door Repair","Body Alignment","Trim Replacement","Panel Repair","Mirror Service","Step Replacement","Custom Work"]}
      faqItems={[{"question":"Do you repair fiberglass body panels?","answer":"Yes, we repair both fiberglass and aluminum truck body panels and fairings."},{"question":"Can you help with insurance claim repairs?","answer":"We can provide documentation and repair estimates for insurance claims."},{"question":"Do you work on sleeper cab damage?","answer":"Yes, we handle sleeper cab repairs including damage to exterior panels, doors, and trim."},{"question":"How long does body repair take?","answer":"Depending on the extent of damage, most body repairs are completed in 1–3 business days."}]}
      relatedServices={[{"label":"Semi Truck Repair","href":"/semi-truck-repair"},{"label":"Engine Diagnostics","href":"/vehicle-engine-diagnostic"},{"label":"Electrical Repair","href":"/electrical"}]}
    />
  );
}
