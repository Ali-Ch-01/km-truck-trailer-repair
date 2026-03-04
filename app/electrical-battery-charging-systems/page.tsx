import type { Metadata } from "next";
import ServicePageTemplate from "../components/ui/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Electrical, Battery & Charging System Service in South Carolina | KM Truck & Trailer",
  description: "Complete truck electrical, battery, and charging system diagnostics and repair. Mobile service available 24/7.",
};

export default function Page() {
  return (
    <ServicePageTemplate
      title="Electrical, Battery & Charging System Service in South Carolina"
      heroSubtitle="Complete truck electrical, battery, and charging system diagnostics and repair. Mobile service available 24/7."
      bodyIntro="Your truck's electrical and charging system powers everything from the engine management system to cab comfort features. When any component fails, it can cause cascading issues throughout the vehicle."
      bodyContent="We diagnose and repair the entire electrical ecosystem - from the alternator and batteries through the wiring harness to individual sensors and modules. Our OEM-level diagnostic tools find faults accurately and quickly."
      features={["Alternator Repair","Battery Service","Wiring Harness Repair","ECM/ECU Diagnostics","Fuse Panel","Voltage Regulator","Charging Circuit Test","Mobile Service"]}
      faqItems={[{"question":"How do I know if my alternator is failing?","answer":"Signs include dimming lights, battery not holding charge, electrical accessories malfunctioning, or a charging system warning light."},{"question":"Can a bad alternator damage my batteries?","answer":"Yes. An overcharging alternator can destroy batteries. An undercharging one leaves your batteries drained. We test both."},{"question":"Do you repair welding and data communication wiring?","answer":"Yes, we repair main harness wiring, sensor circuits, and communication bus wiring (J1939, J1708, CAN bus)."},{"question":"Is overnight battery testing available?","answer":"For intermittent charging issues, we can perform extended overnight battery and charging system monitoring."}]}
      relatedServices={[{"label":"Electrical Repair","href":"/electrical"},{"label":"Battery Service","href":"/battery"},{"label":"Engine Diagnostics","href":"/vehicle-engine-diagnostic"}]}
    />
  );
}
