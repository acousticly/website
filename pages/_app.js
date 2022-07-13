import '../styles/globals.css'
import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Script from 'next/script'
import { DefaultSeo } from 'next-seo'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
        <title>Acoustic</title>
        <link rel="preconnect" href="https://discord.com" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="preconnect" href="https://vitals.vercel-insights.com" />
        <link rel="preconnect" href="https://docs.acoustic.to" />
        <link rel="preconnect" href="https://status.acoustic.to" />
        <link rel="dns-prefetch" href="https://discord.com" />
        <link
          rel="dns-prefetch"
          href="https://cdnjs.cloudflare.com"
        />
        <link
          rel="dns-prefetch"
          href="https://vitals.vercel-insights.com"
        />
        <link rel="dns-prefetch" href="https://docs.acoustic.to" />
        <link rel="dns-prefetch" href="https://status.acoustic.to" />
        <meta
          name="description"
          content="Acoustic is the fastest, most feature rich bot ever."
        />
        <link rel="icon" href="/static/media/meta.webp" />
        <meta name="theme-color" content="#13161D" />
        <meta
          name="Keywords"
          content="discord, bot, discord bot, best discord, reddit, music, tunes, economy, github, acoustic bot, acoustic discord bot, acoustic bot discord, jeve stobs, 24/7 commands, yandex music discord bot, fishing wikihow, stage bot discord, audiophile discord server, 24/7 bot commands"
        />
      </Head>
      <Script
        src="//cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="//cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/ScrollTrigger.min.js"
        strategy="beforeInteractive"
      />
      <Script src="/static/js/script.js" />
      <div className="container">
        <DefaultSeo
          title="Acoustic"
          description="Acoustic is the fastest, most feature rich bot ever."
          openGraph={{
            url: 'https://acoustic.to',
            title: 'Acoustic',
            description: 'Acoustic is the fastest, most feature rich bot ever.',
            images: [
              {
                url: 'https://acoustic.to/static/media/meta.webp',
                width: 120,
                height: 108,
                alt: 'Acoustic'
              }
            ]
          }}
          twitter={{
            handle: '@acousticlybot',
            site: '@acousticlybot',
            cardType: 'summary_large_image'
          }}
        />
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  )
}

export default App
export function reportWebVitals(metric) {
  console.log(metric)
}
