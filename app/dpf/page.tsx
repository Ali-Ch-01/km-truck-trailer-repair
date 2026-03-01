import type { Metadata } from "next";
import ServicePageTemplate from "../components/ui/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Truck DPF Cleaning Service in South Carolina | KM Truck & Trailer",
  description: "Professional DPF filter cleaning to restore power, improve fuel efficiency, and keep you emissions-compliant. Certified service for all truck brands.",
};

export default function Page() {
  return (
    <ServicePageTemplate
      title="Truck DPF Cleaning Service in South Carolina"
      heroSubtitle="Professional DPF filter cleaning to restore power, improve fuel efficiency, and keep you emissions-compliant. Certified service for all truck brands."
      bodyIntro="A clogged DPF can impact your vehicle in several ways — reduced engine power, poor fuel economy, and repeated regeneration cycles are common symptoms. Using certified equipment, we remove soot and ash thoroughly to restore proper airflow and reduce backpressure."
      bodyContent="Regular DPF cleaning ensures compliance with environmental regulations. For diesel truck owners in South Carolina, maintaining a clean DPF is essential for keeping emissions within legal limits and avoiding potential fines."
      features={["Clean Air for Trucks","Complete DPF Service","Mobile DPF Regen","Advanced Tools","Fuel & Law Compliance","All Truck Types","Affordable Rates","Roadside Help"]}
      faqItems={[{"question":"Do you offer mobile DPF regen service?","answer":"Yes! We offer mobile forced regeneration wherever you are in South Carolina — roadside, truck stop, or your yard."},{"question":"What brands do you service?","answer":"We service all major brands including Freightliner, Kenworth, Peterbilt, Volvo, International, and Mack with Cummins, Detroit Diesel, and Paccar engines."},{"question":"How long does DPF cleaning take?","answer":"Most DPF cleaning services take 2–4 hours depending on the level of clogging. Force regen services typically take 45–90 minutes."},{"question":"When do I know I need DPF cleaning?","answer":"Signs include yellow/amber DPF warning lights, reduced engine power, increased fuel consumption, or the engine entering 'limp mode'."}]}
      relatedServices={[{"label":"Force Regen","href":"/force-regen"},{"label":"Engine Diagnostics","href":"/vehicle-engine-diagnostic"},{"label":"Electrical Repair","href":"/electrical"}]}
    />
  );
}
