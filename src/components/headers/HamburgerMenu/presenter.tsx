// import layer
import { FC, useRef } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import {
  Box,
  BoxProps,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Stack,
  Icon,
} from '@chakra-ui/react';
import { MdKeyboardArrowRight } from 'react-icons/md';

import { Span } from 'components/Span';
import { Text } from 'components/texts/Text';
import { routes, contact } from 'constants/routes';
import colors from 'lib/theme/foundations/colors';
import { InternalLink } from 'components/links/InternalLink';
import { ExternalLink } from 'components/links/ExternalLink';
import { contactUrl } from 'constants/routes';

import { navText } from './style.css';

// type layer
export type StyleProps = BoxProps;
export type DataProps = { scrollY?: number };
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({ scrollY, ...props }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  const list = [
    { name: `ABOUT`, url: `/about` },
    { name: `DEVEROPMENT`, url: `/services/web-system` },
    { name: `COWORKING&CAFE`, url: `https://nottheuniversity.com/` },
    { name: `NEWS`, url: `/news` },
    { name: `RECRUIT`, url: `/recruit` },
    { name: `BLOG`, url: `/blog` },
    { name: `CONTACT`, url: `/contact` },
  ];
  // const { scroll } = useLocomotiveScroll();
  // const handleClick = (id: string) => {
  //   const target = document.querySelector(`#${id}`);
  //   target && scroll.scrollTo(target);
  // };
  // const list = [
  //   routes.home,
  //   routes.about,
  //   routes.services,
  //   routes.overview,
  //   routes.news,
  //   contact,
  // ];

  return (
    <Box display={{ lg: `none` }} {...props}>
      <Box
        position={`relative`}
        cursor={`pointer`}
        width={{ base: `6.67vw`, lg: `${25 / 10.24}vw` }}
        height={{ base: `5.87vw`, lg: `${22 / 10.24}vw` }}
        ref={btnRef}
        onClick={onOpen}
        sx={{
          '&>span': {
            display: `inline-block`,
            transition: `all .4s`,
            position: `absolute`,
            // left: `14px`,
            height: `3px`,
            borderRadius: `2px`,
            width: isOpen ? `100%` : `100%`,
            bgColor:
              scrollY > 0
                ? colors.default
                : // colors.default
                  `#ffffff`,
            // `#fff`,
          },
        }}
      >
        <Span
          className={isOpen ? 'active' : ''}
          top={isOpen ? { base: `1.07vw`, lg: '4px' } : `0px`}
          transform={
            isOpen
              ? {
                  base: `translateY(1.6vw) rotate(-45deg)`,
                  lg: `translateY(6px) rotate(-45deg)`,
                }
              : `initial`
          }
          width={isOpen ? `30%` : `100%`}
          display={`inline-block`}
        />
        <Span
          className={isOpen ? 'active' : ''}
          top={{ base: `2.4vw`, lg: `9px` }}
          opacity={isOpen ? 0 : 1}
          display={`inline-block`}
        />
        <Span
          className={isOpen ? 'active' : ''}
          top={
            isOpen
              ? { base: `4.27vw`, lg: '16px' }
              : { base: `4.53vw`, lg: `17px` }
          }
          // left={isOpen ? '18px' : 'initial'}
          transform={
            isOpen
              ? {
                  base: `translateY(-1.6vw) rotate(45deg)`,
                  lg: `translateY(-6px) rotate(45deg)`,
                }
              : `initial`
          }
          width={isOpen ? `30%` : `45%`}
          display={`inline-block`}
        />
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={`sm`}
      >
        <DrawerOverlay />
        <DrawerContent>
          <Box
            m={{ base: `4.26vw`, lg: `1.5rem` }}
            position={`relative`}
            cursor={`pointer`}
            width={{ base: `6.67vw`, lg: `25px` }}
            height={{ base: `5.87vw`, lg: `22px` }}
            ref={btnRef}
            zIndex={10}
            onClick={onClose}
            sx={{
              '&>span': {
                display: `inline-block`,
                transition: `all .4s`,
                position: `absolute`,
                // left: `14px`,
                height: `3px`,
                borderRadius: `2px`,
                width: isOpen ? `100%` : `100%`,
                bgColor: `#000`,
              },
            }}
          >
            <Span
              className={isOpen ? 'active' : ''}
              top={isOpen ? { base: `1.07vw`, lg: '4px' } : `0px`}
              transform={
                isOpen
                  ? {
                      base: `translateY(1.6vw) rotate(-45deg)`,
                      lg: `translateY(6px) rotate(-45deg)`,
                    }
                  : `initial`
              }
              width={isOpen ? `30%` : `100%`}
              display={`inline-block`}
            />
            <Span
              className={isOpen ? 'active' : ''}
              top={{ base: `2.4vw`, lg: `9px` }}
              opacity={isOpen ? 0 : 1}
              display={`inline-block`}
            />
            <Span
              className={isOpen ? 'active' : ''}
              top={
                isOpen
                  ? { base: `4.27vw`, lg: '16px' }
                  : { base: `4.53vw`, lg: `17px` }
              }
              transform={
                isOpen
                  ? {
                      base: `translateY(-1.6vw) rotate(45deg)`,
                      lg: `translateY(-6px) rotate(45deg)`,
                    }
                  : `initial`
              }
              width={isOpen ? `30%` : `45%`}
              display={`inline-block`}
            />
          </Box>

          <DrawerBody
            px={{ base: `4.26vw`, lg: `1.5rem` }}
            mt={{
              base: `4.26vw`,
              lg: `0rem`,
              // lg: `1rem`,
              '2xl': `1.5rem`,
            }}
          >
            <Stack
              spacing={{
                base: `${24 / 3.75}vw`,
                // base: `8.52vw`,
                lg: `1rem`,
                xl: `1.5rem`,
              }}
              {...props}
            >
              {list.map((nav) =>
                nav.name == 'CONTACT' ? (
                  <Box
                    key={nav.name}
                    transition={`all 0.3s`}
                    _hover={{ filter: `opacity(50%)` }}
                  >
                    <InternalLink href={nav.url}>
                      <Stack
                        direction={`row`}
                        align={`center`}
                        onClick={() => onClose()}
                      >
                        <Text className={`${navText}`}>{nav.name}</Text>
                        <Icon
                          as={MdKeyboardArrowRight}
                          transition={'all .25s ease-in-out'}
                          // w={6}
                          // h={6}
                          width={`${(1.25 * 16) / 3.75}vw`}
                          height={`${(1.25 * 16) / 3.75}vw`}
                        />
                      </Stack>
                    </InternalLink>
                  </Box>
                ) : (
                  <Box
                    key={nav.name}
                    transition={`all 0.3s`}
                    _hover={{ filter: `opacity(50%)` }}
                    // onClick={() => handleClick(nav.url)}
                  >
                    <InternalLink href={nav.url}>
                      <Stack
                        direction={`row`}
                        align={`center`}
                        onClick={() => onClose()}
                      >
                        <Text className={`${navText}`}>{nav.name}</Text>
                        <Icon
                          as={MdKeyboardArrowRight}
                          transition={'all .25s ease-in-out'}
                          // w={6}
                          // h={6}
                          width={`${(1.25 * 16) / 3.75}vw`}
                          height={`${(1.25 * 16) / 3.75}vw`}
                        />
                      </Stack>
                    </InternalLink>
                  </Box>
                )
              )}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
