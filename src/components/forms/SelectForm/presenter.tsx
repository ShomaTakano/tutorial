// import layer
import { FC } from 'react';
import {
  Badge,
  FormControl,
  FormLabel,
  Input,
  Select,
  FormControlProps,
  FormErrorMessage,
  Stack,
  Box,
} from '@chakra-ui/react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { SubpageMessage } from 'components/texts/SubpageMessage';
import { form as sizes } from 'constants/styles/sizesAd';
// import { form as fontSizes } from 'constants/styles/fontSize';
import { text } from './style.css';

// type layer
export type StyleProps = FormControlProps;
export type DataProps = {
  label: string;
  placeholder?: string;
  name: string;
  selectList: string[] | number[];
  isRequired?: boolean;
  errorMessage?: string;
  registers?: UseFormRegisterReturn;
};
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({
  label,
  placeholder,
  name,
  selectList,
  isRequired = false,
  errorMessage,
  registers,
  ...props
}) => {
  return (
    <FormControl isInvalid={errorMessage !== undefined} {...props}>
      <Stack align={{ lg: `center` }} direction={{ base: `column`, lg: `row` }}>
        {label ? (
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
        ) : (
          <FormLabel
            h={`0rem`}
            w={sizes.label.w}
            m={`initial`}
            htmlFor={name}
          />
        )}

        <Box w={{ lg: `12.5rem` }}>
          <Select
            w={{ lg: `10rem`, xl: `10.75rem` }}
            h={{ base: `8.52vw`, lg: `2rem`, xl: '2.75rem' }}
            bg={'white'}
            placeholder={placeholder}
            borderColor={`initial`}
            border={`solid 0.5px #251714`}
            borderRadius={`2.5px`}
            // fontSize={{ ...fontSizes.placeholder }}
            {...registers}
          >
            {selectList.map((val) => (
              <option value={val} key={val}>
                {val}
              </option>
            ))}
          </Select>
          <FormErrorMessage>{errorMessage}</FormErrorMessage>
        </Box>
      </Stack>
    </FormControl>
  );
};
