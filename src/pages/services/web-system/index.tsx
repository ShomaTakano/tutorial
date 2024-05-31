import type { NextPage } from 'next';
import { SeoComponent } from 'components/seo/SeoComponent';
import { Webdevelop as Template } from 'templates/Webdevelop';

const title = `ウェブ開発/アプリケーション開発について`;
const description = `株式会社ラクウェブ(RAKUWEB)のウェブ開発/アプリケーション開発について。私たちは、ReactやTypeScriptをはじめとしたモダンWeb技術を使ったシステム開発を得意としています。`;

const Webdevelop: NextPage = () => {
  return (
    <div>
      <SeoComponent title={title} description={description} />
      <Template />
    </div>
  );
};

export default Webdevelop;
