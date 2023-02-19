import HeroComponent from 'components/molecules/Hero/Hero'
import sanityClient from 'lib/sanityClient'
import { NextSeo } from 'next-seo'
import BlockContent from "@sanity/block-content-to-react"

import FeaturedSubmission from 'components/molecules/FeaturedSubmissions/FeaturedSubmissions'
import SocialMediaBlock from 'components/container/SocialMediaBlock/SocialMediaBlock'
import ArtistDisclaimerContent from 'components/container/ArtistDisclaimerContent/ArtistDisclaimerContent'

const FeaturedArtistPage = ({ featuredArtist, previousFeatured }) => (
  <>
    <NextSeo
      title={featuredArtist.pageTitle}
      description="Tye die clothing and dye questions answered."
    />
    <HeroComponent {...featuredArtist.pageHero} />
    <div className="flex py-dynamic-container-y content-container gap-8 flex-col lg:flex-row">
      <ArtistDisclaimerContent />
      {/* <section className="w-full lg:w-1/2 xl:w-3/5 lg:border-r-2 lg:pr-6 lg:mr-6">
        <h2 className="font-display text-h2-dynamic mb-10">{featuredArtist.pageTitle} Bio</h2>
        <div className="content lg:pr-6 mb-8">
          <BlockContent blocks={featuredArtist.bio}/>
        </div>
        {
          featuredArtist.socialMedia.length &&
            <>
              <h3 className="font-display text-h4-dynamic">{`${featuredArtist.firstName}'s Social Media`}</h3>
              <SocialMediaBlock socialMedia={featuredArtist.socialMedia}/>
            </>
        }
      
      </section>
      <section className=" lg:w-1/2 xl:w-2/5 self-start">
        <ul>
          {featuredArtist.artistEntry.map(item => (
            <FeaturedSubmission item={item} key={item._id}/>
          ))}
        </ul>
      </section> */}
    </div>
      
  </>
)

export async function getStaticProps() {
  const contentProps = await sanityClient.fetch(`{
    "featuredArtist": *[_type == "featuredArtist" && isFeatured == true] {
      pageTitle,
      isFeatured,
      bio,
      artistEntry,
      socialMedia,
      firstName,
      lastName,
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
    "previousFeatured": *[_type == "featuredArtist" && isFeatured != true] {
      pageTitle,
    }
  }`)
  return {
    props: {
      featuredArtist: contentProps.featuredArtist[0],
      previousFeatured: contentProps.previousFeatured
    },
    revalidate: 120,
  }
}

export default FeaturedArtistPage
