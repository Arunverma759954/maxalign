import React from "react";
import GumDiseaseTreatment from "./GumDiseaseTreatment";

/* ✅ SEO Metadata */
export const metadata = {
  title:
    "Gum Disease Treatment in Marathahalli | Advanced Periodontal Care | MaxAlign Dental",
  description:
    "Get expert gum disease treatment in Marathahalli at MaxAlign Dental. We offer advanced periodontal care to treat bleeding gums, infections, and gum recession.",

  keywords: [
    "Gum Disease Treatment Marathahalli",
    "Periodontal Treatment Bengaluru",
    "Bleeding Gums Treatment",
    "Gum Infection Treatment",
    "MaxAlign Dental Clinic"
  ],

  openGraph: {
    title:
      "Gum Disease Treatment in Marathahalli | Advanced Periodontal Care | MaxAlign Dental",
    description:
      "Advanced periodontal and gum disease treatment by expert dentists at MaxAlign Dental, Marathahalli.",
    url: "https://maxaligndental.com/services/gum-disease-treatment",
    siteName: "MaxAlign Dental",
    images: [
      {
        url: "/assets/services/gum.jpg", // public/images/og-gum-disease.jpg
        width: 1200,
        height: 630,
        alt: "Gum Disease Treatment in Marathahalli",
      },
    ],
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Gum Disease Treatment in Marathahalli | Advanced Periodontal Care | MaxAlign Dental",
    description:
      "Expert treatment for gum disease, bleeding gums, and periodontal issues at MaxAlign Dental.",
    images: ["/assets/services/gum.jpg"],
  },
};

export default function Page() {
  return <GumDiseaseTreatment />;
}
