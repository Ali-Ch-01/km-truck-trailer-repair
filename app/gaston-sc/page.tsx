import type { Metadata } from "next";
import CityPageTemplate from "../components/ui/CityPageTemplate";

export const metadata: Metadata = {
  title: "Truck & Trailer Repair in Gaston, SC | KM Truck & Trailer",
  description: "K&M Truck & Trailer covers the Gaston, SC area along I-26 and SC-302 with fully mobile repair units. Available 24/7 for emergency roadside service.",
};

export default function Page() {
  return (
    <CityPageTemplate
      city="Gaston"
      state="SC"
      description="K&M Truck & Trailer covers the Gaston, SC area along I-26 and SC-302 with fully mobile repair units. Available 24/7 for emergency roadside service."
      highways={["I-26","SC-302"]}
    />
  );
}
