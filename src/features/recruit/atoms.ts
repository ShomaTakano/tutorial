import { atom } from 'recoil';

import { RecruitListItem, RecruitItem } from './types';

export const recruitState = atom<RecruitItem>({
  key: 'recruitState',
  default: {
    id: ``,
    content: '',
    title: '',
    date: '',
    image: { src: `` },
  },
});

export const recruitListState = atom<RecruitListItem[]>({
  key: 'recruitListState',
  default: [],
});
