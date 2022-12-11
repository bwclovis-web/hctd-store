import Image from "next/legacy/image";

const HeroComponent = ({ src, title, heading }) => (
  <div className="flex relative w-full justify-end items-center h-[70vh]">
    <Image
      alt={''}
      src={src}
      layout="fill"
      objectFit="cover"
      placeholder="blur"
      blurDataURL={`/_next/image?url=${src}&w=16&q=1`}
    />
    <div className="relative bg-violet-800/70 text-slate-100 backdrop-blur-sm p-6 lg:p-8 xl:p-20 w-full lg:w-1/2 xl:w-5/12 flex justify-center flex-col items-start">
      <p className="text-2xl lg:text-3xl font-black border-b-4 pb-3 mb-6">{heading}</p>
      <h1 className="text-h1-dynamic font-display leading-none tracking-wide capitalize">{title}</h1>
    </div>
  </div>
)

export default HeroComponent
