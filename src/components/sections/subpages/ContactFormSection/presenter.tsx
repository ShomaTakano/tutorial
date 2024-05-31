// import layer
import { FC } from 'react';
import { Stack, Checkbox, Box } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';

import {
  SectionContainer7,
  SectionContainer7Props,
} from 'components/containers/SectionContainer7';
import { ContactForm } from 'components/forms/ContactForm';
import { ContactSchema } from 'features/contact/schema';

import {
  sections as spaces,
  messages as messageSpace,
} from 'constants/styles/spacesAd';
import { SubSectionContainer1000 } from 'components/containers/SubSectionContainer1000';
import { SubpageMessage } from 'components/texts/SubpageMessage';
import { Button } from 'components/buttons/Button';
import { useRecoilState } from 'recoil';
import { contactState } from 'features/contact/atoms';

import { container, linkStyle } from './style.css';
import { InternalLink } from 'components/links/InternalLink';
import { routes } from 'constants/routes';

// type layer
export type StyleProps = SectionContainer7Props;
export type DataProps = Record<string, unknown>;
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({ onSubmit, ...props }) => {
  const description = `弊社にご興味をお持ちいただきまして、ありがとうございます。お問い合わせ内容を確認した後、担当者からご連絡いたします。
お問い合わせの内容によってはお返事までにお時間かかる場合がございますので、予めご了承ください。`;
  const { reset } = useFormContext<ContactSchema>();
  const [{ isChecked, isSending }, setContact] = useRecoilState(contactState);
  const handleReset = () => {
    reset();
    setContact((old) => ({
      ...old,
      isChecked: false,
    }));
  };
  const handleIsChecked = () => {
    setContact((old) => ({
      ...old,
      isChecked: !old.isChecked,
    }));
  };

  return (
    <SectionContainer7
      className={`${container}`}
      my={spaces.subpages2.my}
      as={`section`}
      {...props}
    >
      <SubSectionContainer1000>
        <Stack
          spacing={{ ...messageSpace.top1.spacing }}
          onSubmit={onSubmit}
          as={`form`}
        >
          <Stack
            spacing={{ base: `5.867vw`, lg: `2.2rem`, xl: `2.75rem` }}
            as={`section`}
          >
            <SubpageMessage>{description}</SubpageMessage>
            <ContactForm />

            <Box>
              <Checkbox
                isChecked={isChecked}
                onChange={handleIsChecked}
                fontSize={{ base: '0.875rem' }}
                fontFamily={`'Noto Sans JP', sans-serif;`}
                color={`textGray2`}
              >
                <SubpageMessage>
                  個人情報の取扱いおよび
                  <InternalLink className={linkStyle} href={routes.privacy.url}>
                    プライバシーポリシー
                  </InternalLink>
                  に同意する
                </SubpageMessage>
              </Checkbox>
            </Box>
            <Stack
              spacing={{ base: `4.26vw`, lg: `1.5rem` }}
              direction={{ base: `row` }}
            >
              <Button
                w={{ base: `36vw`, lg: `10rem`, xl: `11rem` }}
                type={`submit`}
                isDisabled={isSending || !isChecked}
                isLoading={isSending}
              >{`送信する`}</Button>
              <Button
                onClick={handleReset}
                w={{ base: `36vw`, lg: `10rem`, xl: `11rem` }}
              >{`リセット`}</Button>
            </Stack>
          </Stack>
          {/*
          <PrivacyPolicySection />
          */}
        </Stack>
      </SubSectionContainer1000>
    </SectionContainer7>
  );
};
