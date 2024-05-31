// import layer
import * as yup from 'yup';

import { selectList } from 'constants/parameters/contact';

export const contactKindItem = [
  '取材・プレス関係について',
  '採用について',
  'お仕事について',
  'その他',
];

export type ContactSchema = {
  kind: string[];
  name: string;
  company: string;
  postal_code: string;
  address1: string;
  address2: string;
  phone: string;
  message: string;
  email: string;
  email_confirmation: string;
};

export const contactSchema = yup.object().shape({
  kind: yup
    .array()
    .typeError('1つ以上選択してください。')
    .min(1, `1つ以上選択してください。`)
    .required('選択してください。'),
  name: yup.string().required('入力されていません。'),
  company: yup.string(),
  postal_code: yup
    .string()
    .matches(/(^[0-9]{3}-?[0-9]{4}$)|^$/, `形式が正しくありません。`),
  address1: yup
    .string()
    .oneOf([...selectList], '都道府県を選択してください。')
    .transform((value, originalValue) =>
      String(originalValue).trim() === '' ? '' : value
    ),
  address2: yup.string(),
  phone: yup
    .string()
    .required('入力されていません。')
    .matches(
      /^(\d{2,4}-?\d{2,4}-?\d{4}|0[789]0-[0-9]{4}-[0-9]{4})$/,
      '形式が正しくありません。'
    ),
  message: yup.string(),
  email: yup
    .string()
    .email('形式が正しくありません。')
    .required('入力されていません。'),
  email_confirmation: yup
    .string()
    .email('形式が正しくありません。')
    .oneOf([yup.ref('email')], 'E-mailが一致しません。')
    .required('入力されていません。'),
});
// furigana: yup
//   .string()
//   .required('入力されていません。')
// eslint-disable-next-line
//   .matches(/^[ァ-ヶー　]+$/, 'カタカナで入力してください。'),
