
export async function getPostBySlug(slug) {
    try {
        const post = await client.get({
            endpoint: 'blogs',
            queries: { filters: `slug[equals]$[slug]`},
        })
        return post.contents[0]
    } catch (err) {
        console.log('~~ getPostBySlug ~~')
        console.log(err)
    }
}