import type { Metadata } from "next";
import CityPageTemplate from "../components/ui/CityPageTemplate";

export const metadata: Metadata = {
  title: "Truck & Trailer Repair in Rock Hill, SC | KM Truck & Trailer",
  description: "K&M Truck & Trailer serves the Rock Hill, SC area and York County drivers along I-77 and US-21. Fast 24/7 emergency roadside and comprehensive truck repair",
};

export default function Page() {
  return (
    <CityPageTemplate
      city="Rock Hill"
      state="SC"
      description="K&M Truck & Trailer serves the Rock Hill, SC area and York County drivers along I-77 and US-21. Fast 24/7 emergency roadside and comprehensive truck repair."
      highways={["I-77","US-21","SC-161"]}
    />
  );
}
