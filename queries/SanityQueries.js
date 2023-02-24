export const previousArtistSlugQuery = `
*[_type == "featuredArtist" && defined(slug.current)][].slug.current
`

export const previousFeaturedArtistQuery = `
*[_type == "featuredArtist" && slug.current == $slug][0] {
    pageTitle,
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
