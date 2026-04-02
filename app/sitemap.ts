import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://earthangelwellness.com";
  const lastModified = new Date("2026-04-02");

  const routes = [
    { path: "/", priority: 1.0 },
    { path: "/about", priority: 0.9 },
    { path: "/services", priority: 0.9 },
    { path: "/services/weight-loss-injections", priority: 0.8 },
    { path: "/services/neurofeedback", priority: 0.8 },
    { path: "/services/3d-body-scans", priority: 0.7 },
    { path: "/services/nutrition-coaching", priority: 0.8 },
    { path: "/services/anti-aging", priority: 0.8 },
    { path: "/services/muscle-recovery", priority: 0.7 },
    { path: "/services/hrt-women", priority: 0.8 },
    { path: "/services/hrt-men", priority: 0.8 },
    { path: "/services/body-sculpting", priority: 0.8 },
    { path: "/services/green-laser", priority: 0.7 },
    { path: "/telehealth", priority: 0.8 },
    { path: "/financing", priority: 0.7 },
    { path: "/products", priority: 0.7 },
    { path: "/blog", priority: 0.7 },
    { path: "/blog/medical-weight-loss-salem-or", priority: 0.6 },
    { path: "/blog/semaglutide-vs-tirzepatide", priority: 0.6 },
    { path: "/blog/telehealth-weight-loss-oregon", priority: 0.6 },
    { path: "/book", priority: 0.8 },
    { path: "/contact", priority: 0.7 },
    { path: "/privacy", priority: 0.3 },
    { path: "/hipaa", priority: 0.3 },
    { path: "/refund", priority: 0.3 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified,
    priority: route.priority,
    changeFrequency: route.priority >= 0.8 ? "weekly" : "monthly",
  }));
}
