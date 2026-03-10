import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://hireme.in"; // Replace with actual production URL if known

  const routes = [
    "",
    "/aboutus",
    "/recruiter",
    "/job-seeker",
    "/enterprise-hiring",
    "/media-coverage",
    "/influencers",
    "/blog",
    "/startup-hiring",
    "/contact-us",
    "/privacypolicy",
    "/termsconditions",
    "/refund-cancellation-policy",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: route === "" ? 1 : 0.8,
  }));
}
