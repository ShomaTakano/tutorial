import type { NextPage } from 'next';
import { SeoComponent } from 'components/seo/SeoComponent';

import { About as Template } from 'templates/About';

const title = `私たちについて | 株式会社ラクウェブ`;
const description = `株式会社ラクウェブ(RAKUWEB)のMission、Vision、Valueを紹介します。`;

const About: NextPage = () => {
  return (
    <div>
      <SeoComponent title={title} description={description} />
      <Template />
    </div>
  );
};

export default About;
