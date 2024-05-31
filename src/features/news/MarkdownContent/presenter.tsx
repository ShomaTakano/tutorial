// import layer
import { FC } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';
import { css } from '@emotion/react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

import { colors } from 'constants/styles/colors';
import { MEDIA_ROOT_URL } from 'constants/parameters';
import { messages as fontSize } from 'constants/styles/fontSizeAd';
import { mq } from 'constants/styles/breakpoints';

// import 'github-markdown-css/github-markdown-light.css';

// type layer
export type StyleProps = BoxProps;
export type DataProps = { input: string };
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({ input, ...props }) => {
  return (
    <Box
      color={colors.textBlack}
      // fontSize={fontSize.branding}
      fontSize={{ base: `4.26vw`, lg: `${16 / 19.2}vw` }}
      // whiteSpace={{ base: `pre-wrap` }}
      lineHeight={{ base: `1.75em`, md: `1.2em`, lg: `2em` }}
      fontFamily={`'Noto Sans JP', sans-serif;`}
      letterSpacing={`0.1em`}
      fontWeight={500}
      pt={`3vw`}
      className={`markdown-body`}
      css={styles}
      {...props}
    >
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkGfm]}
        // transformImageUri={(src) => `${MEDIA_ROOT_URL}${src}`}
        transformImageUri={(src) =>
          src.startsWith('https') || src.startsWith('http')
            ? src
            : `${MEDIA_ROOT_URL}${src}`
        }
        children={input} // eslint-disable-line
      />
    </Box>
  );
};

export const styles = css`
  font-size: 4.26vw;
  ${mq[2]} {
    font-size: ${16 / 19.2}vw;
    /* font-size: 1.6rem; */
  }
  /* white-space: pre-wrap; */
  hr {
    background-color: #000;
    height: 1px;
  }

  h2 {
    margin-top: 8.52vw;
    margin-bottom: 8.52vw;
    // border-bottom: 1px solid #000;
    // padding-bottom: 0.8em;

    ${mq[2]} {
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
  }

  img {
    margin-top: 12vw;
    margin-bottom: 12vw;

    ${mq[2]} {
      margin-top: 4rem;
      margin-bottom: 4rem;
    }
  }

  figure {
    margin-top: 12vw;
    margin-bottom: 12vw;

    ${mq[2]} {
      margin-top: 4rem;
      margin-bottom: 4rem;
    }
  }

  figure > img {
    margin: 0rem;
  }

  figure > figcaption {
    font-size: 3.07vw;
    font-weight: 400;
    margin-top: 1.25em;
    line-height: 1.5em;

    ${mq[2]} {
      font-size: 0.536rem;
    }

    ${mq[3]} {
      font-size: 0.8rem;
    }
  }

  .underline {
    width: fit-content;
    border-bottom: 1.5px solid #000;
    padding-bottom: 0.25em;
  }

  .bgc--gray {
    background-color: #eaeef1;
  }

  .info-box {
    padding: 5.33vw 8vw;
    border-radius: 8px;
    ${mq[2]} {
      padding: 1.25rem 1.875rem;
    }
  }
  .info-box > ul {
    padding-left: 0rem;
  }

  .radius-box {
    margin: 20px 0 40px;
    padding: 30px;
    border: 1px solid #aa9765;
    border-radius: 8px;
  }
  .radius-box .ttl--fill {
    margin-bottom: 24px;
    /* font-size: 1.7rem; */
  }
  .wp-caption {
    width: auto !important;
    padding: 0;
    background: none;
  }
  .wp-caption img {
    vertical-align: middle;
  }
  .wp-caption p {
    margin-top: 10px;
    /* font-size: 1.3rem; */
    color: inherit;
    text-align: left;
  }
  a {
    text-decoration: underline;
  }
  overflow-wrap: break-word;
  margin-bottom: 70px;
  .ttl--underline span {
    padding-bottom: 6px;
  }
  .ttl--underline span::before {
    height: 2px;
  }
  .ttl--fill {
    padding: 10px 20px;
    /* padding: 5px 20px; */
    border-radius: 4px;
    text-align: center;
    /* background: #ccc; */
  }
  .text__left {
    /* background: #ccc; */
  }
  .info-box {
    margin: 20px 0 40px;
    padding: 20px 30px;
    border-radius: 8px;
  }
  .before-after {
    margin: 20px 0 40px;
    padding: 30px;
    border: 1px solid #000;
    border-radius: 8px;
  }
  .before-after .ttl--fill {
    margin-bottom: 20px;
    /* font-size: 1.5rem; */
    /* font-family: 'Lato', '游ゴシック Medium', 'Yu Gothic Medium', '游ゴシック体', */
    /*   'Yu Gothic', 'YuGothic', 'ヒラギノ角ゴ ProN W3', */
    /*   'Hiragino Kaku Gothic ProN', 'メイリオ', Meiryo, verdana, sans-serif; */
    color: #ffffff;
    letter-spacing: 0.2em;
  }
  .before-after .before .ttl--fill,
  .before-after .before li:before {
    background-color: #697074;
  }
  .before-after .after {
    position: relative;
    margin-top: 60px;
    color: #aa9765;
  }
  .before-after .after::before {
    display: block;
    content: '';
    position: absolute;
    top: -40px;
    right: 0;
    left: 0;
    width: 26px;
    height: 18px;
    margin: 0 auto;
    border: 18px solid #aa9765;
    border-bottom: 0;
    border-right: 13px solid transparent;
    border-left: 13px solid transparent;
    z-index: 2;
  }
  .before-after .after .ttl--fill,
  .before-after .after li:before {
    background-color: #aa9765;
  }
  .before-after .before li {
    /* font-size: 1.4rem; */
    color: #697074;
  }
  .before-after .after li {
    /* font-size: 1.5rem; */
  }
  .before-after li {
    font-weight: bold;
  }
  .before-after ol {
    padding-left: 0rem;
  }
  /* h2, */
  h3,
  h4,
  h5 {
    margin: 2% 0;
    /* padding: 0; */
    border: none;
    background: none;
  }
  h2 {
    font-size: 1.5rem;
    /* font-size: 2.8rem; */
    line-height: 1.25;
    letter-spacing: 0.1em;
    /* text-align: center; */
    ${mq[2]} {
      font-size: ${28 / 19.2}vw;
    }
  }
  .category--branding-case h2 {
    font-size: 1.75rem;
    /* font-size: 2.5rem; */
    line-height: 1.88;
    letter-spacing: 0.08em;
  }
  h3 {
    font-size: 1.25rem;
    /* font-size: 2.2rem; */
    line-height: 1.5;
    letter-spacing: 0.1em;
    ${mq[2]} {
      font-size: ${24 / 19.2}vw;
    }
  }
  h4 {
    margin-top: 4em;
    margin-bottom: 1em;
    font-size: 1.25rem;
  }
  p {
    margin: 3% 0 5%;
    font-size: 14px;
    white-space: pre-wrap;
    ${mq[2]} {
      font-size: ${16 / 19.2}vw;
    }
  }
  ul,
  ol {
    margin-left: 0;
  }
  ul,
  ol,
  li {
    list-style: none;
  }
  ul li {
    display: inline-block;
    /* font-size: 1.6rem; */
  }
  ul li::before {
    content: '●';
    margin-right: 5px;
    font-size: 50%;
    color: #000;
    /* color: #00c8e6; */
  }
  ol {
    counter-reset: number;
  }
  ol li {
    position: relative;
    padding-left: 35px;
  }
  ol li:not(:last-child) {
    margin-bottom: 15px;
  }
  ol li::before {
    display: block;
    counter-increment: number;
    content: counter(number);
    position: absolute;
    top: 0;
    left: 0;
    width: 25px;
    height: 25px;
    line-height: 25px;
    border-radius: 50%;
    font-size: 1.3rem;
    font-weight: bold;
    letter-spacing: 0;
    text-align: center;
    color: #ffffff;
    background: #697074;
  }
  img {
    margin-top: 8%;
  }
  h5::before {
    display: none;
  }
  *:first-child {
    margin-top: 0;
  }
  *:last-child {
    margin-bottom: 0;
  }

  /******************************************************************
 * Color
******************************************************************/
  /* .fc--blue { */
  /*   color: #00c8e6 !important; */
  /* } */
  /* .bgc--blue { */
  /*   background-color: #00c8e6 !important; */
  /* } */
  .fc-cyan-blue-azure {
    color: #3c96be;
  }
  .bgc-cyan-blue-azure {
    background-color: #3c96be;
  }
  .fc--yellow {
    color: #ffff00 !important;
  }
  .bgc--yellow {
    background-color: #ffff00 !important;
  }
  .fc--orange {
    color: #ff931e !important;
  }
  .bgc--orange {
    background-color: #ff931e !important;
  }
  .fc--green {
    color: #6fba2c !important;
  }
  .bgc--green {
    background-color: #6fba2c !important;
  }
  .fc--navy {
    color: #0a3358 !important;
  }
  .bgc--navy {
    background-color: #0a3358 !important;
  }
  .bgc--branding {
    background-color: #b8d200;
  }
  .fc--branding {
    color: #b8d200;
  }
  .bgc--strengths-finder {
    background-color: #ef858c;
  }
  .fc--strengths-finder {
    color: #ef858c;
  }
  .bgc--team-building {
    background-color: #d6c560;
  }
  .fc--team-building {
    color: #d6c560;
  }
  .bgc--red {
    background-color: #e0454d;
  }
  .fc--red {
    color: #e0454d;
  }
  .fc--light-taupe {
    color: #aa9765 !important;
  }
  .bgc--light-taupe {
    background-color: #aa9765 !important;
  }
  .fc--black {
    color: #231815 !important;
  }
  .bgc--black {
    background-color: #231815 !important;
  }
  .fc--gray {
    color: #eaeef1 !important;
  }
  .bgc--gray {
    background-color: #eaeef1 !important;
  }
  .fc--dark-gray {
    color: #697074 !important;
  }
  .bgc--dark-gray {
    background-color: #697074 !important;
  }
  .fc--white {
    color: #fff !important;
  }
  .bgc--white {
    background-color: #fff !important;
  }

  .voice-box {
    position: relative;
    margin: 70px 0;
  }
  .voice-box > div:not(.inner) {
    position: relative;
    height: 1px;
    background: #000;
  }
  .voice-box > div:not(.inner)::before,
  .voice-box > div:not(.inner)::after {
    display: block;
    content: '';
    position: absolute;
    width: 1px;
    height: 12px;
    background: #000;
  }
  .voice-box > div:not(.inner)::before {
    left: 0;
  }
  .voice-box > div:not(.inner)::after {
    right: 0;
  }
  .voice-box > div:nth-child(1)::before,
  .voice-box > div:nth-child(1)::after {
    top: 0;
  }
  .voice-box > div:nth-child(3)::before,
  .voice-box > div:nth-child(3)::after {
    bottom: 0;
  }
  .voice-box .inner {
    display: flex;
    align-items: center;
    padding: 40px 30px;
  }
  .voice-box .content-box {
    flex: 1;
    padding-right: 30px;
  }
  .voice-box .content-box .a--title {
    font-size: 1.2rem;
    /* font-size: 1.7rem; */
    font-weight: bold;
    line-height: 1;
    letter-spacing: 0.08em;
  }
  .voice-box .content-box .a--description {
    margin: 20px 0;
    /* font-size: 1.5rem; */
    font-weight: bold;
    letter-spacing: 0.03em;
  }
  .voice-box .content-box .from {
    font-size: 0.8rem;
    line-height: 1;
    letter-spacing: 0.03em;
    font-weight: 400;
  }
  .voice-box .a--image {
    width: 125px;
  }
  .brand-info {
    font-size: 1.5rem;
    line-height: 2;
    margin-top: 70px;
  }
  .brand-info small {
    display: inline-block;
    margin-top: 15px;
    font-size: 1.3rem;
  }
`;
