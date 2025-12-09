



import React from "react";
import Invisible from "./Invisible";

/* ✅ SEO Metadata */
export const metadata = {
  title:
    "Invisible Aligners in Marathahalli | Clear Aligners Treatment | MaxAlign Dental",
  description:
    "Straighten your teeth discreetly with invisible aligners in Marathahalli. MaxAlign Dental offers advanced clear aligner treatment for a confident smile.",

  keywords: [
    "Invisible Aligners Marathahalli",
    "Clear Aligners Bengaluru",
    "Teeth Straightening Without Braces",
    "Aligner Treatment Marathahalli",
    "MaxAlign Dental"
  ],

  openGraph: {
    title:
      "Invisible Aligners in Marathahalli | Clear Aligners Treatment | MaxAlign Dental",
    description:
      "Get comfortable, nearly invisible clear aligners at MaxAlign Dental in Marathahalli.",
    url: "https://maxaligndental.com/services/invisible-aligners",
    siteName: "MaxAlign Dental",
    images: [
      {
        url: "/assets/services/invisalign.jpg", // public/images/og-aligners.jpg
        width: 1200,
        height: 630,
        alt: "Invisible Aligners Treatment in Marathahalli",
      },
    ],
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Invisible Aligners in Marathahalli | Clear Aligners Treatment | MaxAlign Dental",
    description:
      "Advanced invisible aligner treatment for teeth straightening at MaxAlign Dental.",
    images: ["/assets/services/invisalign.jpg"],
  },
};

export default function Page() {
  return <Invisible />;
}
