import Meta from 'components/meta.js'
import Container from 'components/container.js'
import Hero from 'components/hero.js'

export default function Custom404() {
    return (
        <Container>
            <Meta pageTitle="404 - Page not found" />
            <Hero title="404" subtitle="ページが見つかりません" />
      </Container>
  )  
}