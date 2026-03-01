import type { Metadata } from "next";
import CityPageTemplate from "../components/ui/CityPageTemplate";

export const metadata: Metadata = {
  title: "Truck & Trailer Repair in Northeast Columbia, SC | KM Truck & Trailer",
  description: "Serving Northeast Columbia, SC truck drivers along I-20 and Two Notch Road. Fast mobile repair dispatch for emergency breakdowns and scheduled maintenance.",
};

export default function Page() {
  return (
    <CityPageTemplate
      city="Northeast Columbia"
      state="SC"
      description="Serving Northeast Columbia, SC truck drivers along I-20 and Two Notch Road. Fast mobile repair dispatch for emergency breakdowns and scheduled maintenance."
      highways={["I-20","Two Notch Rd","Hard Scrabble Rd"]}
    />
  );
}
