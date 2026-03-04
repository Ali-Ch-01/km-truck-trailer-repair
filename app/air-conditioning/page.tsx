import type { Metadata } from "next";
import ServicePageTemplate from "../components/ui/ServicePageTemplate";

export const metadata: Metadata = {
  title: "AC & Heating Repair for Trucks in South Carolina | KM Truck & Trailer",
  description: "Truck HVAC repair - AC recharge, compressor, heater core, blower motor. Mobile service available across South Carolina.",
};

export default function Page() {
  return (
    <ServicePageTemplate
      title="AC & Heating Repair for Trucks in South Carolina"
      heroSubtitle="Truck HVAC repair - AC recharge, compressor, heater core, blower motor. Mobile service available across South Carolina."
      bodyIntro="Staying comfortable in your cab matters - especially on long hauls through South Carolina's hot summers and cold winters. Our HVAC technicians handle the full range of truck heating and cooling repairs."
      bodyContent="We diagnose and repair all truck HVAC systems including sleeper compartment climate control. Our mobile units can perform most AC and heating repairs on-site."
      features={["AC Recharge","Leak Detection","Compressor Repair","Heater Core Service","Blower Motor","Evaporator Cleaning","Refrigerant Recharge","Mobile HVAC Service"]}
      faqItems={[{"question":"Can you recharge my truck AC roadside?","answer":"Yes, we offer mobile AC service including refrigerant recharge and leak diagnosis across South Carolina."},{"question":"What refrigerant type do you use?","answer":"We use R-134a for most truck applications and R-1234yf for newer model vehicles as specified by the manufacturer."},{"question":"How do I know if my AC compressor needs replacement?","answer":"Signs include loud clicking or grinding noise from the AC, no cold air, visible damage to the compressor, or clutch not engaging."},{"question":"Do you repair parking heaters?","answer":"Yes, we service and repair auxiliary parking heaters (Webasto, Espar, etc.) for sleeper comfort."}]}
      relatedServices={[{"label":"Heating & AC Repairs","href":"/heating-ac-repairs"},{"label":"Electrical Repair","href":"/electrical"},{"label":"Semi Truck Repair","href":"/semi-truck-repair"}]}
    />
  );
}
