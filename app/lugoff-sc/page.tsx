import type { Metadata } from "next";
import CityPageTemplate from "../components/ui/CityPageTemplate";

export const metadata: Metadata = {
  title: "Truck & Trailer Repair in Lugoff, SC | KM Truck & Trailer",
  description: "Covering Lugoff, SC and the Kershaw County area along US-1 and I-20. Emergency truck and trailer repair with fast response times around the clock.",
};

export default function Page() {
  return (
    <CityPageTemplate
      city="Lugoff"
      state="SC"
      description="Covering Lugoff, SC and the Kershaw County area along US-1 and I-20. Emergency truck and trailer repair with fast response times around the clock."
      highways={["US-1","I-20","SC-601"]}
    />
  );
}
