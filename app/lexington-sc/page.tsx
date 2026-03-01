import type { Metadata } from "next";
import CityPageTemplate from "../components/ui/CityPageTemplate";

export const metadata: Metadata = {
  title: "Truck & Trailer Repair in Lexington, SC | KM Truck & Trailer",
  description: "Serving Lexington, SC drivers along US-1, I-20, and US-378. Our mobile repair units cover all of Lexington County with 24/7 emergency response.",
};

export default function Page() {
  return (
    <CityPageTemplate
      city="Lexington"
      state="SC"
      description="Serving Lexington, SC drivers along US-1, I-20, and US-378. Our mobile repair units cover all of Lexington County with 24/7 emergency response."
      highways={["US-1","I-20","US-378"]}
    />
  );
}
