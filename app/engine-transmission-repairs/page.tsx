import type { Metadata } from "next";
import ServicePageTemplate from "../components/ui/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Engine & Transmission Repairs in South Carolina | KM Truck & Trailer",
  description: "Complete engine and transmission repair packages — from minor fixes to full overhauls. Certified technicians for all major diesel engines.",
};

export default function Page() {
  return (
    <ServicePageTemplate
      title="Engine & Transmission Repairs in South Carolina"
      heroSubtitle="Complete engine and transmission repair packages — from minor fixes to full overhauls. Certified technicians for all major diesel engines."
      bodyIntro="Engine and transmission issues are among the most complex and costly truck repairs. Our experienced team handles everything from fault diagnostics to complete rebuilds, with transparent pricing and fast turnaround."
      bodyContent="We specialize in Cummins, Detroit Diesel, and Paccar engines, along with Allison and Eaton Fuller transmissions. From minor tune-ups to full powertrain overhauls, we have the expertise to get it right the first time."
      features={["Engine Overhaulhaul","Transmission Rebuild","Clutch Service","Turbocharger Repair","Fuel System Service","Cooling System","Exhaust Repair","Mobile Diagnostics"]}
      faqItems={[{"question":"Do you offer engine overhaul services?","answer":"Yes. We perform complete engine overhauls including in-frame and out-of-frame rebuilds for all major diesel engines."},{"question":"Can you rebuild Allison transmissions?","answer":"Yes, we specialize in Allison automatic transmission rebuilds and Eaton Fuller manual gearbox repair and overhaul."},{"question":"How long does an engine overhaul take?","answer":"Engine overhauls typically take 5–10 business days depending on parts availability and the extent of the rebuild."},{"question":"Do you warranty your engine and transmission work?","answer":"Yes. All major engine and transmission repairs come with a warranty on parts and labor. Ask us for specific terms."}]}
      relatedServices={[{"label":"Engine Diagnostics","href":"/vehicle-engine-diagnostic"},{"label":"Transmission Repair","href":"/transmission"},{"label":"Semi Truck Repair","href":"/semi-truck-repair"}]}
    />
  );
}
