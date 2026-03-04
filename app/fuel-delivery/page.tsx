import type { Metadata } from "next";
import ServicePageTemplate from "../components/ui/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Emergency Diesel Fuel Delivery in South Carolina | KM Truck & Trailer",
  description: "Ran out of fuel? We deliver diesel directly to your truck anywhere in South Carolina - 24/7 emergency response.",
};

export default function Page() {
  return (
    <ServicePageTemplate
      title="Emergency Diesel Fuel Delivery in South Carolina"
      heroSubtitle="Ran out of fuel? We deliver diesel directly to your truck anywhere in South Carolina - 24/7 emergency response."
      bodyIntro="Running out of diesel on the road is a costly and frustrating situation. Our emergency fuel delivery service brings diesel directly to your location, getting you back on the road without a tow."
      bodyContent="We carry clean diesel fuel and deliver it to your truck anywhere in South Carolina. After fueling, we can also prime your fuel system if needed and verify the engine starts and runs properly."
      features={["Diesel Fuel Delivery","System Priming","Engine Verification","24/7 Emergency","Roadside Response","Any SC Location","Fast Dispatch","Affordable Rates"]}
      faqItems={[{"question":"How quickly can you deliver fuel?","answer":"We typically reach your location within 60–90 minutes anywhere in South Carolina."},{"question":"Do you deliver DEF (Diesel Exhaust Fluid) too?","answer":"Call us about DEF delivery - availability varies by location and unit."},{"question":"Do you need to prime the fuel system after delivery?","answer":"If the truck ran completely out of fuel, priming the system is usually necessary. Our technicians handle this as part of the service."},{"question":"How much fuel do you typically deliver?","answer":"We typically deliver enough to get you to the nearest fueling station - around 20–50 gallons for most situations."}]}
      relatedServices={[{"label":"Emergency Roadside","href":"/emergency-roadside-repair"},{"label":"Lockouts","href":"/lockouts"},{"label":"Battery Service","href":"/battery"}]}
    />
  );
}
