import Link from "next/link"
import Image from "next/legacy/image"
import { useNextSanityImage } from 'next-sanity-image'
import sanityClient from 'lib/sanityClient'

const ImageButton = ({ linkData }) => {
  const { heroImage }  = linkData.pageHero
  const imageProps = useNextSanityImage(
    sanityClient,
    heroImage
  )

  return (
    <Link href={`featured-artist/${linkData.slug.current}`} className="h-full relative items-center justify-center flex flex-col group p-10">
      <div className="absolute w-full bg-black h-full"/>
      <Image
        alt={''}
        {...imageProps}
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        blurDataURL={heroImage.asset.metadata.lqip}
        className="opacity-60 group-hover:opacity-100 transition"
      />
      <span className="relative z-20 text-white p-2 font-display text-5xl opacity-100 tracking-wide w-full group-hover:bg-black/40 transition group-hover:backdrop-blur-sm">{linkData.pageTitle}</span>
    </Link>
  )
}

export default ImageButton
