import Header from '/Users/takanoshoma/Desktop/tutorial/components/header'
import Footer from '/Users/takanoshoma/Desktop/tutorial/components/footer'

export default function Layout({ children }) {
    return (
        <>
            <Header />
            
            <main>{children}</main>

            <Footer />
        </>
    )
}