import Image from "next/legacy/image"
import { useNextSanityImage } from 'next-sanity-image'
import sanityClient from 'lib/sanityClient'
import Link from "next/link"
import { slugify } from "utils/utils"

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
      width={400}
      height={400}
    />
    <div className="border-2 p-6 rounded">
      <p className="text-2xl border-b-2 border-blue-200 mb-2">Happy Cat colors used:</p>
      {item.colors.length && <ul className="flex gap-3 py-2">
        {item?.colors?.map(color => <li key={color}>
          <Link href={`shop/${slugify(color)}`} className="tag-link">{color}</Link>
        </li>)}
      </ul>}
      {item.otherColors && <>
        <p className="text-xl font-medium mb-2">Other colors used:</p><ul className="list-disc list-inside">
          {item.otherColors.map(color => <li key={color}>
            {color}
          </li>)}
        </ul>
      </>
      }
    </div>
  </li>
}


export default FeaturedSubmission
