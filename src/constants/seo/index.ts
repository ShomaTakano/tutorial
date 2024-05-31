// import layer
import { DefaultSeoProps } from 'next-seo';

// constant layer

// default seo
export const SEO: DefaultSeoProps = {
  title: 'モダンWeb開発 | 株式会社ラクウェブ（RAKUWEB）',
  description: '株式会社ラクウェブ（RAKUWEB）はモダンWeb技術を使用したシステム開発に強みがあります。これまでにReact、Next.js、TypeScriptを使用し数多くのWebサイト制作、システム開発、アプリ開発を行ってまいりました。複雑化するウェブ業界だからこそ、いかに”ラクにウェブ”を提供できるかについて考え行動してきました。しかし私達にとって、Webは1つの手段。Webを掛け合わせ、限界を超えてセカイを創ることをミッションに掲げ、場所にとらわれず地方から攻めます。',
  openGraph: {
    type: 'website',
    locale: 'ja',
    url: 'https://rakuweb.jp',
    site_name: '株式会社ラクウェブ（RAKUWEB）',
    images: [
      {
        url: `https://rakuweb.jp/ogp.png`,
        width: 1200,
        height: 630,
        alt: '',
      },
    ],
  },
  twitter: { cardType: 'summary_large_image' },
};
