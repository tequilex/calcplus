import type { MetadataRoute } from 'next'
import { calculators } from '@/lib/calculators'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pluscalc.ru'

  const calculatorUrls: MetadataRoute.Sitemap = calculators
    .filter((c) => c.status === 'active')
    .map((c) => ({
      url: `${baseUrl}/${c.slug}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    }))

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/kalkulyatory/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/o-saite/`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/kontakty/`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    ...calculatorUrls,
  ]
}
