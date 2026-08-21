import type { MetadataRoute } from "next";
import { absoluteUrl, siteConfig } from "@/lib/config/site";

const robots = (): MetadataRoute.Robots => ({
  rules: [
    {
      userAgent: "*",
      allow: "/"
    }
  ],
  sitemap: absoluteUrl("/sitemap.xml"),
  host: siteConfig.url
});
export default robots;