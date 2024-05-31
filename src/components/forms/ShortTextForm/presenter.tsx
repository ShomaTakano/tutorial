// import layer
import { FC } from 'react';
import {
  Badge,
  FormControl,
  FormLabel,
  Input,
  FormControlProps,
  FormErrorMessage,
  Stack,
  Box,
} from '@chakra-ui/react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { SubpageMessage } from 'components/texts/SubpageMessage';
import { form as sizes } from 'constants/styles/sizesAd';
import { text } from './style.css';

// type layer
export type StyleProps = FormControlProps;
export type DataProps = {
  label: string;
  placeholder?: string;
  name: string;
  type: string;
  isRequired?: boolean;
  errorMessage?: string;
  autoComplete?: string;
  registers?: UseFormRegisterReturn;
  message?: string;
};
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({
  label,
  placeholder,
  name,
  type,
  isRequired = false,
  errorMessage,
  autoComplete,
  registers,
  message,
  ...props
}) => {
  return (
    <FormControl isInvalid={errorMessage !== undefined} {...props}>
      <Stack align={{ lg: `center` }} direction={{ base: `column`, lg: `row` }}>
        <FormLabel w={sizes.label.w} m={`initial`} htmlFor={name}>
          <SubpageMessage className={text}>{label}</SubpageMessage>
          {isRequired && (
            <Badge
              background="none"
              color="red"
              py={['0.2rem']}
              px={['0.3rem']}
            >
              <SubpageMessage>{`※`}</SubpageMessage>
            </Badge>
          )}
        </FormLabel>

        <Stack
          direction={{ base: `column`, lg: `row` }}
          align={{ lg: `center` }}
        >
          <Input
            w={{ lg: `10rem`, xl: `10.75rem` }}
            type={type}
            h={{ base: `8.52vw`, lg: `2rem`, xl: '2.75rem' }}
            bg={'white'}
            borderColor={`initial`}
            border={`solid 0.5px #251714`}
            borderRadius={`2.5px`}
            placeholder={placeholder}
            // fontSize={{ ...fontSizes.placeholder }}
            // _placeholder={{ ...fontSizes.placeholder }}
            autoComplete={autoComplete}
            {...registers}
          />
          {message && <SubpageMessage>{message}</SubpageMessage>}
        </Stack>
        <FormErrorMessage>{errorMessage}</FormErrorMessage>
      </Stack>
    </FormControl>
  );
};
