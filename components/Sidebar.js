import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  RssIcon,
  CashIcon,
} from '@heroicons/react/outline'
import { useSession } from 'next-auth/react'
import useSpotify from '../hooks/useSpotify'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { playlistIdState } from '../atoms/playlistAtom'

// import { Button } from 'antd'
// import '~antd/dist/antd.css'

const Sidebar = () => {
  const spotifyApi = useSpotify()
  const { data: session, status } = useSession()
  const [playlists, setPlaylists] = useState([])
  // this method not good because it stores in local, we want global context
  // const [playlistId, setPlaylistId] = useState(null)
  const [playlistId, setPlaylistId] = useRecoilState(playlistIdState)

  useEffect(() => {
    // console.log('Sidebar access token: ', spotifyApi.getAccessToken())
    if (spotifyApi.getAccessToken()) {
      // console.log('Got access token')
      spotifyApi.getUserPlaylists().then((data) => {
        setPlaylists(data.body.items)
      })
    }
  }, [session, spotifyApi])

  console.log('Playlists:', playlists)

  // console.log(session)

  // overflow-y-scroll & h-screen for sidebar responsiveness
  // scrollbar-hide plugin and class for hiding scrollbars
  return (
    <div
      className="hidden h-screen h-screen
      overflow-y-scroll border-r border-gray-900 p-5 text-xs
      text-gray-500 scrollbar-hide sm:max-w-[12rem] md:inline-flex
      lg:max-w-[15rem] lg:text-sm"
    >
      <div className="space-y-4">
        {/*<button*/}
        {/*  className="flex items-center space-x-2 hover:text-white"*/}
        {/*  onClick={() => signOut()}*/}
        {/*>*/}
        {/*  <CashIcon className="h-5 w-5" />*/}
        {/*  <p>Logout</p>*/}
        {/*</button>*/}

        <button className="flex items-center space-x-2 hover:text-white">
          <HomeIcon className="h-5 w-5" />
          <p>Home</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <SearchIcon className="h-5 w-5" />
          <p>Search</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <LibraryIcon className="h-5 w-5" />
          <p>Your Library</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />

        <button className="flex items-center space-x-2 hover:text-white">
          <PlusCircleIcon className="h-5 w-5" />
          <p>Create Playlist</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <HeartIcon className="h-5 w-5" />
          <p>Liked Songs</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <RssIcon className="h-5 w-5" />
          <p>Your Episodes</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />

        {/* Playlist */}
        {playlists.map((playlist) => (
          <p
            key={playlist.id}
            className="cursor-pointer hover:text-white"
            onClick={() => setPlaylistId(playlist.id)}
          >
            {playlist.name}
          </p>
        ))}
        {/*<p className="cursor-pointer hover:text-white">Playlist name...</p>*/}
        {/*{Array.from({ length: 25 }, (_, i) => i).map((i) => (*/}
        {/*  <p*/}
        {/*    key={i}*/}
        {/*    className="cursor-pointer hover:text-white"*/}
        {/*  >{`Playlist ${i}...`}</p>*/}
        {/*))}*/}
      </div>
    </div>
  )
}

export default Sidebar
