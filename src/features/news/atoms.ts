import { atom } from 'recoil';

import { NewsListItem, NewsItem } from './types';

export const newsState = atom<NewsItem>({
  key: 'newsState',
  default: {
    id: ``,
    content: '',
    title: '',
    date: '',
    imageUrl: '',
    category: '',
    url: '',
    meta_descripsion: '',
  },
});

const newsImagePath = `/images/news`;

export const newsListState = atom<NewsListItem[]>({
  key: 'newsListState',
  default: [
    {
      id: `5`,
      title: `コワーキングスペース「NOT THE UNIVERSITY」がオープンしました。`,
      date: `2022.11.08`,
      image: { src: `${newsImagePath}/id5.jpg`, width: 100, height: 100 },
      category: 'お知らせ',
      url: './news/5',
    },
    {
      id: `3`,
      title: 'コワーキングカフェ事業の工事を開始しました。',
      date: `2022.10.03`,
      image: { src: ``, width: 100, height: 100 },
      category: 'お知らせ',
      url: './news/3',
    },
    // {
    //   title: 'testです。testです。testです。testです。',
    //   date: `20xx/01/01`,
    //   image: { src: ``, width: 100, height: 100 },
    //   category: 'test',
    //   url: '',
    // },
  ],
});
