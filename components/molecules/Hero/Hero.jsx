import { FC } from "react"
import Image from "next/image"
import { HeroTypes } from "./Types"

const HeroComponent: FC<HeroTypes> = ({ src, title, heading }) => (
  <div className="flex relative w-full justify-center items-center h-[70vh]">
    <Image
      alt={''}
      src={src}
      layout="fill"
      objectFit="cover"
    />
    <div className="absolute bg-blue-600/50 p-20 w-2/3 flex justify-center flex-col items-center">
      <h1 className="">{title}</h1>
      <p className="call-out">{heading}</p>
    </div>
  </div>
)

export default HeroComponent
