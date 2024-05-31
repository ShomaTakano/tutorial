import { atom } from 'recoil';

import { ContactItem } from './types';

export const contactState = atom<ContactItem>({
  key: 'contactState',
  default: {
    isChecked: false,
    isSending: false,
    isComplete: false,
  },
});
