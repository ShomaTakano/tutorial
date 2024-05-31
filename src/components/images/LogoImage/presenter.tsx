// import layer
import { FC, ReactNode, ElementType } from 'react';

import { Image, ImageProps } from 'components/images/Image';

import { containerStyle, logoStyle } from './style.css';

// type layer
export type StyleProps = { className?: string; as?: ElementType };
export type DataProps = {
  image?: Omit<ImageProps, 'src' | 'width' | 'height'>;
};
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({ className = '', image }) => {
  return (
    <div className={`${containerStyle} ${className}`}>
      <Image
        className={`${logoStyle}`}
        image={{
          src: `/svg/logo.svg`,
          width: 760,
          height: 750,
          layout: `responsive`,
          ...image,
        }}
      />
    </div>
  );
};
