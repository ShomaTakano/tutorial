// import layer
import { FC } from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';

import { colors } from 'constants/styles/colors';

// type layer
export type StyleProps = ButtonProps;
export type PresenterProps = StyleProps;

// presenter
export const Presenter: FC<PresenterProps> = ({ children, ...props }) => {
  const startColor = colors.bgBlack;
  const endColor = colors.bgBlack;
  // const startColor = `#52A0FD`;
  // const endColor = `#00e2fa`;
  const gradient = `linear-gradient(90deg, ${startColor} 0%, ${endColor} 100%)`;
  return (
    <Button
      fontSize={{
        base: `4.26vw`,
        lg: `${(1.3125 * 16) / 19.2}vw`,
      }}
      // fontSize={{ base: `4.26vw`, lg: `1.125rem`, xl: `1.3125rem` }}
      letterSpacing={`0.01em`}
      fontWeight={500}
      color={`white`}
      bg={gradient}
      borderRadius={{ base: `40px`, lg: `28px` }}
      borderWidth={`2px`}
      boxShadow={`0px 3px 10px #00000029`}
      px={{ base: `8.53vw`, lg: `${(1.5 * 16) / 12.8}vw` }}
      py={{
        base: `4.26vw`,
        lg: `${16 / 12.8}vw`,
      }}
      transition={`all 0.5s;`}
      _hover={{
        color: startColor,
        bg: `white`,
        border: `2px solid ${startColor}`,
      }}
      display={`inline-flex`}
      {...props}
    >
      {children}
    </Button>
  );
};
