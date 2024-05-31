// import layer
import { FC } from 'react';
import { Box, keyframes } from '@chakra-ui/react';

import { JosefinText } from 'components/texts/JosefinText';

import { textStyle } from './style.css';

// type layer
export type StyleProps = { className?: string };
export type DataProps = Record<string, unknown>;
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({ className }) => {
  const keyframeText1 = keyframes`
    0% {
      transform: translateX(0%);
       -webkit-transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
       -webkit-transform: translateX(-100%);
  }`;
  const animationText1 = `${keyframeText1} infinite 40s linear`;
  const keyframeText2 = keyframes`
    0% {
      transform: translateX(100%);
       -webkit-transform: translateX(100%);
    }
    100% {
      transform: translateX(0%);
       -webkit-transform: translateX(0%);
  }`;
  const animationText2 = `${keyframeText2} infinite 20s 20s linear`;

  return (
    <Box
      className={className}
      overflow={`hidden`}
      position={`absolute`}
      w={{ base: `100%`, lg: `${1420 / 19.2}vw` }}
      left={`50%`}
      transform={`translate(-50%, -50%)`}
      zIndex={2}
    >
      <Box
        h={{ base: `${80 / 3.75}vw`, lg: `initial` }}
        // h={{ base: `80px`, lg: `initial` }}
        position={`relative`}
        id={`catch`}
      >
        <Box
          position={{ base: `absolute`, lg: `initial` }}
          overflow={`hidden`}
          w={{ base: `100%`, lg: `100%` }}
          h={{ base: `${80 / 3.75}vw`, lg: `initial` }}
          whiteSpace={`nowrap`}
          opacity={`0.5`}
        >
          <div
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-target="#catch"
            data-scroll-speed="12"
            data-scroll-position="left"
          >
            <Box
              display={{ base: `inline-block`, lg: `inline` }}
              animation={{ base: animationText1, lg: `initial` }}
            >
              <JosefinText
                className={`${textStyle}`}
              >{`RAKUWEB CORPORATION`}</JosefinText>
            </Box>
            <Box
              display={{ base: `inline-block`, lg: `none` }}
              animation={{ base: animationText2, lg: `initial` }}
            >
              <JosefinText
                className={`${textStyle}`}
              >{`RAKUWEB CORPORATION`}</JosefinText>
            </Box>
          </div>
        </Box>
      </Box>
    </Box>
  );
};
