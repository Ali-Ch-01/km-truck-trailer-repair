import type { Metadata } from "next";
import ServicePageTemplate from "../components/ui/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Trailer Electrical & AC Overhaul Services in South Carolina | KM Truck & Trailer",
  description: "Complete trailer electrical overhaul, lighting, brake controller, and AC system service. DOT compliant, mobile service available.",
};

export default function Page() {
  return (
    <ServicePageTemplate
      title="Trailer Electrical & AC Overhaul Services in South Carolina"
      heroSubtitle="Complete trailer electrical overhaul, lighting, brake controller, and AC system service. DOT compliant, mobile service available."
      bodyIntro="Trailers have complex electrical systems of their own — from lighting and brake controllers to refrigeration units and liftgate power systems. Our technicians specialize in comprehensive trailer electrical diagnostics and repair."
      bodyContent="We perform complete trailer electrical overhauls including ABS wiring, lighting rewires, connector replacement, and refrigeration unit electrical service. All work is DOT-compliant and fully inspected."
      features={["Trailer Wiring Overhaul","ABS System Repair","Lighting Systems","Brake Controller","Connector Replacement","Refrigeration Electrical","Liftgate Electrical","DOT Compliance"]}
      faqItems={[{"question":"Do you diagnose trailer ABS issues?","answer":"Yes. We diagnose and repair trailer anti-lock brake system (ABS) electrical faults including wheel sensors and control modules."},{"question":"Can you rewire my trailer lighting?","answer":"Yes, we perform complete trailer lighting rewires, connector upgrades, and LED lighting conversions."},{"question":"Do you service refrigerated trailer electrics?","answer":"Yes, we service the electrical systems of refrigerated trailers including power connections, temperature controllers, and wiring."},{"question":"Is DOT lighting compliance guaranteed?","answer":"Yes. All lighting work meets or exceeds DOT requirements. We provide documentation for your records."}]}
      relatedServices={[{"label":"Trailer Repair","href":"/trailer-repair"},{"label":"Electrical Repair","href":"/electrical"},{"label":"Liftgate Repair","href":"/liftgate-repair"}]}
    />
  );
}
