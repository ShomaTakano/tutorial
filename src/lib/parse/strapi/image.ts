import type { UploadFile } from 'types/gql-types';
import { MEDIA_ROOT_URL } from 'constants/parameters';

export type ImageType = {
  width?: string | number;
  height?: string | number;
  alt: string;
  src: string;
  srcSet: string;
};

export const parseImage = (image: UploadFile): ImageType => {
  const res = {
    width: image.width ?? undefined,
    height: image.height ?? undefined,
    alt: image.alternativeText ?? '',
    src: parseImageUrl(image.url ?? ``),
    srcSet: parseSrcSet(image.formats),
  };

  return res;
};

export const parseSrcSet = (formats: any): string =>
  formats
    ? `${formats.xsmall ? `${parseImageUrl(formats.xsmall.url)} 375w,` : ``}${
        formats.small ? `${parseImageUrl(formats.small.url)} 500w,` : ``
      }${formats.medium ? `${parseImageUrl(formats.medium.url)} 768w,` : ``}${
        formats.large ? `${parseImageUrl(formats.large.url)} 1000w` : ``
      }${formats.xlarge ? `${parseImageUrl(formats.xlarge.url)} 3000w` : ``}`
    : ``;

export const parseImageUrl = (path: string): string => toCMSPath(path);

export const toCMSPath = (path: string): string => `${MEDIA_ROOT_URL}${path}`;
