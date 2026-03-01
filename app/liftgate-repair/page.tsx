import type { Metadata } from "next";
import ServicePageTemplate from "../components/ui/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Liftgate Repair & Maintenance in South Carolina | KM Truck & Trailer",
  description: "Hydraulic, electrical, and platform liftgate repair for all brands. Keep your liftgate safe and operational.",
};

export default function Page() {
  return (
    <ServicePageTemplate
      title="Liftgate Repair & Maintenance in South Carolina"
      heroSubtitle="Hydraulic, electrical, and platform liftgate repair for all brands. Keep your liftgate safe and operational."
      bodyIntro="A malfunctioning liftgate can bring your delivery operation to a standstill. Our technicians repair hydraulic systems, electrical components, platform mechanisms, and safety features on all major liftgate brands."
      bodyContent="We service Maxon, Waltco, Anthony, Tommy Gate, and other major liftgate brands. Safety is our priority — every liftgate repair includes a full safety inspection and weight capacity verification."
      features={["Hydraulic Repair","Electrical Service","Platform Repair","Safety Inspection","All Major Brands","Weight Capacity Check","Control Repair","Mobile Service"]}
      faqItems={[{"question":"What liftgate brands do you service?","answer":"We service all major brands including Maxon, Waltco, Anthony, Tommy Gate, Thieman, and more."},{"question":"Can you repair hydraulic liftgate leaks?","answer":"Yes. Hydraulic leaks are a common issue. We locate the leak, replace seals or cylinders, and refill fluid."},{"question":"Is liftgate safety inspection included?","answer":"Yes, every liftgate repair includes a full safety inspection and operational test before we return your vehicle."},{"question":"Do you offer mobile liftgate repair?","answer":"Yes, most liftgate repairs can be performed at your location with our mobile technicians."}]}
      relatedServices={[{"label":"Trailer Door","href":"/trailer-door"},{"label":"Trailer Repair","href":"/trailer-repair"},{"label":"Electrical Repair","href":"/electrical"}]}
    />
  );
}
