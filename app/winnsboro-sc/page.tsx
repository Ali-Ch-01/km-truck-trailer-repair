import type { Metadata } from "next";
import CityPageTemplate from "../components/ui/CityPageTemplate";

export const metadata: Metadata = {
  title: "Truck & Trailer Repair in Winnsboro, SC | KM Truck & Trailer",
  description: "K&M Truck & Trailer serves Winnsboro, SC and Fairfield County drivers along US-321 and SC-34. Emergency and scheduled truck repair available 24/7.",
};

export default function Page() {
  return (
    <CityPageTemplate
      city="Winnsboro"
      state="SC"
      description="K&M Truck & Trailer serves Winnsboro, SC and Fairfield County drivers along US-321 and SC-34. Emergency and scheduled truck repair available 24/7."
      highways={["US-321","SC-34","I-77"]}
    />
  );
}
