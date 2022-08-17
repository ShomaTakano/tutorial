import '/Users/takanoshoma/Desktop/tutorial/styles/globals.css'
import Layout from '/Users/takanoshoma/Desktop/tutorial/components/layout'

// Font Awesomeの設定
import '/Users/takanoshoma/Desktop/tutorial/node_modules/@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '/Users/takanoshoma/Desktop/tutorial/node_modules/@fortawesome/fontawesome-svg-core'
config.autoAddCss = false


function MyApp({ Component, pageProps }) {
  return(
  <Layout>
     <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
