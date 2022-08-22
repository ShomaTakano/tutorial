import Meta from '/Users/takanoshoma/Desktop/tutorial/components/meta.js'
import Container from '/Users/takanoshoma/Desktop/tutorial/components/container.js'
import Hero from '/Users/takanoshoma/Desktop/tutorial/components/hero.js'

export default function Custom404() {
    return (
        <Container>
            <Meta pageTitle="404 - Page not found" />
            <Hero title="404" subtitle="ページが見つかりません" />
      </Container>
  )  
}