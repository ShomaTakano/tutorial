import { useEffect } from 'react'
import { useRouter } from 'react'
import '/Users/takanoshoma/Desktop/tutorial/styles/globals.css'
import Layout from '/Users/takanoshoma/Desktop/tutorial/components/layout'
import Script from 'next/script'
import * as gtag from '/Users/takanoshoma/Desktop/tutorial/lib/gtag.js'

// Font Awesomeの設定
import '/Users/takanoshoma/Desktop/tutorial/node_modules/@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '/Users/takanoshoma/Desktop/tutorial/node_modules/@fortawesome/fontawesome-svg-core'
config.autoAddCss = false


function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handRouteChange)
    }
  }, [router.events])
  
  return (
  <>
  <Script
    strategy="afterInteractive"
    src={`https://www.gogletagmanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID}`}
  />
  <Script
    id="gtag-init"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: `
      window.dateLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      
      gtag('config', '${gtag.GA_MEASUREMENT_ID}');
      `,  
    }}  
    />

  <Layout>
     <Component {...pageProps} />
    </Layout>
  </>    
      )
}

export default MyApp
