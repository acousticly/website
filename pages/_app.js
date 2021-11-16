import '../styles/globals.css'
import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Script from 'next/script'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <title>Acoustic</title>
        <meta
          name="description"
          content="Acoustic is the fastest, most feature rich bot ever."
        />
        <link rel="icon" href="/static/media/meta.webp" />
        <meta name="theme-color" content="#13161D" />
        <meta property="og:title" content="Acoustic" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://acoustic.to" />
        <meta property="og:image" content="/static/media/meta.webp" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Acoustic is the fastest, most feature rich bot ever."
        />
        <meta itemprop="name" content="Acoustic" />
        <meta
          itemprop="description"
          content="Acoustic is the fastest, most feature rich bot ever."
        />
        <meta
          itemprop="image"
          content="https://acoustic.to//static/media/meta.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Acoustic" />
        <meta
          name="twitter:description"
          content="Acoustic is the fastest, most feature rich bot ever."
        />
        <meta
          name="twitter:image"
          content="https://acoustic.to//static/media/meta.webp"
        />
        <meta
          name="Keywords"
          content="discord, bot, discord bot, best discord, reddit, music, tunes, economy, github"
        />
        {/* <link rel="stylesheet" href="/static/css/style.css" as="style" /> */}
        {/* 
        <link rel="stylesheet" href="/static/css/style.css" data-n-g="" /> */}
      </Head>
      <Script src="/static/js/gsap.min.js" strategy="beforeInteractive" />
      <Script src="/static/js/ScrollTrigger.js" strategy="beforeInteractive" />
      <Script src="/static/js/script.js" strategy="beforeInteractive" />

      <div className="container">
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  )
}

export default App
