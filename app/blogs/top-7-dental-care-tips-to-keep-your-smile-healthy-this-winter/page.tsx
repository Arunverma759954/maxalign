import { Metadata } from "next";
import BlogContent from "./BlogContent";

/* ✅ SEO Metadata */
export const metadata: Metadata = {
  title: "Best Dentist in Bangalore for Winter Oral Care | MaxAlign",
  description:
    "Looking for the best dentist in Bangalore? MaxAlign offers specialized winter dental treatments to prevent dry mouth and protect your gums. Book your visit now!",
  keywords: [
    "Best Dentist in Bangalore",
    "Winter Oral Care",
    "MaxAlign Dental Clinic",
    "Preventive Dental Care",
    "Sensitive Teeth Treatment Bangalore"
  ],
  openGraph: {
    title: "Best Dentist in Bangalore for Winter Oral Care | MaxAlign",
    description:
      "Looking for the best dentist in Bangalore? MaxAlign offers specialized winter dental treatments to prevent dry mouth and protect your gums.",
    url: "https://maxaligndental.com/blogs/top-7-dental-care-tips-to-keep-your-smile-healthy-this-winter",
    siteName: "MaxAlign Dental Clinic",
    images: [
      {
        url: "/assets/4.webp",
        width: 1200,
        height: 630,
        alt: "Top 7 Dental Care Tips For Healthy Winter Smile",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Dentist in Bangalore for Winter Oral Care | MaxAlign",
    description:
      "Looking for the best dentist in Bangalore? MaxAlign offers specialized winter dental treatments to prevent dry mouth and protect your gums.",
    images: ["/assets/4.webp"],
  },
};

export default function Page() {
  return <BlogContent />;
}
