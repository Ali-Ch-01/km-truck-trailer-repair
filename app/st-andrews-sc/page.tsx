import type { Metadata } from "next";
import CityPageTemplate from "../components/ui/CityPageTemplate";

export const metadata: Metadata = {
  title: "Truck & Trailer Repair in St. Andrews, SC | KM Truck & Trailer",
  description: "Serving St. Andrews, SC drivers with fast mobile truck repair along I-26 and Bush River Road. Call us for 24/7 emergency roadside assistance and full truck",
};

export default function Page() {
  return (
    <CityPageTemplate
      city="St. Andrews"
      state="SC"
      description="Serving St. Andrews, SC drivers with fast mobile truck repair along I-26 and Bush River Road. Call us for 24/7 emergency roadside assistance and full truck repair services."
      highways={["I-26","Bush River Rd"]}
    />
  );
}
