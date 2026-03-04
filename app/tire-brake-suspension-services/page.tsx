import type { Metadata } from "next";
import ServicePageTemplate from "../components/ui/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Tire, Brake & Suspension Services in South Carolina | KM Truck & Trailer",
  description: "Complete tire, brake, and suspension service package - DOT compliant, roadside or in-shop, for all truck types.",
};

export default function Page() {
  return (
    <ServicePageTemplate
      title="Tire, Brake & Suspension Services in South Carolina"
      heroSubtitle="Complete tire, brake, and suspension service package - DOT compliant, roadside or in-shop, for all truck types."
      bodyIntro="Your truck's tire, brake, and suspension systems work together to keep you safe and on the road. Our comprehensive service package addresses all three systems, ensuring maximum safety and compliance."
      bodyContent="We perform full DOT inspections covering these critical systems and provide detailed reports for your records. Our preventive approach helps you catch issues before they become costly breakdowns."
      features={["Full Tire Package","Brake System Overhaul","Suspension Inspection","DOT Inspection","Wheel Alignment","Air Ride Service","Roadside Available","Fleet Packages"]}
      faqItems={[{"question":"Do you offer package pricing for all three systems?","answer":"Yes. Our tire, brake, and suspension service package offers bundled pricing for full system inspections and repairs."},{"question":"Is this service available for my full fleet?","answer":"Absolutely. We offer fleet maintenance programs covering all three systems on a scheduled basis."},{"question":"Can you do roadside tire and brake service together?","answer":"Yes, our mobile units can handle both tire and brake repairs at your location simultaneously."},{"question":"What does the DOT inspection cover?","answer":"Our DOT inspection covers brake function, tire condition and tread depth, wheel fasteners, suspension integrity, and more."}]}
      relatedServices={[{"label":"Brakes","href":"/brakes"},{"label":"Tires","href":"/tires"},{"label":"Steering & Suspension","href":"/steering-and-suspension"}]}
    />
  );
}
