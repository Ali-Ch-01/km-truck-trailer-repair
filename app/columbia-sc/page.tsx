import type { Metadata } from "next";
import CityPageTemplate from "../components/ui/CityPageTemplate";

export const metadata: Metadata = {
  title: "Truck & Trailer Repair in Columbia, SC | KM Truck & Trailer",
  description: "If you're stranded in Columbia, SC, K&M Truck & Trailer is your fastest call. We dispatch fully-equipped mobile units to your location along I-77, I-26, an",
};

export default function Page() {
  return (
    <CityPageTemplate
      city="Columbia"
      state="SC"
      description="If you're stranded in Columbia, SC, K&M Truck & Trailer is your fastest call. We dispatch fully-equipped mobile units to your location along I-77, I-26, and I-20 - day or night, rain or shine."
      highways={["I-77","I-26","I-20"]}
    />
  );
}
