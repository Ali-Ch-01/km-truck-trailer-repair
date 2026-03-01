import type { Metadata } from "next";
import ServicePageTemplate from "../components/ui/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Trailer Tire Repair & Replacement in South Carolina | KM Truck & Trailer",
  description: "All trailer tire sizes — flat repair, roadside tire change, mounting and balancing. Available 24/7 across South Carolina.",
};

export default function Page() {
  return (
    <ServicePageTemplate
      title="Trailer Tire Repair & Replacement in South Carolina"
      heroSubtitle="All trailer tire sizes — flat repair, roadside tire change, mounting and balancing. Available 24/7 across South Carolina."
      bodyIntro="Trailer tire blowouts are one of the most common causes of roadside breakdowns. Our mobile tire service is equipped to handle all trailer tire sizes, providing fast flat repair or full replacement right where you are."
      bodyContent="We carry all common trailer tire sizes and can source specialty sizes quickly. Our technicians ensure proper mounting and torque to keep your trailer safe and DOT-compliant."
      features={["All Trailer Tire Sizes","Flat Repair","Tire Mounting","Balancing","Roadside Service","DOT Compliance","Budget Pricing","Emergency 24/7"]}
      faqItems={[{"question":"Can you change trailer tires roadside?","answer":"Yes. We respond 24/7 for roadside trailer tire changes and flat repairs anywhere in South Carolina."},{"question":"What trailer tire sizes do you carry?","answer":"We carry all common trailer tire sizes including 11R22.5, 11R24.5, 245/70R19.5, and more."},{"question":"Do you also repair the rim?","answer":"We inspect rims for damage during tire service and can repair or replace bent or cracked rims."},{"question":"How long does a trailer tire change take?","answer":"A standard trailer tire change takes 30–60 minutes on-site, depending on access and conditions."}]}
      relatedServices={[{"label":"Trailer Repair","href":"/trailer-repair"},{"label":"Tires","href":"/tires"},{"label":"Emergency Roadside","href":"/emergency-roadside-repair"}]}
    />
  );
}
