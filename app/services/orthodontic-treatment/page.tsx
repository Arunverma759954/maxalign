import React from "react";
import OrthodonticTreatment from "./OrthodonticTreatment";

/* ✅ SEO Metadata */
export const metadata = {
  title:
    "Orthodontic Treatment in Marathahalli | Braces & Aligners | MaxAlign Dental",
  description:
    "Achieve a perfectly aligned smile with expert orthodontic treatment in Marathahalli. MaxAlign Dental offers braces and advanced orthodontic solutions.",

  keywords: [
    "Orthodontic Treatment Marathahalli",
    "Braces Treatment Bengaluru",
    "Teeth Alignment Treatment",
    "Orthodontist in Marathahalli",
    "MaxAlign Dental"
  ],

  openGraph: {
    title:
      "Orthodontic Treatment in Marathahalli | Braces & Aligners | MaxAlign Dental",
    description:
      "Professional orthodontic treatment including braces and aligners at MaxAlign Dental, Marathahalli.",
    url: "https://maxaligndental.com/services/orthodontic-treatment",
    siteName: "MaxAlign Dental",
    images: [
      {
        url: "/assrts/services/s5.jpg", // public/images/og-orthodontic.jpg
        width: 1200,
        height: 630,
        alt: "Orthodontic Treatment in Marathahalli",
      },
    ],
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Orthodontic Treatment in Marathahalli | Braces & Aligners | MaxAlign Dental",
    description:
      "Braces and orthodontic treatment by experienced orthodontists at MaxAlign Dental.",
    images: ["/assrts/services/s5.jpg"],
  },
};

export default function Page() {
  return <OrthodonticTreatment />;
}
