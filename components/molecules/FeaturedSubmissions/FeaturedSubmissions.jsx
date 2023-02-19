import Image from "next/legacy/image"
import { useNextSanityImage } from 'next-sanity-image'
import sanityClient from 'lib/sanityClient'

const FeaturedSubmission = ({ item }) => {
  const imageProps = useNextSanityImage(
    sanityClient,
    item.submissionImage
  )

  return <li>
    <h3 className="font-display text-h3-dynamic mb-10">{item.title}</h3>
    <Image
      alt={''}
      {...imageProps}
      width={1200}
      height={1200}
    />
  </li>
}


export default FeaturedSubmission
