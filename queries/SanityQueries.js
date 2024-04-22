export const previousArtistSlugQuery = `
*[_type == "featuredArtist" && defined(slug.current)][].slug.current
`

export const previousFeaturedArtistQuery = `
*[_type == "featuredArtist" && slug.current == $slug][0] {
  pageTitle,
  isFeatured,
  bio,
  artistEntry | order(_createdAt desc),
  socialMedia,
  firstName,
  lastName,
  websiteLink,
  pageHero {
    heading,
    eyebrow,
    heroImage {
      asset -> {
        ...,
        metadata
      }
    }
  }
  }
`

export const featuredArtistPageQuery = `
{
  "featuredArtist": *[_type == "featuredArtist" && isFeatured == true] {
    pageTitle,
    isFeatured,
    bio,
    artistEntry | order(_createdAt desc),
    socialMedia,
    firstName,
    lastName,
    websiteLink,
    pageHero {
      heading,
      eyebrow,
      heroImage {
        asset -> {
          ...,
          metadata
        }
      }
    }
  },
  "previousFeatured": *[_type == "featuredArtist" && isFeatured != true] | order(_createdAt desc) {
    slug,
    pageTitle,
    pageHero {
      heroImage {
        asset -> {
          ...,
          metadata
        }
      }
    }
  }
}
`

export const sanityHomepageQuery = `{
  "pageContent": *[_type == "page" && pageTitle == "home"] {
    pageSeo,
    pageHero {
      heading,
      eyebrow,
      heroImage {
        asset -> {
          ...,
          metadata
        }
      }
    }
  },
  "featuredArtist": *[_type == "featuredArtist" && isFeatured == true]  {
    pageHero {
      heading,
      eyebrow,
      heroImage {
        asset -> {
          ...,
          metadata
        }
      }
    }
  }
}
`

export const sanityContactPageQuery = `
{
  "mySanityData": *[_type == "page" && pageTitle == "Contact"] {
    faqs,
    pageSeo,
    pageHero {
      heading,
      eyebrow,
      heroImage {
        asset -> {
          ...,
          metadata
        }
      }
    }
  }
}
`

export const sanityAboutPageQuery = `
{
  "mySanityData": *[_type == "page" && pageTitle == "about"] {
    pageSeo,
    pageHero {
      heading,
      eyebrow,
      heroImage {
        asset -> {
          ...,
          metadata
        }
      }
    }
  }
}
`

export const sanityInstructionPageQuery = `
{
  "mySanityData": *[_type == "page" && pageTitle == "Instructions"] {
    faqs,
    pageSeo,
    pageHero {
      heading,
      eyebrow,
      heroImage {
        asset -> {
          ...,
          metadata
        }
      }
    }
  }
}
`

export const sanityShopPageQuery = `
{
  "mySanityData": *[_type == "page" && pageTitle == "shop"] {
    pageSeo,
    pageHero {
      heading,
      eyebrow,
      heroImage {
        asset -> {
          ...,
          metadata
        }
      }
    }
  }
}
`
