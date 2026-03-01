import type { Metadata } from "next";
import ServicePageTemplate from "../components/ui/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Steering & Suspension Repair for Trucks in South Carolina | KM Truck & Trailer",
  description: "Full steering and suspension service — steering gear, tie rods, air bags, shocks, and wheel alignment. Mobile service available.",
};

export default function Page() {
  return (
    <ServicePageTemplate
      title="Steering & Suspension Repair for Trucks in South Carolina"
      heroSubtitle="Full steering and suspension service — steering gear, tie rods, air bags, shocks, and wheel alignment. Mobile service available."
      bodyIntro="Proper steering and suspension are critical for safe truck operation. Our technicians inspect and repair all components of your truck's steering and suspension systems to ensure confident handling and a smooth ride."
      bodyContent="We service air ride suspension, leaf spring systems, steering gears, tie rods, and perform wheel alignments to extend tire life and improve handling. Road-ready inspection included."
      features={["Steering Gear Repair","Tie Rod Replacement","Air Bag Service","Shock Absorbers","Wheel Alignment","Kingpin Service","U-Joint Replacement","Road-Ready Inspection"]}
      faqItems={[{"question":"How do I know if my suspension needs repair?","answer":"Signs include uneven tire wear, drifting or pulling, bouncing, difficulty steering, or clunking sounds over bumps."},{"question":"Do you perform wheel alignments?","answer":"Yes, we perform precision wheel alignments on commercial trucks to improve handling and extend tire life."},{"question":"Can you repair air ride suspension?","answer":"Yes, we service and repair air ride suspension systems including air bags, valves, and height sensors."},{"question":"Is mobile suspension diagnosis available?","answer":"We can perform an initial inspection at your location, though most suspension repairs are best done in our shop."}]}
      relatedServices={[{"label":"Brakes","href":"/brakes"},{"label":"Tires","href":"/tires"},{"label":"Semi Truck Repair","href":"/semi-truck-repair"}]}
    />
  );
}
