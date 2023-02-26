import FeaturedArtistContainer from 'components/container/FeaturedArtistContainer/FeaturedArtistContainer'
import SiteSeo from 'components/molecules/SiteSeo/SiteSeo'
import sanityClient from 'lib/sanityClient'
import { previousArtistSlugQuery, previousFeaturedArtistQuery } from 'queries/SanityQueries'

const PreviousFeaturedArtistsPage = ({ content }) => (
  <>
    <SiteSeo data={{ pageTitle: `Featured Artist | ${content.pageTitle}` }}/>
    <FeaturedArtistContainer content={content}/>
  </>
)

export const getStaticPaths = async () => {
  const artistPageSlugs = await sanityClient.fetch(previousArtistSlugQuery)
  const paths = artistPageSlugs.map(slug => ({
    params: { slug },
  }))
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const contentProps = await sanityClient.fetch(previousFeaturedArtistQuery, { slug: params.slug })
  return {
    props: {
      content: contentProps
    },
    revalidate: 120,
  }
}
  

export default PreviousFeaturedArtistsPage
