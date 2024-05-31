// import layer
import { FC, useEffect } from 'react';
import { Box, Stack, StackProps } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';

import { TextForm } from 'components/forms/TextForm';
import { ShortTextForm } from 'components/forms/ShortTextForm';
import { CheckboxForm } from 'components/forms/CheckboxForm';
import { TextareaForm } from 'components/forms/TextareaForm';
import { SelectForm } from 'components/forms/SelectForm';
import { contactKindItem, ContactSchema } from 'features/contact/schema';
import { selectList } from 'constants/parameters/contact';

import { column } from './style.css';

// type layer
export type StyleProps = StackProps;
export type DataProps = Record<string, unknown>;
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<ContactSchema>();

  const postalCode = watch('postal_code', '');

  useEffect(() => {
    const re = /^[0-9]{3}-?[0-9]{4}$/i;
    if (postalCode && re.test(postalCode)) {
      fetch(`https://api.zipaddress.net/?zipcode=${postalCode}`, {
        mode: 'cors',
      })
        .then((result) => {
          return result.json();
        })
        .then((result) => {
          const address = (result?.data?.fullAddress as string) ?? '';
          const region = selectList.find((item) => address.startsWith(item));
          const reg = new RegExp(`^${region}`);
          const others = address.replace(reg, '');
          region && setValue('address1', region ?? '---');
          others && setValue('address2', others);
          // setValue('address1', result?.data?.fullAddress ?? '');
        });
    }
  }, [postalCode]);

  return (
    <Stack spacing={{ base: `4.26vw`, lg: `1.8rem`, xl: `2.25rem` }} {...props}>
      <Box>
        <CheckboxForm
          checkboxes={contactKindItem}
          label={`お問い合わせ項目`}
          name={`kind`}
          isRequired
          registers={register(`kind`)}
          // eslint-disable-next-line
          //@ts-ignore
          errorMessage={errors.kind?.message}
        />
      </Box>
      <Box>
        <TextForm
          label={`お名前`}
          name={`name`}
          type={`text`}
          isRequired
          registers={register(`name`)}
          errorMessage={errors.name?.message}
          // placeholder={`入力してください`}
        />
      </Box>
      <Box>
        <TextForm
          label={`会社名`}
          name={`company`}
          type={`text`}
          registers={register(`company`)}
          errorMessage={errors.company?.message}
          // placeholder={`入力してください`}
        />
      </Box>
      <Box>
        <ShortTextForm
          label={`郵便番号`}
          name={`postal_code`}
          type={`text`}
          registers={register(`postal_code`)}
          errorMessage={errors.postal_code?.message}
          // placeholder={`入力してください`}
          message={`（例：955-0001）半角入力`}
        />
      </Box>
      <Box>
        <SelectForm
          label={`住所`}
          name={`address1`}
          selectList={selectList}
          registers={register(`address1`)}
          errorMessage={errors.address1?.message}
        />
        {/*\
        <TextForm
          label={`住所`}
          name={`address1`}
          type={`text`}
          isRequired
          registers={register(`address1`)}
          errorMessage={errors.address1?.message}
          // placeholder={`入力してください`}
        />
          */}
      </Box>
      <Box>
        <TextForm
          label={``}
          name={`address2`}
          type={`text`}
          registers={register(`address2`)}
          errorMessage={errors.address2?.message}
        />
      </Box>
      <Box>
        <ShortTextForm
          label={`電話`}
          name={`phone`}
          type={`text`}
          isRequired
          message={`（例：0256-123-4567）半角入力`}
          registers={register(`phone`)}
          errorMessage={errors.phone?.message}
          // placeholder={`入力してください`}
        />
      </Box>
      <Box>
        <TextareaForm
          label={`お問い合せ内容`}
          name={`text`}
          registers={register(`message`)}
          errorMessage={errors.message?.message}
          // placeholder={`入力してください`}
        />
      </Box>
      <Box>
        <TextForm
          label={`E-mail`}
          name={`email`}
          type={`text`}
          isRequired
          registers={register(`email`)}
          errorMessage={errors.email?.message}
          // placeholder={`入力してください`}
        />
      </Box>
      <Box>
        <TextForm
          label={`E-mail(確認)`}
          name={`email-confirmation`}
          type={`text`}
          isRequired
          registers={register(`email_confirmation`)}
          errorMessage={errors.email_confirmation?.message}
          // placeholder={`入力してください`}
        />
      </Box>
    </Stack>
  );
};
