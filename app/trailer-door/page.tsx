import type { Metadata } from "next";
import ServicePageTemplate from "../components/ui/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Trailer Door Repair & Replacement in South Carolina | KM Truck & Trailer",
  description: "Roll-up door, swing door, hinges, seals, and locking mechanism repair for all trailer types. Mobile service available.",
};

export default function Page() {
  return (
    <ServicePageTemplate
      title="Trailer Door Repair & Replacement in South Carolina"
      heroSubtitle="Roll-up door, swing door, hinges, seals, and locking mechanism repair for all trailer types. Mobile service available."
      bodyIntro="A damaged or faulty trailer door can compromise cargo security and DOT compliance. Our technicians repair and replace all types of trailer doors, including roll-up doors, swing door hinges, seals, and locking mechanisms."
      bodyContent="We work on all trailer brands and door types. Whether your door won't open, won't close, or has damage from a dock incident, we can restore it to proper working condition quickly."
      features={["Roll-Up Door Repair","Swing Door Repair","Hinge Replacement","Door Seal Replacement","Lock Mechanism","Track Realignment","Damage Repair","Mobile Service"]}
      faqItems={[{"question":"Can you fix a bent trailer door?","answer":"Yes, we repair door panels and tracks that have been bent or damaged from dock incidents or accidents."},{"question":"Do you replace door seals?","answer":"Absolutely. A proper door seal is critical for cargo protection. We replace all types of trailer door seals and gaskets."},{"question":"Is mobile trailer door repair available?","answer":"Yes, most door repairs can be performed at your location with our fully equipped mobile repair units."},{"question":"Do you work on refrigerated trailer doors?","answer":"Yes, we service refrigerated trailer doors including the special gasket seals that maintain temperature integrity."}]}
      relatedServices={[{"label":"Trailer Repair","href":"/trailer-repair"},{"label":"Liftgate Repair","href":"/liftgate-repair"},{"label":"Trailer Tires","href":"/trailer-tires"}]}
    />
  );
}
