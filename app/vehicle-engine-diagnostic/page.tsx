import type { Metadata } from "next";
import ServicePageTemplate from "../components/ui/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Engine Diagnostics & Repair in Columbia, SC | KM Truck & Trailer",
  description: "Advanced engine diagnostics for Cummins, Detroit Diesel, and Paccar engines. Accurate fault code reading and efficient repair.",
};

export default function Page() {
  return (
    <ServicePageTemplate
      title="Engine Diagnostics & Repair in Columbia, SC"
      heroSubtitle="Advanced engine diagnostics for Cummins, Detroit Diesel, and Paccar engines. Accurate fault code reading and efficient repair."
      bodyIntro="A check engine light or reduced performance can mean anything from a simple sensor fault to a complex engine issue. Our certified technicians use OEM-level diagnostic software to quickly and accurately identify the root cause."
      bodyContent="We specialize in Cummins, Detroit Diesel, and Paccar engine diagnostics and repair, including ECM reprogramming, turbocharger diagnosis, cooling system issues, and full engine overhauls."
      features={["OEM Diagnostic Software","Fault Code Reading","Cummins/Detroit/Paccar","ECM Diagnostics","Sensor Testing","Turbo Diagnosis","Cooling System","Full Engine Repair"]}
      faqItems={[{"question":"What diagnostic software do you use?","answer":"We use Cummins Insite, Detroit Diagnostic Link (DDL), and other OEM-specific software for accurate diagnostics."},{"question":"Can you diagnose issues roadside?","answer":"Yes! Our mobile diagnostic units can read fault codes and perform preliminary diagnosis at your location."},{"question":"How long does a diagnostic take?","answer":"Basic diagnostic scanning takes 30–60 minutes. Complex intermittent issues may require additional test drive time."},{"question":"Do you clear codes after repair?","answer":"Yes, we clear all related fault codes and verify repair success through test procedures before returning your truck."}]}
      relatedServices={[{"label":"Semi Truck Repair","href":"/semi-truck-repair"},{"label":"Electrical Repair","href":"/electrical"},{"label":"DPF Cleaning","href":"/dpf"}]}
    />
  );
}
