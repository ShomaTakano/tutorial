import type { ImageProps } from 'next/image';

export type RecruitItem = {
  readonly content: string;
  readonly date: string;
  readonly title: string;
  readonly image: ImageProps;
  readonly id: string;
};

export type RecruitListItem = {
  readonly date: string;
  readonly title: string;
  readonly image: ImageProps;
  readonly url: string;
  readonly id: string;
};
