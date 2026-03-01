import type { Metadata } from "next";
import CityPageTemplate from "../components/ui/CityPageTemplate";

export const metadata: Metadata = {
  title: "Truck & Trailer Repair in Downtown Columbia, SC | KM Truck & Trailer",
  description: "Downtown Columbia truck drivers rely on K&M for fast emergency repair along I-126 and I-77. We dispatch mobile units immediately to keep your fleet moving.",
};

export default function Page() {
  return (
    <CityPageTemplate
      city="Downtown Columbia"
      state="SC"
      description="Downtown Columbia truck drivers rely on K&M for fast emergency repair along I-126 and I-77. We dispatch mobile units immediately to keep your fleet moving."
      highways={["I-126","I-77","US-1"]}
    />
  );
}
