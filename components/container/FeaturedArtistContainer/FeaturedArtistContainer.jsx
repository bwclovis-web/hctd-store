import BlockContent from "@sanity/block-content-to-react"
import FeaturedSubmission from 'components/molecules/FeaturedSubmissions/FeaturedSubmissions'
import SocialMediaBlock from 'components/container/SocialMediaBlock/SocialMediaBlock'
import HeroComponent from 'components/molecules/Hero/Hero'

const FeaturedArtistContainer = ({ content }) => (
  <>
    <HeroComponent {...content.pageHero} />
    <div className="flex py-dynamic-container-y content-container gap-8 flex-col lg:flex-row">
      <section className="w-full lg:w-1/2 xl:w-3/5 lg:border-r-2 lg:pr-6 lg:mr-6 border-b-4 lg:border-b-0 pb-6">
        <h2 className="font-display text-h2-dynamic mb-10">{content.pageTitle} Bio</h2>
        <div className="content lg:pr-6 mb-8">
          <BlockContent blocks={content.bio}/>
        </div>
        {
          content?.websiteLink?.title && content?.websiteLink?.url &&
            <div className="mb-6 text-xl">
              <h3 >View more of {content.firstName}`s work:</h3>
              <a href={content.websiteLink.url} className="capitalize text-violet-600 hover:text-blue-800 underline font-bold tracking-wide">{content.websiteLink.title}</a>
            </div>
        }
        {
          content?.socialMedia?.length &&
              <>
                <h3 className="font-display text-h4-dynamic">{`${content.firstName}'s Social Media`}</h3>
                <SocialMediaBlock socialMedia={content.socialMedia}/>
              </>
        }
      </section>
      <section className=" lg:w-1/2 xl:w-2/5 self-start">
        <ul>
          {content?.artistEntry?.map(item => (
            <FeaturedSubmission item={item} key={item._id}/>
          ))}
        </ul>
      </section>
    </div>
  </>
)
export default FeaturedArtistContainer
