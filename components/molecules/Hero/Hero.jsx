import Image from "next/legacy/image"
import { useNextSanityImage } from 'next-sanity-image'
import sanityClient from "lib/sanityClient"
import classNames from "classnames"
import Link from "next/link"

const HeroComponent = ({ heroImage, eyebrow, heading, config, pos, link }) => {
  const imageProps = useNextSanityImage(
    sanityClient,
    heroImage
  )

  const BannerWrapperClasses = classNames({
    'flex relative w-full items-center h-[70vh] z-20': true,
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
        blurDataURL={heroImage.asset.metadata.lqip}
      />
      <div className="relative bg-violet-800/70 text-slate-100 backdrop-blur-sm p-6 lg:p-8 xl:p-20 w-full lg:w-1/2 xl:w-5/12 flex justify-center flex-col items-start">
        <p className="text-1xl lg:text-2xl font-bold border-b-4 pb-3 mb-6 uppercase tracking-wide">{eyebrow}</p>
        {config !== "mini" ? 
          <h1 className="text-h1-dynamic font-display leading-none tracking-wide capitalize">{heading}</h1> :
          <h2 className="text-h2-dynamic font-display leading-none tracking-wide capitalize">{heading}</h2>
        }
        {link && <Link href={link.href} className="ghost-link">{link.text}</Link>}
      </div>
    </div>
  ) }

export default HeroComponent
