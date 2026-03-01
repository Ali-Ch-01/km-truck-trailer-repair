import type { Metadata } from "next";
import ServicePageTemplate from "../components/ui/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Semi Truck Battery Replacement & Service in SC | KM Truck & Trailer",
  description: "Battery testing, replacement, jump-start, and charging system inspection for all commercial trucks. Mobile service available 24/7.",
};

export default function Page() {
  return (
    <ServicePageTemplate
      title="Semi Truck Battery Replacement & Service in SC"
      heroSubtitle="Battery testing, replacement, jump-start, and charging system inspection for all commercial trucks. Mobile service available 24/7."
      bodyIntro="A dead or failing battery can leave you stranded. Our mobile battery service includes load testing to identify weak batteries before they fail, fast replacement with commercial-grade batteries, and full charging system diagnostics."
      bodyContent="We also inspect your alternator and voltage regulator to ensure your charging system is functioning properly. A well-maintained electrical system prevents unexpected breakdowns and extends the life of your batteries."
      features={["Battery Load Testing","Battery Replacement","Jump-Start Service","Alternator Inspection","Charging System Check","Voltage Testing","All Battery Brands","Mobile Service"]}
      faqItems={[{"question":"Can you jump-start my truck roadside?","answer":"Yes! We provide mobile jump-start service 24/7 across South Carolina for all commercial trucks and trailers."},{"question":"How do I know if my battery is failing?","answer":"Slow engine cranking, dim lights, warning lights, or a battery that needs frequent jump-starts are all signs of a failing battery."},{"question":"Do you test the alternator too?","answer":"Absolutely. We inspect the full charging system — battery, alternator, and voltage regulator — to find the root cause."},{"question":"What battery brands do you use?","answer":"We install premium commercial-grade batteries from top brands, sized for your specific truck application."}]}
      relatedServices={[{"label":"Electrical Repair","href":"/electrical"},{"label":"Emergency Roadside","href":"/emergency-roadside-repair"},{"label":"Engine Diagnostics","href":"/vehicle-engine-diagnostic"}]}
    />
  );
}
