import FeaturedArtistContainer from 'components/container/FeaturedArtistContainer/FeaturedArtistContainer'
import sanityClient from 'lib/sanityClient'
import { previousArtistSlugQuery, previousFeaturedArtistQuery } from 'queries/SanityQueries'

const PreviousFeaturedArtistsPage = ({ content }) => (
  <FeaturedArtistContainer content={content}/>
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
