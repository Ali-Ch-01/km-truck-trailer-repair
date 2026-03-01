import type { Metadata } from "next";
import ServicePageTemplate from "../components/ui/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Transmission Repair & Complete Overhauls in South Carolina | KM Truck & Trailer",
  description: "Expert transmission repair for all automatic and manual heavy-duty truck transmissions. From minor adjustments to full rebuilds.",
};

export default function Page() {
  return (
    <ServicePageTemplate
      title="Transmission Repair & Complete Overhauls in South Carolina"
      heroSubtitle="Expert transmission repair for all automatic and manual heavy-duty truck transmissions. From minor adjustments to full rebuilds."
      bodyIntro="A failing transmission can sideline your truck for days. Our experienced technicians diagnose and repair all types of heavy-duty truck transmissions, from minor adjustments to complete rebuilds."
      bodyContent="We specialize in Allison automatic transmissions, Eaton Fuller manual transmissions, and all other major heavy-duty gearbox brands. Our diagnostics pinpoint the exact issue to avoid unnecessary repairs and cost."
      features={["Full Transmission Rebuild","Clutch Service","Fluid Flush & Refill","Electronic Diagnostics","Allison & Eaton Fuller","Minor Adjustments","Torque Converter","Mobile Inspection"]}
      faqItems={[{"question":"Do you rebuild transmissions?","answer":"Yes. We perform complete transmission rebuilds and overhauls for all major heavy-duty truck transmission brands."},{"question":"How do I know if my transmission needs repair?","answer":"Signs include slipping gears, hard shifts, delayed engagement, unusual noises, or transmission warning lights."},{"question":"How long does a transmission rebuild take?","answer":"A full transmission rebuild typically takes 3–5 business days. Simpler services like fluid changes take just a few hours."},{"question":"Do you service Allison automatic transmissions?","answer":"Yes, we specialize in Allison automatic and Eaton Fuller manual transmissions, among all other major brands."}]}
      relatedServices={[{"label":"Engine Diagnostics","href":"/vehicle-engine-diagnostic"},{"label":"Semi Truck Repair","href":"/semi-truck-repair"},{"label":"Electrical Repair","href":"/electrical"}]}
    />
  );
}
