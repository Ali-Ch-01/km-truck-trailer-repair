import type { Metadata } from "next";
import ServicePageTemplate from "../components/ui/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Air & Cabin Filter Replacement for Trucks in South Carolina | KM Truck & Trailer",
  description: "Engine air filter, cabin air filter, DPF filter, and fuel filter replacement. Preventive maintenance that protects your engine.",
};

export default function Page() {
  return (
    <ServicePageTemplate
      title="Air & Cabin Filter Replacement for Trucks in South Carolina"
      heroSubtitle="Engine air filter, cabin air filter, DPF filter, and fuel filter replacement. Preventive maintenance that protects your engine."
      bodyIntro="Clogged filters reduce engine performance, increase fuel consumption, and can cause long-term damage. Regular filter replacement is one of the simplest and most cost-effective forms of preventive maintenance."
      bodyContent="We replace all types of truck filters including engine air filters, cabin air filters, fuel filters, and hydraulic filters. Our preventive maintenance service helps you stay DOT compliant and avoid costly breakdowns."
      features={["Engine Air Filter","Cabin Air Filter","DPF Filter","Fuel Filter","Hydraulic Filter","Oil Filter","Fast Service","Preventive Maintenance"]}
      faqItems={[{"question":"How often should I replace my truck's air filter?","answer":"Generally every 25,000–50,000 miles, but depends on operating conditions. Dusty environments require more frequent replacement."},{"question":"Does a clogged air filter hurt fuel economy?","answer":"Yes. A restricted air filter reduces airflow to the engine, causing it to work harder and consume more fuel."},{"question":"Do you offer full preventive maintenance packages?","answer":"Yes, we offer complete PM packages including oil change, all filters, fluid checks, and safety inspection."},{"question":"How long does filter replacement take?","answer":"Most filter replacements take 30–60 minutes and can often be done while you wait."}]}
      relatedServices={[{"label":"Semi Truck Repair","href":"/semi-truck-repair"},{"label":"DPF Cleaning","href":"/dpf"},{"label":"Engine Diagnostics","href":"/vehicle-engine-diagnostic"}]}
      images={["/Cabin%20Filter%201.jpg", "/Cabin%20Filter%202.jpg"]}
      imageLayout="scattered-alt"
    />
  );
}
