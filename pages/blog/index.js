import Meta from '/Users/takanoshoma/Desktop/tutorial/components/meta.js'
import Container from '/Users/takanoshoma/Desktop/tutorial/components/container'
import Hero from '/Users/takanoshoma/Desktop/tutorial/components/hero'

export default function Blog() {
  return (
    <Container>
      <Meta pageTitle="ブログ" pageDesc="ブログの記事一覧" />
        <Hero title="Blog" subtitle="Recent Posts" />
      </Container>
    )
  }