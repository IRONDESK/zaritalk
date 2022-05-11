import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Head from '../components/Layout/Head'
import Container from '../components/Layout/ViewContainer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head />
      <Container><Component {...pageProps} /></Container>
    </>
  )
}

export default MyApp
