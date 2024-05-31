import type { NextPage } from 'next';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import { SeoComponent } from 'components/seo/SeoComponent';
import { Contact as Template } from 'templates/Contact';
import { GOOGLE_RECAPTCHA_SITEKEY } from 'constants/parameters';

const title = `Contact | 株式会社ラクウェブ`;
const description = `株式会社ラクウェブ(RAKUWEB)のお問い合わせです。お問合せはこちらからお願いします。`;

const Contact: NextPage = () => {
  return (
    <div>
      <SeoComponent title={title} description={description} />
      <GoogleReCaptchaProvider
        reCaptchaKey={GOOGLE_RECAPTCHA_SITEKEY}
        language={`ja`}
      >
        <Template />
      </GoogleReCaptchaProvider>
    </div>
  );
};

export default Contact;
