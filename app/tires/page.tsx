import type { Metadata } from "next";
import ServicePageTemplate from "../components/ui/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Tire Repair & Change for Trucks in South Carolina | KM Truck & Trailer",
  description: "Commercial truck tire repair, mounting, and balancing. Roadside flat repair available 24/7 across South Carolina.",
};

export default function Page() {
  return (
    <ServicePageTemplate
      title="Tire Repair & Change for Trucks in South Carolina"
      heroSubtitle="Commercial truck tire repair, mounting, and balancing. Roadside flat repair available 24/7 across South Carolina."
      bodyIntro="A flat or blowout can bring your operation to a halt. Our mobile tire team arrives fast with the right equipment to repair or replace your commercial tires roadside, at your yard, or in our shop."
      bodyContent="We carry a wide selection of commercial tire brands and sizes for steer, drive, and trailer positions. Whether it's a simple repair or full replacement, we get you rolling again fast."
      features={["Flat Tire Repair","Tire Mounting & Balancing","Roadside Service","All Major Brands","Steer/Drive/Trailer Tires","Emergency Service","Budget-Friendly Pricing","Commercial Sizes"]}
      faqItems={[{"question":"Do you offer roadside tire repair?","answer":"Yes! Our mobile units respond 24/7 for roadside flat repair, tire changes, and emergency blowout service."},{"question":"What tire brands do you carry?","answer":"We stock and service major brands including Michelin, Bridgestone, Goodyear, Continental, and more."},{"question":"How long does a tire change take?","answer":"A roadside tire change typically takes 30–60 minutes depending on access and the type of repair needed."},{"question":"Do you service trailer tires too?","answer":"Yes, we service all trailer tire sizes. Visit our Trailer Tires page for more specific information."}]}
      relatedServices={[{"label":"Brakes","href":"/brakes"},{"label":"Trailer Tires","href":"/trailer-tires"},{"label":"Emergency Roadside","href":"/emergency-roadside-repair"}]}
    />
  );
}
