import type { Metadata } from "next";
import CityPageTemplate from "../components/ui/CityPageTemplate";

export const metadata: Metadata = {
  title: "Truck & Trailer Repair in The Summit, SC | KM Truck & Trailer",
  description: "K&M Truck & Trailer serves The Summit area of Columbia, SC along the I-77 and Two Notch Road corridors. 24/7 emergency mobile repair for all truck and trai",
};

export default function Page() {
  return (
    <CityPageTemplate
      city="The Summit"
      state="SC"
      description="K&M Truck & Trailer serves The Summit area of Columbia, SC along the I-77 and Two Notch Road corridors. 24/7 emergency mobile repair for all truck and trailer types."
      highways={["I-77","Two Notch Rd"]}
    />
  );
}
