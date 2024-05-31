// import layer
import { FC } from 'react';
// import { useScrollYPosition } from 'react-use-scroll-position';

import { HeaderNav } from 'components/headers/HeaderNav';
import { InternalLink } from 'components/links/InternalLink';
import { HamburgerMenu } from 'components/headers/HamburgerMenu';
import { Flex } from 'components/fundamentals/Flex';
import { Box } from 'components/fundamentals/Box';
import { Image } from 'components/images/Image';

import { routes } from 'constants/routes';

import { container, logoStyle, logoWrapperStyle } from './style.css';

// type layer
export type StyleProps = Record<string, unknown>;
export type DataProps = { inView?: boolean; isTop?: boolean };
// export type DataProps = Record<string, unknown>;
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({ isTop, ...props }) => {
  return (
    <Flex className={`${container}`} as={`header`} {...props}>
      <Flex className={`${logoWrapperStyle}`}>
        <InternalLink href={routes.home.url}>
          <Box as={isTop ? `h1` : `div`}>
            <Image
              className={`${logoStyle}`}
              image={{
                src: `/svg/logo-text.svg`,
                width: 300,
                height: 73,
                layout: `responsive`,
              }}
            />
          </Box>
        </InternalLink>
      </Flex>

      <HeaderNav />
      <HamburgerMenu />
    </Flex>
  );
};
