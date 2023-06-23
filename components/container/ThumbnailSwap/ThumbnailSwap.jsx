import { useRef } from "react"
import Image from "next/legacy/image"
import { getScreenSize } from "utils/getScreenSize"
import { Carousel } from 'react-responsive-carousel'

const ProductThumbnails = ({ thumbnails, action, passedRef }) => {
  const buttonRef = useRef(null)
  
  const handleThumbnailClick = evt => {
    if(getScreenSize() === "small") {
      window.scrollTo({
        behavior: "smooth",
        top: passedRef.current.offsetTop
      })
    }
    
    buttonRef?.current?.dataset.url && action({
      url: evt.currentTarget.dataset.url,
      alt: evt.currentTarget.dataset.caption
    })
  }

  if(!thumbnails) {
    return
  }

  return (
    <div className=" bg-slate-100 w-full p-4 lg:p-2 pt-6">
      <div className="mx-auto lg:w-2/3">
        <Carousel showThumbs={false} showIndicators={false}>
          {thumbnails.map(img => (
            <button
              ref={buttonRef}
              className="overflow-hidden mx-3 w-2/3"
              key={img.node.id}
              data-url={img.node.url}
              data-caption={img.node.altText}
              onClick={evt => handleThumbnailClick(evt)}
            >
              <span className="sr-only">Switch to view {img.node.altText}</span>
              <Image
                alt=""
                width={400}
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
      <p className="text-center text-slate-600">Click on a thumbnail to see larger image.</p>
    </div>
  )
}

export default ProductThumbnails
