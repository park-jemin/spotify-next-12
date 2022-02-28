import { useRecoilValue } from 'recoil'
import { playlistState } from '../atoms/playlistAtom'
import Song from './Song'

const Songs = () => {
  const playlist = useRecoilValue(playlistState)

  return (
    <div className="flex flex-col space-y-1 px-8 pt-5 pb-28 text-white">
      {playlist?.tracks.items.map((track, order) => (
        <Song key={track.track.id} track={track} order={order} />
      ))}
    </div>
  )
}

export default Songs
