import { useEffect } from 'react'
import { signIn, useSession } from 'next-auth/react'
// import spotifyApi from '../lib/spotify'
import SpotifyWebApi from 'spotify-web-api-node'

// could initialize this locally as well
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
})

const useSpotify = () => {
  const { data: session, status } = useSession()

  useEffect(() => {
    // console.log('Session: ', session)
    if (session) {
      // if refresh access token attempt fails, direct user to login
      if (session.error === 'RefreshAccessTokenError') {
        signIn()
      }

      // singleton pattern
      console.log('Access token ', session.user)
      spotifyApi.setAccessToken(session.user.accessToken)
    }
  }, [session])

  return spotifyApi
}

export default useSpotify
