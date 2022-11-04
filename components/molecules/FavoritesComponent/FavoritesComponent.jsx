import { useContext, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { MdOutlineFavoriteBorder, MdFavorite } from 'react-icons/md'
import { FaTrash } from 'react-icons/fa'
import { useLiveQuery } from "dexie-react-hooks"
import { hctdFavorites } from "queries/database.config"


import Modal from 'components/container/Modal/Modal'
import AppContext from 'provider/AppProvider'
import { useRouter } from 'next/router'


const FavoritesComponent = () => {
  const router = useRouter()
  const { toggleModal, modalId, modalOpen } = useContext(AppContext)
  const favorites = useLiveQuery(() => hctdFavorites.toArray())

  const handleRemoveFromDb = item => {
    hctdFavorites.delete(item.id)
  }

  

  useEffect(() => {
    const handleFavoritesOnRouteChange = () => {
      modalOpen && toggleModal()
    }
    router.events.on('routeChangeComplete', handleFavoritesOnRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleFavoritesOnRouteChange)
    }
  }, [ modalOpen, router.events, toggleModal ])

  return (
    <>
      <button onClick={() => toggleModal("favorites")} className="px-2 py-3" disabled={!favorites?.length}>
        {favorites?.length ? <MdFavorite size={35} fill={'red'}/> : <MdOutlineFavoriteBorder size={30}/>}
      </button>
      
      {modalOpen && modalId === "favorites" && <Modal>
        <div className="w-full">
          <h2 className="font-display text-h2-dynamic">My Favorites</h2>
          <ul className="mt-8">
            {favorites?.map(item => (
              <li key={item.id} className="text-2xlw-full mb-4 relative">  
                <div className="relative w-full h-20">
                  <Image
                    alt=""
                    src={item.image}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="flex justify-between w-full h-20 items-center absolute top-0">
                  <span className="flex flex-col bg-slate-200 h-full justify-center px-4">
                    <Link href={item.slug}>
                      <a className="text-2xl underline text-violet-700">{item.title}</a>
                    </Link>
                    <p>Added on {item.timeStamp}</p>
                  </span>
                  <button onClick={() => handleRemoveFromDb(item)} className="text-white mr-4 transition shadow bg-rose-600 border-2 border-rose-600 flex items-center w-12 h-12 justify-center rounded-full hover:bg-rose-600 active:translate-y-2">
                    <FaTrash size={24} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Modal>}
    </>
  )
}

export default FavoritesComponent
