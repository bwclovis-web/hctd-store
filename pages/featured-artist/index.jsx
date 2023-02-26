import sanityClient from 'lib/sanityClient'
import { useContext } from 'react'
import { NextSeo } from 'next-seo'

import ArtistDisclaimerContent from 'components/container/ArtistDisclaimerContent/ArtistDisclaimerContent'
import Button from 'components/atoms/Button/Button'
import Modal from 'components/container/Modal/Modal'
import AppContext from 'provider/AppProvider'
import FeaturedArtistContainer from 'components/container/FeaturedArtistContainer/FeaturedArtistContainer'
import ImageButton from 'components/atoms/ImageButton/ImageButton'

import { featuredArtistPageQuery } from 'queries/SanityQueries'

const FeaturedArtistPage = ({ featuredArtist, previousFeatured }) => {
  const { toggleModal, modalId, modalOpen } = useContext(AppContext)
  return(
    <>
      <NextSeo
        title={ `Featured artist | ${featuredArtist.pageTitle}`}
        description={`Happy Cat Tie Dye's featured artist ${featuredArtist.pageTitle}`}
      />
      <FeaturedArtistContainer content={featuredArtist} />
      <section className="text-center mb-6 bg-emerald-200 border-t-4 border-b-4 border-emerald-500">
        <div className="content-container py-6">
          <h2 className="font-display text-h3-dynamic mb-10 text-emerald-900">Interested in being a featured artist?</h2>
          <Button config="default" size="large" onClick={() => toggleModal("aotm")}>Sign up details</Button>
        </div >
      </section>
      {modalOpen && modalId === "aotm" && <Modal>
        <ArtistDisclaimerContent />
      </Modal>}
      {
        previousFeatured.length ? 
          <section className="content-container py-6 text-center">
            <h2 className="font-display text-h3-dynamic mb-10 text-slate-900 capitalize">view previous featured artists</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:grid-cols-4">
              {previousFeatured.map(item => (
                <li key={item.slug.current}>
                  <ImageButton linkData={item}/>
                </li>
              ))}
            </ul>
          </section> : null
      }
    </>
  )
}

export async function getStaticProps() {
  const contentProps = await sanityClient.fetch(featuredArtistPageQuery)
  return {
    props: {
      featuredArtist: contentProps.featuredArtist[0],
      previousFeatured: contentProps.previousFeatured
    },
    revalidate: 120,
  }
}

export default FeaturedArtistPage
