// import layer
import { FC } from 'react';
import { Box as CBox, Flex as CFlex } from '@chakra-ui/react';

import { Text } from 'components/texts/Text';
import { WhiteText } from 'components/texts/WhiteText';
import { Image } from 'components/images/Image';
import { DataProps as ImageProps } from 'components/images/Image/presenter';
import { Flex } from 'components/fundamentals/Flex';
import { Box } from 'components/fundamentals/Box';

import {
  cardBottom,
  titleStyle,
  cardStyle,
  imageStyle,
  cardTop,
  categoryStyle,
  cardRightStyle,
  defaultImageStyle,
} from './style.css';

// type layer
export type StyleProps = Record<string, unknown>;
export type DataProps = {
  title: string;
  date: string;
  category: string;
  className?: string;
} & ImageProps;
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({
  title,
  date,
  category,
  image,
  className = '',
}) => {
  return (
    <Flex className={`${cardStyle} ${className}`}>
      <Box className={`${imageStyle}`}>
        {image.src ? (
          <Image
            className={imageStyle}
            image={{
              src: ``,
              ...image,
              layout: `fill`,
              objectFit: `cover`,
              objectPosition: `center`,
            }}
          />
        ) : (
          <CFlex
            align={`center`}
            justify={`center`}
            width={`100%`}
            height={`100%`}
          >
            <Image
              className={defaultImageStyle}
              image={{
                src: `/svg/logo.svg`,
                // width: 760,
                // height: 750,
                layout: `fill`,
              }}
            />
          </CFlex>
        )}
      </Box>

      <Flex className={`${cardRightStyle}`}>
        <Flex className={`${cardTop}`}>
          <Text className={`${categoryStyle}`}>{category}</Text>
          <WhiteText>{date}</WhiteText>
        </Flex>

        <div className={`${cardBottom}`}>
          <Text className={`${titleStyle}`}>{title}</Text>
        </div>
      </Flex>
    </Flex>
  );
};
