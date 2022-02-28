import NextAuth from 'next-auth'
import SpotifyProvider from 'next-auth/providers/spotify'

export default NextAuth({
  providers: [
    SpotifyProvider({
      clientId: process.env,
      clientSecret: process.env,
      authorization: process.env,
    }),
  ],
})
