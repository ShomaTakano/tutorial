import Meta from 'components/meta.js'
import Container from 'components/container'
import Hero from 'components/hero'
import PostBody from 'components/post-body.js'
import Contact from 'components/contact'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from 'components/two-column.js'
import Accordion from 'components/accordion.js'
import Image from 'next/image'
import eyecatch from 'images/about.jpg'

export default function About() {
  return (
    <Container>
      <Meta pageTitle="アバウト" pageDesc="About development activities" 
      pageImg={eyecatch.src}
      pageImgW={eyecatch.width}
      pageImgH={eyecatch.height}
      />

      <Hero title="About" subtitle="About development activities" />

      <figure>
        <Image
          src={eyecatch}
          alt=""
          layout="responsive"
          sizes="(min-width: 1152px) 1152px, 100vw"
          priority
          placeholder='blur'
        />
      </figure>
      
      <TwoColumn>
        <TwoColumnMain>
          <PostBody>
          <p>
        Cubeが得意とする分野はモノづくりです。3次元から2次元の造形、プログラミングやデザインなど、さ
        まざまな技術を組み合わせることによって社会や環境と結びつけるクリエイティブを提案し続けています。
          </p>
          <h2> モノづくりで目指していること </h2>
          <p>
        モノづくりではデータの解析かたクリエイティブまで幅広いことを担当していきます。新しいことを取り入
        れながら、ユーザーにマッチした提案を実現するのが目標です。たくさんの開発・提供が数多くありますが、
        特にそこを磨く作業に力を入れています。
          </p>
          <p>
        単純に形にするだけではなく、作る過程や、なぜそのようにしたのかを大事にしながらものづくりをしてい
        ます。毎回課題解決テーマを持って「モノ」と向き合い政策をし、フィードバックしてもらうことで自分
        の中にあるモヤモヤを言葉にして「問い」への答えを出していきます。
          </p>
          <h3> 新しいことへのチャレンジ </h3>
          <p>
        今までと違うものを作ることで愛着が湧いています。そこで興味を持ったことは小さなことでもいいから
        取り入れて、良いものを作れるようにしています。小さなヒントから新しいものを生み出すようなモノづ
        くりは、これからも続けていきたいです。
          </p>
          
          <h2>FAQ</h2>
            <Accordion heading="プログラミングのポイントについて">
              <p>
                プログラミングのポイントは、作りたいものを作ることです。楽しいことから思いつき、目標とゴールを決め、
                そこに向かってさまざまな課題を設定していきながら、プログラムを作っていきます。
              </p>
            </Accordion>
            <Accordion heading="古代語の解読について">
              <p>
                古代語を解読するのに必要なのは、書かれた文字そのものだけです。古代の世界観や思考方法。
                それらを読み取ってこそ古代の世界観が理解できてきます。
              </p>
            </Accordion>
            <Accordion heading="公開リポジトリの活用について">
              <p>
                公開リポジトリを活用すると、全世界のどこからでもアクセスし、開発者が関連するプロジェクトの
                タスクを利用することができます。
              </p>
            </Accordion>
            
        
           </PostBody>
         </TwoColumnMain>

         <TwoColumnSidebar>
           <Contact />
         </TwoColumnSidebar>
      </TwoColumn>
    </Container>
    
  )
 
}
