import type { NextPage } from 'next'
import Head from 'next/head'

import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
  return (
    <div className="h-screen overflow-hidden bg-black">
      <Head>
        <title>Spotify Next 12</title>
        {/*<link rel="icon" href="/favicon.ico" />*/}
      </Head>

      <main className="">
        <Sidebar />
        {/*   Center   */}
      </main>

      <div>{/* Player */}</div>
    </div>
  )
}

export default Home
