import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://flags.griffen.codes'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/docs`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Add more pages as they're created
    // {
    //   url: `${baseUrl}/examples`,
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.6,
    // },
    // {
    //   url: `${baseUrl}/blog`,
    //   lastModified: new Date(),
    //   changeFrequency: 'weekly',
    //   priority: 0.7,
    // },
  ]
}