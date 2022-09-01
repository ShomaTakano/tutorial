//環境変数//
import { createClient } from "microcms-js-sdk"
const client = createClient({
    serviceDomain: "c73blog",
    apiKey: "7fed8ab1da424c62927c3afa949910a19479",
})
///////////////

import Container from "components/container"
import PostHeader from 'components/post-header'
import PostBody from "components/post-body"
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from 'components/two-column.js'
import ConvertBody from "components/convert-body"
import Image from 'next/image'

export default function Schedule({
    title,
    publish,
    content,
    eyecatch,
    categories,
}) {
    return (
        <Container>
            <article>
                <PostHeader title={title} subtitle="Blog Article" publish={publish} />

                <figure>
                    <Image
                        src={eyecatch.url}
                        alt=""
                        layout="responsive"
                        width={eyecatch.width}
                        height={eyecatch.height}
                        sizes="(min-width: 1152px) 1152px, 100vw"
                        priority
                    />
                </figure>

                <TwoColumn>
                    <TwoColumnMain>
                        <PostBody>
                            <ConvertBody contentHTML = {content} />
                        </PostBody>
                    </TwoColumnMain>
                    <TwoColumnSidebar></TwoColumnSidebar>
                </TwoColumn>

            </article>
       </Container>
   )
}

export async function getStaticProps() {
    const slug = 'schedule'

    const post = await getPostBySlug(slug)
    return {
        props: {
            title: post.title,
            publish: post.publishDate,
            content: post.content,
            eyecatch: post.eyecatch,
            categories: post.categories,
        },
    }
}

export async function getPostBySlug(slug) {
    try {
        const post = await client.get({
            endpoint: 'blogs',
            queries: { filters: `slug[equals]${slug}`},
        })
        return post.contents[0]
    } catch (err) {
        console.log('~~ getPostBySlug ~~')
        console.log(err)
    }
}







