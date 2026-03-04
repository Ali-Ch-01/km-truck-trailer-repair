import type { Metadata } from "next";
import ServicePageTemplate from "../components/ui/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Expert Trailer Repair in South Carolina - Mobile & Shop Service | KM Truck & Trailer",
  description: "Full trailer repair including structural, liftgate, doors, electrical, and DOT inspections. We keep your trailer road-ready.",
};

export default function Page() {
  return (
    <ServicePageTemplate
      title="Expert Trailer Repair in South Carolina - Mobile & Shop Service"
      heroSubtitle="Full trailer repair including structural, liftgate, doors, electrical, and DOT inspections. We keep your trailer road-ready."
      bodyIntro="A healthy tractor is only half the battle - your trailer needs to be road-ready too. Our comprehensive trailer repair services include structural repairs, floor repair, lighting systems, doors, liftgates, and full DOT inspections."
      bodyContent="We work on all trailer types including dry van, flatbed, refrigerated, and specialty trailers. Our technicians are experienced in DOT compliance repairs and can help you avoid costly violations."
      features={["Structural Repair","DOT Inspection","Frame Repair","Lighting & Electrical","Floor Repair","Seal Replacement","Liftgate Repair","Trailer Doors"]}
      faqItems={[{"question":"Do you perform DOT trailer inspections?","answer":"Yes. We perform thorough federal DOT inspections and provide all necessary documentation for your compliance records."},{"question":"Can you repair trailer frames?","answer":"Yes, we perform trailer frame and structural repairs to restore both safety and integrity."},{"question":"Do you service refrigerated trailers?","answer":"We service all trailer types including refrigerated, dry van, flatbed, and specialty trailers."},{"question":"Is mobile trailer repair available?","answer":"Yes. Most trailer repairs can be done at your location. Call us for a mobile repair dispatch."}]}
      relatedServices={[{"label":"Trailer Tires","href":"/trailer-tires"},{"label":"Trailer Door","href":"/trailer-door"},{"label":"Liftgate Repair","href":"/liftgate-repair"}]}
    />
  );
}
