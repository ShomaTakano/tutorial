import type { NextPage } from 'next';
import { SeoComponent } from 'components/seo/SeoComponent';

import { Privacy as Template } from 'templates/PrivacyPolicy';

const title = `プライバシーポリシー | 株式会社ラクウェブ`;
const description = `株式会社ラクウェブ(RAKUWEB)のプライバシーポリシーです。`;

const Privacy: NextPage = () => {
  return (
    <div>
      <SeoComponent title={title} description={description} />
      <Template />
    </div>
  );
};

export default Privacy;
