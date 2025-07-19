import Image from "next/legacy/image"
import { useNextSanityImage } from 'next-sanity-image'
import sanityClient from "lib/sanityClient"
import classNames from "classnames"
import Link from "next/link"

const HeroComponent = ({ heroImage, eyebrow, heading, config, pos, link }) => {
  let imageProps = useNextSanityImage(
    sanityClient,
    heroImage
  )
  // Remove width and height if present, as they are not needed with layout="fill"
  if (imageProps && 'width' in imageProps) {
    delete imageProps.width
  }
  if (imageProps && 'height' in imageProps) {
    delete imageProps.height
  }

  const BannerWrapperClasses = classNames({
    'flex relative w-full items-center z-20': true,
    'h-[70vh] ': config !== "mini",
    'justify-end': pos !== "start",
    'h-auto': config === "mini",
    'justify-start': pos === "start"
  })


  return(
    <div className={BannerWrapperClasses}>
      <Image
        alt={''}
        {...imageProps}
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        priority
        blurDataURL={heroImage.asset.metadata.lqip}
      />
      <div className="relative bg-violet-800/70 text-slate-100 backdrop-blur-sm p-6 lg:p-8 xl:p-20 w-full lg:w-1/2 xl:w-5/12 flex justify-center flex-col items-start">
        <p className="text-lg lg:text-2xl border-b-4 pb-1 lg:pb-3 mb-3 lg:mb-6 uppercase tracking-wide">{eyebrow}</p>
        {config !== "mini" ? 
          <h1 className="text-h1-dynamic font-display leading-none tracking-wide capitalize">{heading}</h1> :
          <h2 className="text-h2-dynamic font-display leading-none tracking-wide capitalize">{heading}</h2>
        }
        {link && <Link href={link.href} className="ghost-link">{link.text}</Link>}
      </div>
    </div>
  ) }

export default HeroComponent
