import type { Metadata } from "next";
import ServicePageTemplate from "../components/ui/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Skilled and Quick Brake Repair for Trucks in Columbia, SC | KM Truck & Trailer",
  description: "Expert truck brake repair — air brakes, drum & disc, ABS diagnostics, and DOT-compliant inspections. Mobile service available 24/7 across South Carolina.",
};

export default function Page() {
  return (
    <ServicePageTemplate
      title="Skilled and Quick Brake Repair for Trucks in Columbia, SC"
      heroSubtitle="Expert truck brake repair — air brakes, drum & disc, ABS diagnostics, and DOT-compliant inspections. Mobile service available 24/7 across South Carolina."
      bodyIntro="Your brakes are your most critical safety system. Our certified technicians specialize in heavy-duty truck brake repair, including air brake systems, drum and disc brakes, and ABS diagnostics for all major truck brands."
      bodyContent="We perform thorough DOT-compliant brake inspections and repairs to ensure your stopping power meets all federal safety regulations. Our mobile units can reach you roadside for emergency brake repair any time."
      features={["Air Brake Inspection","Drum & Disc Brakes","ABS Diagnostics","DOT Compliance Check","Emergency Roadside Brake Fix","Brake Adjustment","Slack Adjuster Service","Wheel Seal Replacement"]}
      faqItems={[{"question":"Do you repair air brakes roadside?","answer":"Yes — our mobile repair units handle air brake leaks, brake adjustments, and emergency brake repairs right on the road."},{"question":"What brake brands do you service?","answer":"We service all major brake brands including Bendix, Haldex, Meritor, and more across all major truck OEMs."},{"question":"How do I know if my brakes need service?","answer":"Warning signs include pulling to one side, a hissing air leak, spongy pedal feel, grinding sounds, or ABS warning lights."},{"question":"Do you perform DOT brake inspections?","answer":"Absolutely. We perform full DOT-compliant brake system inspections and provide documentation for your records."}]}
      relatedServices={[{"label":"Tires","href":"/tires"},{"label":"Steering & Suspension","href":"/steering-and-suspension"},{"label":"Emergency Roadside","href":"/emergency-roadside-repair"}]}
    />
  );
}
