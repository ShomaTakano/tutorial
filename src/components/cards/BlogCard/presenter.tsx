// import layer
import { FC } from 'react';

import { routes } from 'constants/routes';
import { DataProps as ImageProps } from 'components/images/Image/presenter';
import { Image } from 'components/images/Image';

import {
  blogContainer,
  imgContainer,
  Category,
  dateStyle,
  blogTitle,
  hoverStyle,
} from './style.css';
import React from 'react';
import { Flex } from '@chakra-ui/react';

// type layer
export type DataProps = {
  title: string;
  date: string;
  category: string;
  url: string;
} & ImageProps;
export type PresenterProps = DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({
  url,
  title,
  date,
  category,
  image,
}) => {
  return (
    <>
      <a className={`${hoverStyle}`} href={url}>
        <div className={`${blogContainer}`}>
          <Image
            className={imgContainer}
            image={{
              src: ``,
              ...image,
              layout: `fill`,
              objectFit: `cover`,
              objectPosition: `center`,
              alt: `blog`,
            }}
          />
          <Flex
            justify={`space-between`}
            mt={{ base: `4.25vw`, lg: `${15 / 19.2}vw` }}
            mb={{ base: `2.13vw`, lg: `initial` }}
          >
            <p className={`${Category}`}>{category}</p>
            <p className={`${dateStyle}`}>{date}</p>
          </Flex>

          <p className={`${blogTitle}`}>{title}</p>
        </div>
      </a>
    </>
  );
};
