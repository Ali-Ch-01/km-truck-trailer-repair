import type { Metadata } from "next";
import ServicePageTemplate from "../components/ui/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Reliable Semi Truck Repair in Columbia, SC | KM Truck & Trailer",
  description: "Complete semi-truck repair from engine to trailer. Certified technicians, honest pricing, 24/7 availability across South Carolina.",
};

export default function Page() {
  return (
    <ServicePageTemplate
      title="Reliable Semi Truck Repair in Columbia, SC"
      heroSubtitle="Complete semi-truck repair from engine to trailer. Certified technicians, honest pricing, 24/7 availability across South Carolina."
      bodyIntro="From minor roadside fixes to complete engine overhauls, K&M Truck & Trailer provides reliable semi-truck repair for drivers and fleets throughout South Carolina. Our certified technicians specialize in all major diesel truck brands."
      bodyContent="We offer quick diagnosis using professional diagnostic tools, high-quality components, and reliable repairs that minimize your downtime. Fleet owners rely on our dedication to quality, affordability, and fast turnaround."
      features={["Engine Repair & Overhaul","Transmission Service","Brake Repair","Electrical Diagnostics","AC & Heating","Preventive Maintenance","DOT Inspections","Emergency Roadside"]}
      faqItems={[{"question":"What truck brands do you service?","answer":"We service all major brands: Freightliner, Kenworth, Peterbilt, Volvo, International, Mack, and Western Star."},{"question":"Do you offer fleet maintenance programs?","answer":"Yes, we offer preventive maintenance programs tailored to your fleet size and operational needs."},{"question":"Can you handle emergency breakdowns?","answer":"Absolutely. Our emergency mobile team is available 24/7 to respond to breakdowns anywhere in South Carolina."},{"question":"How do you handle engine diagnostics?","answer":"We use professional diagnostic tools including Cummins Insite, Detroit Diagnostic Link, and other OEM software for accurate fault reading."}]}
      relatedServices={[{"label":"Engine Diagnostics","href":"/vehicle-engine-diagnostic"},{"label":"Transmission Repair","href":"/transmission"},{"label":"Emergency Roadside","href":"/emergency-roadside-repair"}]}
    />
  );
}
