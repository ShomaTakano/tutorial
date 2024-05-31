import { atom } from 'recoil';

import { ArticleItem, ArticleListItem } from './types';

export const articleState = atom<ArticleItem>({
  key: 'articleState',
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

export const articleListState = atom<ArticleListItem[]>({
  key: 'articleListState',
  default: [
    {
      id: ``,
      title: ``,
      date: ``,
      image: { src: `${newsImagePath}/id5.jpg`, width: 100, height: 100 },
      category: '',
      url: '',
    },
  ],
});
