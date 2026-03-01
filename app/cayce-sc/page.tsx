import type { Metadata } from "next";
import CityPageTemplate from "../components/ui/CityPageTemplate";

export const metadata: Metadata = {
  title: "Truck & Trailer Repair in Cayce, SC | KM Truck & Trailer",
  description: "Serving Cayce, SC truck drivers along I-26 and US-1. K&M provides 24/7 mobile truck and trailer repair with fast dispatch for all breakdowns.",
};

export default function Page() {
  return (
    <CityPageTemplate
      city="Cayce"
      state="SC"
      description="Serving Cayce, SC truck drivers along I-26 and US-1. K&M provides 24/7 mobile truck and trailer repair with fast dispatch for all breakdowns."
      highways={["I-26","US-1","Knox Abbott Dr"]}
    />
  );
}
