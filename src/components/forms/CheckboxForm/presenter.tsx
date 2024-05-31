// import layer
import { FC } from 'react';
import {
  Badge,
  FormControl,
  FormLabel,
  Checkbox,
  FormControlProps,
  FormErrorMessage,
  CheckboxGroup,
  Stack,
  Box,
  Wrap,
} from '@chakra-ui/react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { SubpageMessage } from 'components/texts/SubpageMessage';
import { form as sizes } from 'constants/styles/sizesAd';
import { text } from './style.css';

// type layer
export type StyleProps = FormControlProps;
export type DataProps = {
  checkboxes: string[];
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
  checkboxes,
  label,
  name,
  isRequired = false,
  errorMessage,
  registers,
  ...props
}) => {
  return (
    <FormControl w={`100%`} isInvalid={errorMessage !== undefined} {...props}>
      <Stack w={`100%`} direction={{ base: `column`, lg: `row` }}>
        <FormLabel w={{ ...sizes.label.w }} m={`initial`} htmlFor={name}>
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
          <Wrap
            direction={{ base: `row` }}
            fontSize={{ base: '0.875rem' }}
            fontWeight={700}
            w={{ lg: `90%`, xl: `70%` }}
            spacing={{ base: `4.26vw`, lg: `1.25rem` }}
          >
            <CheckboxGroup>
              {checkboxes.map((checkbox) => (
                <Box
                  key={checkbox}
                  // h={{ base: '2.75rem' }}
                >
                  <Checkbox
                    w={{
                      lg: `15rem`,
                      xl: `15rem`,
                    }}
                    value={checkbox}
                    {...registers}
                  >
                    <SubpageMessage>{checkbox}</SubpageMessage>
                  </Checkbox>
                </Box>
              ))}
            </CheckboxGroup>
          </Wrap>
          <FormErrorMessage>{errorMessage}</FormErrorMessage>
        </Box>
      </Stack>
    </FormControl>
  );
};
