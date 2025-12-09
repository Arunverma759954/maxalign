import React from "react";
import TeethWhitening from "./TeethWhitening";

/* ✅ SEO Metadata */
export const metadata = {
  title:
    "Teeth Whitening in Marathahalli | Brighten Your Smile | MaxAlign Dental",
  description:
    "Get professional teeth whitening treatment in Marathahalli at MaxAlign Dental. Safe and effective solutions for a brighter, confident smile.",

  keywords: [
    "Teeth Whitening Marathahalli",
    "Professional Teeth Whitening",
    "Smile Brightening Treatment",
    "MaxAlign Dental Clinic",
    "Bengaluru Dental Whitening"
  ],

  openGraph: {
    title:
      "Teeth Whitening in Marathahalli | Brighten Your Smile | MaxAlign Dental",
    description:
      "Professional teeth whitening solutions to enhance your smile at MaxAlign Dental, Marathahalli.",
    url: "https://maxaligndental.com/services/teeth-whitening",
    siteName: "MaxAlign Dental",
    images: [
      {
        url: "/assets/services/s6.jpg", // public/images/og-teeth-whitening.jpg
        width: 1200,
        height: 630,
        alt: "Teeth Whitening Treatment in Marathahalli",
      },
    ],
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Teeth Whitening in Marathahalli | Brighten Your Smile | MaxAlign Dental",
    description:
      "Professional teeth whitening for a brighter, confident smile at MaxAlign Dental.",
    images: ["/assets/services/s6.jpg"],
  },
};

export default function Page() {
  return <TeethWhitening />;
}
