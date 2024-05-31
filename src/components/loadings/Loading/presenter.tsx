// import layer
import { FC } from 'react';
import { Box, Flex, FlexProps } from '@chakra-ui/react';
import {
  container,
  grayAreaStyle,
  h2Style,
  messageWrapperStyle,
  messageStyle,
  minmessageStyle,
  minmessageWrapper,
  opacity,
} from './style.css';
import { JosefinText } from 'components/texts/JosefinText';
import { Text } from 'components/texts/Text';
import { LoadingCount } from '../LoadingCount';

import textStyles from 'lib/theme/textStyles';
import { calculateSizesBy2xl } from 'lib/theme/utils';
import { spacing } from 'lib/theme/foundations/spacing';

// type layer
export type StyleProps = FlexProps;
export type DataProps = Record<string, unknown>;
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  return (
    <Flex
      position={{ base: `relative` }}
      w={`100vw`}
      h={`100vh`}
      align={{ base: `flex-end` }}
      bgColor={`#000`}
      color={`white`}
      {...props}
    >
      {/* <div className={`${messageStyle}`}>
        Combine the web
        <br />
        Go beyond limits
        <br />
        Creates the world
        <p className={`${minmessageStyle}`}>
          Webを掛け合わせ、限界を超え、セカイを創る会社
        </p>
      </div> */}
      <Flex className={`${messageWrapperStyle}`}>
        <h2 className={`${h2Style}`}>
          <div className={`${messageStyle}`}>Combine the web</div>
        </h2>
        <h2 className={`${h2Style}`}>
          <div className={`${messageStyle}`}>Go beyond limits</div>
        </h2>
        <h2 className={`${h2Style}`}>
          <div className={`${messageStyle}`}>Creates the world</div>
        </h2>
        <div className={`${opacity}`}>
          <div className={`${minmessageWrapper}`}>
            <p className={`${minmessageStyle}`}>
              Webを掛け合わせ、限界を超え、セカイを創る会社
            </p>
          </div>
        </div>
      </Flex>
      <LoadingCount
        display={{ base: `none`, lg: `block` }}
        ml={{ base: `auto` }}
        mr={{ ...calculateSizesBy2xl(133 / 16), base: `4.26vw` }}
        mt={{ base: `auto` }}
        mb={{ ...calculateSizesBy2xl(44 / 16), base: `4.26vw` }}
        justifySelf={{ base: `flex-end` }}
      />
    </Flex>
  );
};
