import type { ImageProps } from 'next/image';

export type ArticleItem = {
  readonly id: string;
  readonly content: string;
  readonly date: string;
  readonly title: string;
  readonly imageUrl: string;
  readonly category: string;
  readonly url: string;
  readonly meta_descripsion: string;
};

export type ArticleListItem = {
  readonly id: string;
  readonly date: string;
  readonly title: string;
  readonly image: ImageProps;
  readonly category: string;
  readonly url: string;
};

export type NewsItem = ArticleItem & { link?: string };
export type NewsListItem = ArticleListItem;
