// import layer
import { FC } from 'react';
import {
  Badge,
  FormControl,
  FormLabel,
  Textarea,
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
  isRequired?: boolean;
  errorMessage?: string;
  autoComplete?: string;
  registers?: UseFormRegisterReturn;
};
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({
  label,
  placeholder,
  name,
  isRequired = false,
  errorMessage,
  autoComplete,
  registers,
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

        <Box w={{ ...sizes.input.w }}>
          <Textarea
            h={{ base: '6rem' }}
            bg={'white'}
            borderColor={`initial`}
            border={`solid 0.5px #251714`}
            borderRadius={`2.5px`}
            placeholder={placeholder}
            _placeholder={{
              fontSize: { base: `2.13vw`, lg: `0.75rem`, xl: '0.875rem' },
            }}
            autoComplete={autoComplete}
            {...registers}
          />
          <FormErrorMessage>{errorMessage}</FormErrorMessage>
        </Box>
      </Stack>
    </FormControl>
  );
};
