import type { Metadata } from "next";
import CityPageTemplate from "../components/ui/CityPageTemplate";

export const metadata: Metadata = {
  title: "Truck & Trailer Repair in Irmo, SC | KM Truck & Trailer",
  description: "K&M Truck & Trailer provides 24/7 mobile truck and trailer repair throughout Irmo, SC. Our mobile units cover the I-26 corridor and surrounding areas with ",
};

export default function Page() {
  return (
    <CityPageTemplate
      city="Irmo"
      state="SC"
      description="K&M Truck & Trailer provides 24/7 mobile truck and trailer repair throughout Irmo, SC. Our mobile units cover the I-26 corridor and surrounding areas with fast response times."
      highways={["I-26","Lake Murray Blvd"]}
    />
  );
}
