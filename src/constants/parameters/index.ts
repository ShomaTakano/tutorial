export const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS4_ID ?? ``;
export const RECAPTCHA_URL = `https://www.google.com/recaptcha/api/siteverify`;
export const GOOGLE_RECAPTCHA_SITEKEY =
  process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITEKEY ?? ``;
export const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL
  ? `${process.env.NEXT_PUBLIC_STRAPI_URL}`
  : `https://management.rakuweb.jp`;

export const OUTLINE = [
  { key: `会社名`, value: `株式会社ラクウェブ` },
  {
    key: `所在地`,
    value: `本社：
〒950-0917
新潟県新潟市中央区天神1-1
PLAKA3 2F

佐渡営業所：
〒952-3421
新潟県佐渡市吾潟39-2`,
  },
  { key: `設立日`, value: `2022年2月20日` },
  {
    key: `資本金`,
    value: `110万円
※資本準備金含む`,
  },
  {
    key: `代表者`,
    value: `CEO 熊澤 隼斗
COO 大塩 優多`,
  },
  {
    key: `事業内容`,
    value: `・Webサイト制作及びWebシステム開発
・コワーキングスペースの管理・運営`,
  },
];

export const MEDIA_ROOT_URL = `${STRAPI_URL}`;
export const UPDATE_INTERVAL = 30;
export const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL
  ? `${process.env.NEXT_PUBLIC_STRAPI_URL}/api`
  : `https://management.rakuweb.jp/api`;
export const GRAPHQL_URL = process.env.NEXT_PUBLIC_STRAPI_URL
  ? `${process.env.NEXT_PUBLIC_STRAPI_URL}/gql`
  : `https://management.rakuweb.jp/gql`;
