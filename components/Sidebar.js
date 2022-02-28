import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  RssIcon,
  CashIcon,
} from '@heroicons/react/outline'
import { signOut, useSession } from 'next-auth/react'

const Sidebar = () => {
  const { data: session, status } = useSession()

  // console.log(session)

  // overflow-y-scroll & h-screen for sidebar responsiveness
  // scrollbar-hide plugin and class for hiding scrollbars
  return (
    <div className="h-screen overflow-y-scroll border-r border-gray-900 p-5 text-sm text-gray-500 scrollbar-hide">
      <div className="space-y-4">
        <button
          className="flex items-center space-x-2 hover:text-white"
          onClick={() => signOut()}
        >
          <CashIcon className="h-5 w-5" />
          <p>Logout</p>
        </button>

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
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        {Array.from({ length: 25 }, (_, i) => i).map((i) => (
          <p
            key={i}
            className="cursor-pointer hover:text-white"
          >{`Playlist ${i}...`}</p>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
