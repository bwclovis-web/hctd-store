import { GrFacebook, GrInstagram, GrTwitter, GrYoutube } from 'react-icons/gr'
import { FaTiktok } from 'react-icons/fa'
const SocialMediaBlock = ({ socialMedia }) => (
  <ul className="flex w-full">
    {
      socialMedia.map(item => {
        const type = item.type[0]

        return (
          type === "facebook" && <li className="p-2"><a href={item.url} ><GrFacebook size={30}/></a></li> ||
            type === "instagram" && <li className="p-2"><a href={item.url} ><GrInstagram size={30}/></a></li> ||
            type === "twitter" && <li className="p-2"><a href={item.url} ><GrTwitter size={30}/></a></li> ||
            type === "youtube" && <li className="p-2"><a href={item.url} ><GrYoutube size={30}/></a></li> ||
            type === "tiktok" && <li className="p-2"><a href={item.url} ><FaTiktok size={30}/></a></li>
        )
      })
    }
  </ul>
)

export default SocialMediaBlock
