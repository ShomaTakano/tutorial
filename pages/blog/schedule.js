//環境変数入力//
import { createClient } from "microcms-js-sdk"
const client = createClient({
    serviceDomain: "7fed8ab1da424c62927c3afa949910a19479",
    apiKey: "c73blog",
})
///////////////

export default function Schedule() {
    return <h1>記事のタイトル</h1>
}


export async function getStaticProps() {
    const resPromise = client.get({
        endpoint: 'blogs',
    })

    try {
        const res = await resPromise
        console.log(res)
    } catch (err) {
        console.log(err)
    }
    return {
        props: {},
    }
}