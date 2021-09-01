import LandingContainer from 'modules/home/containers/LandingContainer'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Boilerplate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingContainer/>
    </>
  )
}
