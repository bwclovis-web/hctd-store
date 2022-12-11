import { useRef } from "react"
import Image from "next/legacy/image";

const ProductThumbnails = ({ thumbnails, action }) => {
  const buttonRef = useRef(null)
  const handleThumbnailClick = evt => {
    buttonRef?.current?.dataset.url && action({
      url: evt.currentTarget.dataset.url,
      alt: evt.currentTarget.dataset.caption
    })
  }

  return (
    <div className="flex bg-red-50 w-full h-full justify-start gap-2 px-2">
      {thumbnails.map(img => (
        <button
          ref={buttonRef}
          className="h-32 md:h-24 xl:h-40 w-1/5 overflow-hidden"
          key={img.node.id}
          data-url={img.node.url}
          data-caption={img.node.altText}
          onClick={evt => handleThumbnailClick(evt)}
        >
          <span className="sr-only">Switch to view {img.node.altText}</span>
          <Image
            alt=""
            width={800}
            height={800}
            layout="responsive"
            objectFit="contain"
            src={img.node.url}
            className="pointer-events-none"
          />
        </button>
      ))}
    </div>
  )
}

export default ProductThumbnails
