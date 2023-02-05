import HeroComponent from 'components/molecules/Hero/Hero'
import sanityClient from 'lib/sanityClient'
import { NextSeo } from 'next-seo'
import BlockContent from "@sanity/block-content-to-react"

import FeaturedSubmission from 'components/molecules/FeaturedSubmissions/FeaturedSubmissions'

const FeaturedArtistPage = ({ featuredArtist, previousFeatured }) => {
  console.log(`%c previousFeatured`, 'background: #0047ab; color: #fff; padding: 2px:', featuredArtist)
  return(
    <>
      <NextSeo
        title={featuredArtist.pageTitle}
        description="Tye die clothing and dye questions answered."
      />
      <HeroComponent {...featuredArtist.pageHero} />
      <div className="flex py-dynamic-container-y content-container gap-8 flex-col lg:flex-row">
        <section className="lg:w-1/2 xl:w-3/5 lg:border-r-2 pr-6 mr-6">
          <h2 className="font-display text-h2-dynamic mb-10">{featuredArtist.pageTitle} Bio</h2>
          <div className="content pr-6">
            <BlockContent blocks={featuredArtist.bio}/>
          </div>
        </section>
        <section className=" lg:w-1/2 xl:w-2/5 self-start">
          <ul>
            {featuredArtist.artistEntry.map(item => (
              <FeaturedSubmission item={item} key={item._id}/>
            ))}
          </ul>
        </section>
      </div>
      
    </>
  ) }

export async function getStaticProps() {
  const contentProps = await sanityClient.fetch(`{
    "featuredArtist": *[_type == "featuredArtist" && isFeatured == true] {
      pageTitle,
      isFeatured,
      bio,
      artistEntry,
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
    "previousFeatured": *[_type == "featuredArtist" && isFeatured == true] {
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
