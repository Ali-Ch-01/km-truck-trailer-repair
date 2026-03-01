import type { Metadata } from "next";
import ServicePageTemplate from "../components/ui/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Heating & AC Repairs for Trucks in South Carolina | KM Truck & Trailer",
  description: "Full truck HVAC repairs — heater core, blower motor, AC recharge, compressor, and more. Mobile service available.",
};

export default function Page() {
  return (
    <ServicePageTemplate
      title="Heating & AC Repairs for Trucks in South Carolina"
      heroSubtitle="Full truck HVAC repairs — heater core, blower motor, AC recharge, compressor, and more. Mobile service available."
      bodyIntro="A comfortable cab keeps drivers focused and safe on long hauls. Our HVAC technicians restore your truck's heating and air conditioning systems to full working order, handling everything from simple recharges to complex component replacements."
      bodyContent="We service all major truck HVAC systems including sleeper compartment climate control, APU air conditioning, and parking heaters. Most repairs can be performed at your location."
      features={["Heater Core Repair","Blower Motor Replacement","AC Recharge","Compressor Repair","Coolant System","Thermostat Service","Parking Heater","Mobile HVAC"]}
      faqItems={[{"question":"Can you fix my heat roadside?","answer":"For simpler heater issues like a stuck thermostat or low coolant, yes. Complex heater core replacements are best done in our shop."},{"question":"What causes truck AC to stop working?","answer":"Common causes include refrigerant leaks, compressor failure, blocked condenser, or electrical faults in the control module."},{"question":"Do you service auxiliary parking heaters?","answer":"Yes, we service Webasto, Espar, and other auxiliary parking heaters used in sleeper cabs."},{"question":"How long does an AC recharge take?","answer":"A basic AC recharge typically takes 1–1.5 hours including leak testing and refrigerant recovery and recharge."}]}
      relatedServices={[{"label":"Air Conditioning","href":"/air-conditioning"},{"label":"Electrical Repair","href":"/electrical"},{"label":"Semi Truck Repair","href":"/semi-truck-repair"}]}
    />
  );
}
