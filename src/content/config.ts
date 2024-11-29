import { defineCollection, z } from 'astro:content';

const home = defineCollection({
  type: 'content',
  schema: z.object({
    heroTitle: z.string(),
    heroSubtitle: z.string(),
    heroDescription: z.string(),
    heroPrimaryCTA: z.string(),
    heroSecondaryCTA: z.string(),
    heroBackgroundImage: z.string(),
    featuresTitle: z.string(),
    features: z.array(z.object({
      title: z.string(),
      description: z.string(),
      icon: z.string()
    })),
    galleryTitle: z.string(),
    galleryImages: z.array(z.object({
      image: z.string(),
      alt: z.string()
    })),
    benefitsTitle: z.string(),
    benefits: z.array(z.object({
      title: z.string(),
      description: z.string()
    })),
    testimonialsTitle: z.string(),
    testimonials: z.array(z.object({
      name: z.string(),
      role: z.string(),
      content: z.string(),
      image: z.string()
    })),
    ctaTitle: z.string(),
    ctaDescription: z.string(),
    ctaPrimaryButton: z.string(),
    ctaSecondaryButton: z.string(),
    newsletterTitle: z.string(),
    newsletterDescription: z.string(),
    newsletterButtonText: z.string(),
    newsletterPrivacyText: z.string(),
    contactTitle: z.string(),
    contact: z.object({
      email: z.string(),
      phone: z.string(),
      address: z.string(),
      submitButtonText: z.string()
    }),
    footer: z.object({
      companyDescription: z.string(),
      footerLinks: z.object({
        company: z.array(z.object({
          label: z.string(),
          url: z.string()
        })),
        resources: z.array(z.object({
          label: z.string(),
          url: z.string()
        })),
        legal: z.array(z.object({
          label: z.string(),
          url: z.string()
        }))
      })
    })
  })
});

const navigation = defineCollection({
  type: 'content',
  schema: z.object({
    logoText: z.string(),
    items: z.array(z.object({
      label: z.string(),
      url: z.string(),
      isButton: z.boolean()
    }))
  })
});

export const collections = {
  'pages': home,
  'navigation': navigation
};