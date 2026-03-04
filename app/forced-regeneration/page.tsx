import type { Metadata } from "next";
import ServicePageTemplate from "../components/ui/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Forced Regeneration Service for Trucks in South Carolina | KM Truck & Trailer",
  description: "Professional forced DPF regeneration to clear your filter and restore engine performance. Available 24/7 across South Carolina.",
};

export default function Page() {
  return (
    <ServicePageTemplate
      title="Forced Regeneration Service for Trucks in South Carolina"
      heroSubtitle="Professional forced DPF regeneration to clear your filter and restore engine performance. Available 24/7 across South Carolina."
      bodyIntro="A forced regeneration (force regen) restores your DPF filter by burning off accumulated soot using elevated exhaust temperatures. This process is initiated through professional diagnostic software connected to your truck's ECM."
      bodyContent="We perform forced regeneration for all diesel trucks including Freightliner, Kenworth, Peterbilt, and more - equipped with Cummins, Detroit Diesel, or Paccar engines. After the process, we clear warning codes and verify proper DPF function."
      features={["Mobile Force Regen","All Diesel Truck Brands","ECM Diagnostic Tools","DPF Function Verification","Warning Code Clearing","Emissions Compliance","24/7 Emergency Service","Roadside Available"]}
      faqItems={[{"question":"What triggers the need for a forced regeneration?","answer":"A DPF warning light, engine entering limp mode, reduced power, or excessive soot accumulation prompting the system to demand a regen."},{"question":"How is forced regen different from passive regen?","answer":"Passive regen happens automatically during highway driving. Forced regen requires a technician to initiate it via diagnostic software when passive regen hasn't cleared the filter."},{"question":"Can I do a forced regen myself?","answer":"No - forced regen requires professional diagnostic equipment connected to your truck's ECM. Attempting it improperly can cause damage."},{"question":"Is mobile service available?","answer":"Absolutely. We provide mobile forced regeneration service throughout South Carolina, 24 hours a day, 7 days a week."}]}
      relatedServices={[{"label":"DPF Cleaning","href":"/dpf"},{"label":"Force Regen","href":"/force-regen"},{"label":"Engine Diagnostics","href":"/vehicle-engine-diagnostic"}]}
    />
  );
}
