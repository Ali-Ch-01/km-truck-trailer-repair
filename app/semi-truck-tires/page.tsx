import type { Metadata } from "next";
import ServicePageTemplate from "../components/ui/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Semi Truck Tires - Repair & Replacement in South Carolina | KM Truck & Trailer",
  description: "All steer, drive, and trailer positions. Roadside tire service, mounting, balancing for all 18-wheeler tire sizes. 24/7 response.",
};

export default function Page() {
  return (
    <ServicePageTemplate
      title="Semi Truck Tires - Repair & Replacement in South Carolina"
      heroSubtitle="All steer, drive, and trailer positions. Roadside tire service, mounting, balancing for all 18-wheeler tire sizes. 24/7 response."
      bodyIntro="Semi truck tires are critical safety components. Whether you need a simple flat repair or full tire replacement for your steer, drive, or trailer axles, our mobile tire team is ready to respond."
      bodyContent="We stock a wide range of commercial tire brands and sizes and can source specialty tires quickly. All tire work is performed to manufacturer specifications and DOT standards."
      features={["All Steer/Drive/Trailer","Flat Repair","Roadside Service","Mounting & Balancing","All Major Brands","Budget-Friendly","DOT Compliant","Emergency 24/7"]}
      faqItems={[{"question":"Do you stock steer tires for 18-wheelers?","answer":"Yes, we stock all positions including steer, drive, and trailer tires for commercial semi-trucks."},{"question":"Can you match OEM specifications?","answer":"Yes, we match OEM tire specifications for load rating, speed rating, and size."},{"question":"Do you offer roadside tire replacement?","answer":"Yes - 24/7 roadside tire replacement for all semi-truck configurations anywhere in South Carolina."},{"question":"How do I know when to replace my semi tires?","answer":"Replace tires when tread depth is below 4/32\" (steer) or 2/32\" (drive/trailer), when there is visible sidewall damage, or after any blowout event."}]}
      relatedServices={[{"label":"Tires","href":"/tires"},{"label":"Trailer Tires","href":"/trailer-tires"},{"label":"Emergency Roadside","href":"/emergency-roadside-repair"}]}
    />
  );
}
