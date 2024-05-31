// import layer
import { FC } from 'react';
import { Box, BoxProps, Stack } from '@chakra-ui/react';

import { routes } from 'constants/routes';
import { Text } from 'components/texts/Text';
import { InternalLink } from 'components/links/InternalLink';

import { colors } from 'constants/styles/colors';
import { whiteText, logoSize } from './style.css';

// type layer
export type StyleProps = BoxProps;
export type PresenterProps = StyleProps;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  const bgColor = `#000`;
  return (
    <Box
      // mt={{ lg: `12rem` }}
      bg={bgColor}
      // bg={`backgroundGray`}
      // py={{ base: `3.75rem` }}
      pt={{ base: `8.52vw`, lg: `6rem` }}
      pb={{ base: `0.5rem`, lg: `0.5rem` }}
      as={`footer`}
      {...props}
    >
      <Stack
        spacing={{ base: `3.125rem`, lg: `5rem` }}
        // spacing={{ base: `3.125rem`, lg: `2.25rem` }}
        align={`center`}
        justify={`center`}
      >
        {/*
        <Stack
          w={`fit-content`}
          direction={{ base: `column`, lg: `row` }}
          spacing={{ base: `1.5rem`, lg: `0.5rem` }}
          mx={`auto`}
        >
          <ExternalLink href={TOMORUI_URL}>
            <Box
              w={{ base: `20rem` }}
              h={{ base: `3.9375rem` }}
              overflow={`hidden`}
            >
              <Image objectFit={`cover`} src={TomoruiImage} alt={``} />
            </Box>
          </ExternalLink>
          <ExternalLink href={TOMORUI_LIFE_URL}>
            <Box
              w={{ base: `20rem` }}
              h={{ base: `3.9375rem` }}
              overflow={`hidden`}
            >
              <Image objectFit={`cover`} src={TomoruiLifeImage} alt={``} />
            </Box>
          </ExternalLink>
          <ExternalLink href={NIIGATA_KURASHI_URL}>
            <Box
              w={{ base: `20rem` }}
              h={{ base: `3.9375rem` }}
              overflow={`hidden`}
            >
              <Image objectFit={`cover`} src={NiigataKurashiImage} alt={``} />
            </Box>
          </ExternalLink>
        </Stack>
        <Stack
          display={{ base: `none`, lg: `initial` }}
          direction={{ base: `column`, lg: `row` }}
          spacing={{ base: `1.625rem`, lg: `2.625rem` }}
          mx={`auto`}
          justify={`center`}
          align={{ base: `center`, lg: `initial` }}
        >
          {FOOTER_NAV_ITEMS.map((nav) => (
            <InternalLink key={nav.label} href={nav.href}>
              <Text textStyle={`text17`} fontWeight={`bold`} color={`white`}>
                {nav.label}
              </Text>
            </InternalLink>
          ))}
        </Stack>
      */}
        <Box
          w={{ base: `50vw`, lg: `12.8125rem` }}
          textAlign={`center`}
          mx={`auto`}
        >
          <InternalLink href={routes.home.url}>
            <Text className={`${whiteText} ${logoSize}`}>RAKUWEB</Text>
          </InternalLink>
        </Box>
        <Text
          className={`${whiteText}`}
          // textStyle={`text17`}
          // fontWeight={`bold`}
          // color={`white`}
          // mx={`auto`}
          // textAlign={`center`}
        >
          {`Produced By RAKUWEB inc`}
        </Text>
      </Stack>
    </Box>
  );
};
