import type { Metadata } from "next";
import ServicePageTemplate from "../components/ui/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Force Regen Service for Trucks in Columbia, SC | KM Truck & Trailer",
  description: "Professional forced regeneration to clear your DPF and get you out of limp mode. Mobile service available 24/7 across South Carolina.",
};

export default function Page() {
  return (
    <ServicePageTemplate
      title="Force Regen Service for Trucks in Columbia, SC"
      heroSubtitle="Professional forced regeneration to clear your DPF and get you out of limp mode. Mobile service available 24/7 across South Carolina."
      bodyIntro="When your truck enters limp mode due to a clogged DPF, a forced regeneration is often the fastest solution. Our technicians perform mobile force regen service using professional diagnostic tools connected to your truck's ECM."
      bodyContent="We specialize in forced regen for Cummins, Detroit Diesel, and Paccar engines. After the regen, we inspect your DPF system to ensure it's functioning properly and advise on any additional cleaning if needed."
      features={["Mobile Force Regen","ECM-Connected Service","DPF System Inspection","Reset Warning Lights","Cummins/Detroit/Paccar","Quick Response","Emissions Compliance","Roadside Available"]}
      faqItems={[{"question":"What is a force regen?","answer":"A forced regeneration is a process where your truck's DPF (diesel particulate filter) is cleaned by burning off accumulated soot using elevated exhaust temperatures, initiated via diagnostic software."},{"question":"How long does force regen take?","answer":"A typical forced regeneration takes 45–90 minutes to complete, depending on the engine and DPF condition."},{"question":"Do you come to my location?","answer":"Yes! Our mobile team comes to your truck's location — roadside, truck stop, or your yard — anywhere in South Carolina."},{"question":"When do I need a force regen vs DPF cleaning?","answer":"Force regen clears soot through heat. If soot levels are very high or there's ash buildup, physical DPF cleaning may also be needed."}]}
      relatedServices={[{"label":"DPF Cleaning","href":"/dpf"},{"label":"Engine Diagnostics","href":"/vehicle-engine-diagnostic"},{"label":"Electrical Repair","href":"/electrical"}]}
    />
  );
}
