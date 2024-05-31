// import layer
import { FC } from 'react';
import { useRouter } from 'next/router';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useSetRecoilState } from 'recoil';

import { ContactSchema, contactSchema } from 'features/contact/schema';

import { Presenter, StyleProps } from './presenter';
import { routes } from 'constants/routes';
import { contactState } from 'features/contact/atoms';

// type layer
export type ContainerProps = StyleProps;

// container
export const Container: FC<ContainerProps> = ({ ...props }) => {
  const methods = useForm<ContactSchema>({
    resolver: yupResolver(contactSchema),
  });
  const router = useRouter();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const setContact = useSetRecoilState(contactState);

  const onSubmit = methods.handleSubmit(async (data) => {
    if (!executeRecaptcha) {
      alert('reCAPTCHAでエラーが発生しました。もう一度やり直してください。');
    }
    const token = await executeRecaptcha?.('homepage');
    setContact((old) => ({
      ...old,
      isSending: true,
    }));

    try {
      const { address1, address2, kind, email_confirmation, ...remain } = data;
      const contactData = {
        ...remain,
        kind: kind.join(','),
        address: address1 === '--' ? `` : `${address1} ${address2}`,
      };
      await axios.post('/api/contact', {
        ...contactData,
        recaptcha: token,
      });

      methods.reset();
      setContact((old) => ({
        ...old,
        isComplete: true,
      }));
      router.push(routes.thanks.url);
      window.scroll({ top: 0 });
    } catch (err) {
      console.error(err);
      alert('正常に送信できませんでした。時間をおいてもう一度お試しください。');
    } finally {
      setContact((old) => ({
        ...old,
        isSending: false,
        isChecked: false,
      }));
    }
  });

  return (
    <FormProvider {...methods}>
      <Presenter onSubmit={onSubmit} {...props} />
    </FormProvider>
  );
};
