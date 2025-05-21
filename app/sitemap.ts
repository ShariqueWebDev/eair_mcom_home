import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = ["about", "solution", "services", "contact"];

  const pagesEntries = pages.map((item) => {
    return {
      url: `${process.env.FRONTEND_URL}/${item}`,
      priority: 0.5,
    };
  });

  return [
    {
      url: `${process.env.FRONTEND_URL}`,
      priority: 1,
    },
    ...pagesEntries,
  ];
}
