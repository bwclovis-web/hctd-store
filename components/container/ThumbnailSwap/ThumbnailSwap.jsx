import { useRef } from "react"
import Image from "next/legacy/image"
import { Carousel } from 'react-responsive-carousel'
const ProductThumbnails = ({ thumbnails, action }) => {
  const buttonRef = useRef(null)
  const handleThumbnailClick = evt => {
    buttonRef?.current?.dataset.url && action({
      url: evt.currentTarget.dataset.url,
      alt: evt.currentTarget.dataset.caption
    })
  }

  if(!thumbnails) {
    return
  }

  return (
    <div className=" bg-red-50 w-full h-full justify-start gap-2 px-2">
      <div className="w-2/3 2xl:w-1/2 mx-auto">
        <Carousel>
          {thumbnails.map(img => (
            <button
              ref={buttonRef}
              className=" lg:h-32  xl:h-40 w-1/2 overflow-hidden mx-3"
              key={img.node.id}
              data-url={img.node.url}
              data-caption={img.node.altText}
              onClick={evt => handleThumbnailClick(evt)}
            >
              <span className="sr-only">Switch to view {img.node.altText}</span>
              <Image
                alt=""
                width={200}
                height={300}
                layout="responsive"
                objectFit="contain"
                src={img.node.url}
                className="pointer-events-none"
              />
            </button>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default ProductThumbnails
