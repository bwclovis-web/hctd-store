import Image from "next/legacy/image"
import { useNextSanityImage } from 'next-sanity-image'
import sanityClient from "lib/sanityClient"

const HeroComponent = ({ heroImage, eyebrow, heading }) => {
  const imageProps = useNextSanityImage(
    sanityClient,
    heroImage
  )

  return(
    <div className="flex relative w-full justify-end items-center h-[70vh] z-20">
      <Image
        alt={''}
        {...imageProps}
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        blurDataURL={heroImage.asset.metadata.lqip}
      />
      <div className="relative bg-violet-800/70 text-slate-100 backdrop-blur-sm p-6 lg:p-8 xl:p-20 w-full lg:w-1/2 xl:w-5/12 flex justify-center flex-col items-start">
        <p className="text-1xl lg:text-2xl font-bold border-b-4 pb-3 mb-6 uppercase tracking-wide">{eyebrow}</p>
        <h1 className="text-h1-dynamic font-display leading-none tracking-wide capitalize">{heading}</h1>
      </div>
    </div>
  ) }

export default HeroComponent
