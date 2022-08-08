import '/Users/takanoshoma/Desktop/tutorial/styles/globals.css'
import Layout from '/Users/takanoshoma/Desktop/tutorial/components/layout'

function MyApp({ Component, pageProps }) {
  return(
  <Layout>
     <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
