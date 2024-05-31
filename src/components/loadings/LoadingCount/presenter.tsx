// import layer
import { FC } from 'react';
import { Box, Flex, FlexProps, Stack } from '@chakra-ui/react';

import { JosefinText } from 'components/texts/JosefinText';

import { calculateSizesBy2xl } from 'lib/theme/utils';
import { loadingcount, loadingnow } from './style.css';

// type layer
export type StyleProps = FlexProps;
export type DataProps = Record<string, unknown>;
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  return (
    <Flex align={{ base: `flex-end` }} {...props}>
      <Stack w={{ ...calculateSizesBy2xl(522 / 16), base: `${142 / 3.75}vw` }}>
        <Box fontSize={`32px`}>
          <JosefinText className={`${loadingnow}`}>{`Now Loading`}</JosefinText>
        </Box>
        <Stack direction={{ base: `row` }}>
          <JosefinText className={`${loadingcount}`}>
            ..................
          </JosefinText>
          <JosefinText className={`${loadingcount}`}>
            <Box id={`loading`} as={`span`} />
            {`%`}
          </JosefinText>
        </Stack>
      </Stack>
    </Flex>
  );
};
