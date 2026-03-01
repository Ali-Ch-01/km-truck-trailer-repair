import type { Metadata } from "next";
import CityPageTemplate from "../components/ui/CityPageTemplate";

export const metadata: Metadata = {
  title: "Truck & Trailer Repair in Newberry, SC | KM Truck & Trailer",
  description: "Covering Newberry, SC and surrounding Newberry County along I-26 and SC-34. K&M dispatches mobile truck repair technicians 24/7 for emergency and scheduled",
};

export default function Page() {
  return (
    <CityPageTemplate
      city="Newberry"
      state="SC"
      description="Covering Newberry, SC and surrounding Newberry County along I-26 and SC-34. K&M dispatches mobile truck repair technicians 24/7 for emergency and scheduled service."
      highways={["I-26","SC-34","US-76"]}
    />
  );
}
