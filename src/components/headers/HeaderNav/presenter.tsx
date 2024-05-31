// import layer
import { FC } from 'react';
import { Stack, StackProps, Icon } from '@chakra-ui/react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

import { WhiteText } from 'components/texts/WhiteText';

import { routes, contact } from 'constants/routes';
import colors from 'lib/theme/foundations/colors';
import { InternalLink } from 'components/links/InternalLink';
import { ExternalLink } from 'components/links/ExternalLink';
import { Button } from 'components/buttons/Button';
import { Flex } from 'components/fundamentals/Flex';

import {
  navText,
  navList,
  container,
  buttonStyle,
  serviceList,
  navMenu,
  navMenu2,
  lineStyle,
} from './style.css';
import { InternalButtonLink } from 'components/links/InternalButtonLink';
import { contactUrl } from 'constants/routes';

// type layer
export type StyleProps = StackProps & { className?: string };
export type DataProps = { scrollY?: number };
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({ className = '', ...props }) => {
  const list = [
    { name: `ABOUT`, url: `/about` },
    { name: `SERVICES`, url: `/services/web-system` },
    { name: `NEWS`, url: `/news` },
    { name: `RECRUIT`, url: `/recruit` },
    { name: `BLOG`, url: `/blog` },
    { name: `CONTACT`, url: `/contact` },
  ];

  return (
    <Flex className={`${container} ${className}`}>
      <Flex className={`${serviceList}`}>
        {list.map((nav) =>
          nav.name == `SERVICES` ? (
            <div className={`${navText}`}>
              <WhiteText key={nav.name}>
                {nav.name}
                <Icon
                  as={MdKeyboardArrowDown}
                  width={`${(1.25 * 12) / 19.2}vw`}
                  height={`${(1.25 * 12) / 19.2}vw`}
                ></Icon>
              </WhiteText>
              <ul className={navList}>
                <li>
                  <InternalLink className={navMenu} href="/services/web-system">
                    <div className={lineStyle}> DEVEROPMENT</div>
                  </InternalLink>
                </li>
                <li>
                  <ExternalLink
                    className={navMenu2}
                    href="https://nottheuniversity.com/"
                  >
                    <div className={lineStyle}>COWORKING&CAFE</div>
                  </ExternalLink>
                </li>
              </ul>
            </div>
          ) : (
            <InternalLink
              className={`${navText}`}
              href={nav.url}
              key={nav.name}
            >
              <WhiteText>{nav.name}</WhiteText>
            </InternalLink>
          )
        )}
      </Flex>
    </Flex>
  );
};
{
  /*
          </InternalLink>
          <InternalLink className={`${navText}`} href={nav.url} key={nav.name}>
            */
}
