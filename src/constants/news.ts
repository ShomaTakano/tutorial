// imports
import { ArticleItem } from 'features/news/types';

// constants
const newsImagePath = `/images/news`;

export const id1: ArticleItem = {
  id: `1`,
  title: `株式会社ラクウェブへ社名変更しました。`,
  imageUrl: ``,
  date: `2022/10/01`,
  content: `平素は格別のご高配を賜り、厚く御礼申し上げます。

さて、このたび弊社は2022年10月1日に株式会社SNOWHITEから「株式会社ラクウェブ」へ社名変更いたしました。

新社名のもと社員一同心を新たに社業の発展に努力を尽くす所存でございますので、今後とも何卒変わらぬご愛顧を賜りますようお願い申し上げます。`,
  category: `お知らせ`,
  url: ``,
  meta_descripsion: ``,
};

export const id2: ArticleItem = {
  id: `2`,
  title: `ホームページをリニューアルしました。`,
  imageUrl: ``,
  date: `2022/10/1`,
  content: `日頃より株式会社ラクウェブのホームページをご覧いただき、誠にありがとうございます。

2022年10月1日よりホームページのリニューアルを実施いたしましたので、お知らせいたします。

今回のリニューアルでは、お客様がより使いやすいようにデザインや構成を見直し、機能の追加をいたしました。

リニューアルにともない、URLが変更になりましたのでブラウザの「ブックマーク」「お気に入り」などに登録されている場合は、URLの変更をお願いします。

新URL：https://rakuweb.jp

これからも、皆様に有益な情報やコンテンツの拡充に努めてまいります。今後とも、どうぞよろしくお願い申しあげます。
`,
  category: `お知らせ`,
  url: ``,
  meta_descripsion: ``,
};

export const id3: ArticleItem = {
  id: `3`,
  title: `コワーキングカフェ事業の工事を開始しました。`,
  imageUrl: ``,
  date: `2022/10/3`,
  content: `この度、弊社はこれまで計画してまいりました新事業である「コワーキングカフェ事業」の工事を開始しました。

企業と学生のためのサードプレイスを目指して、魅力的な空間をつくってまいりますので、引き続きどうぞよろしくお願いいたします。`,
  category: `お知らせ`,
  url: ``,
  meta_descripsion: ``,
};

export const id4: ArticleItem = {
  id: `4`,
  title: `「サイクルボールスペシャルチャレンジDAY サドイチ」に協賛しました。`,
  imageUrl: `${newsImagePath}/id4.jpg`,
  date: `2022/10/08`,
  content: `この度、2022年10月8日に佐渡市にて開催された「サイクルボールスペシャルチャレンジDAY サドイチ」に協賛いたしました。
プロチーム「さいたまディレーブ」や「那須ブラーゼン」の選手と一緒にサイクルボール走破を目指すイベントとなっており、全国からたくさん参加者が集まり熱いイベントとなりました。

株式会社ラクウェブは、今後とも佐渡市へ積極的に貢献してまいります。

サイクルボールスペシャルチャレンジDAY サドイチ 公式ホームページ
https://www.visitsado.com/cycle-ball2022/
`,
  category: `お知らせ`,
  url: ``,
  meta_descripsion: ``,
};

export const id5: ArticleItem = {
  id: `5`,
  title: `コワーキングスペース「NOT THE UNIVERSITY」がオープンしました。`,
  imageUrl: `${newsImagePath}/id5.jpg`,
  date: `2022/11/8`,
  content: `株式会社ラクウェブは、新潟大学五十嵐キャンパス内にコワーキングスペース「NOT THE UNIVERSITY」をオープンしました。

  「NOT THE UNIVERSITY」は、学生や企業が「家（第１の居場所）」と「大学や職場（第２の居場所）」の間で気の向くままに立ち寄り、思い思いの過ごし方をする「第３の居場所」の提供を目指し「企業と学生のサードプレイスの創造」をコンセプトにしたコワーキングスペースとオンラインで気軽に交流できるプラットフォームを提供します。

今後とも多くのみなさまにご利用いただける場所をつくってまいりますので、よろしくお願いいたします。`,
  category: `お知らせ`,
  url: `https://news.yahoo.co.jp/articles/02bbd24c2d90d511421af8300225c5981e16879b`,
  meta_descripsion: ``,
};

// export const id1: ArticleItem = {
//   id: `1`,
//   title: ``,
//   imageUrl: ``,
//   date: ``,
//   content: ``,
//   category: ``,
//   url: ``,
// };

export const newsList = [id5, id3, id2, id1];
