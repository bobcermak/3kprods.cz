import type { MetadataRoute } from "next";
import { absoluteUrl, siteConfig } from "@/lib/config/site";
import { routeList } from "@/lib/config/routes";

const sitemap = (): MetadataRoute.Sitemap => {
  const lastModified: Date = new Date(siteConfig.legal.updatedAt);
  return routeList.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority
  }));
}
export default sitemap;