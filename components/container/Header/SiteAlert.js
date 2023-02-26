import classNames from "classnames"

const SiteAlert = ({ bannerData }) => {
  const { content, color } = bannerData

  const BannerClasses = classNames({
    'text-center px-2 py-5': true,
    'text-white bg-red-500': color[0] === 'red',
    'text-blue-200 bg-blue-700': color[0] === 'blue',
    'text-green-200 bg-green-700': color[0] === 'green',
    'text-yellow-800 bg-yellow-300': color[0] === 'yellow'
  })

  return (
    <div className={BannerClasses}>
      <p className="lg:text-xl tracking-wide">{content}</p>
    </div>
  )
}

export default SiteAlert
