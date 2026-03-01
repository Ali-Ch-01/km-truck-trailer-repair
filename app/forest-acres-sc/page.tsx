import type { Metadata } from "next";
import CityPageTemplate from "../components/ui/CityPageTemplate";

export const metadata: Metadata = {
  title: "Truck & Trailer Repair in Forest Acres, SC | KM Truck & Trailer",
  description: "Providing reliable 24/7 truck and trailer repair service throughout Forest Acres, SC. Our mobile technicians serve drivers along Forest Drive and the I-77 ",
};

export default function Page() {
  return (
    <CityPageTemplate
      city="Forest Acres"
      state="SC"
      description="Providing reliable 24/7 truck and trailer repair service throughout Forest Acres, SC. Our mobile technicians serve drivers along Forest Drive and the I-77 corridor."
      highways={["Forest Dr","I-77"]}
    />
  );
}
