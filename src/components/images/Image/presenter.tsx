// import layer
import { FC } from 'react';
import NextImage from 'next/image';
import type { ImageProps } from 'next/image';

import { container } from './style.css';
// type layer
export type StyleProps = { className?: string };
export type DataProps = { image: ImageProps };
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({ image, className }) => {
  return (
    <div className={`${container} ${className ?? ``}`}>
      <NextImage width={`100%`} height={`100%`} loading={`lazy`} {...image} />
    </div>
  );
};
