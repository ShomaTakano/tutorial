// import layer
import { FC } from 'react';

import { Text } from 'components/texts/Text';
import { Image } from 'components/images/Image';
import { SectionCircle } from 'components/sections/SectionCircle';
import { Box } from 'components/fundamentals/Box';
import { Flex } from 'components/fundamentals/Flex';

import {
  containerStyle,
  imageStyle,
  listStyle,
  hoverStyle,
  bigText,
  smallText,
  image,
} from './style.css';
import { SectionContainer1510 } from 'components/containers/SectionContainer1510';
import { InternalLink } from 'components/links/InternalLink';
import { ExternalLink } from 'components/links/ExternalLink';

import serviceImage from 'public/images/services/services.png';
import { routes } from 'constants/routes';
import { storeValueIsStoreObject } from '@apollo/client/cache/inmemory/helpers';

// type layer
export type StyleProps = Record<string, unknown>;
export type DataProps = Record<string, unknown>;
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  const list = [
    {
      image: {
        src: `/images/services/development.png`,
        width: 480,
        height: 585,
      },
      name: `ウェブ受注開発`,
      category: `DEVELOPMENT`,
      link: `./services/web-system`,
      isInternal: `true`,
    },
    {
      image: {
        src: `/images/services/coworking-cafe.png`,
        width: 480,
        height: 585,
      },
      name: `コワーキング運営`,
      category: `COWORKING&CAFE`,
      link: `https://nottheuniversity.com/`,
      isInternal: `false`,
    },
    {
      image: {
        src: `/images/services/sns-marketing.png`,
        width: 480,
        height: 585,
      },
      name: `SNS運用`,
      category: `SNS Maketing`,
      link: `./services/sns-management`,
      isInternal: ``,
    },
  ];

  return (
    //一時的に使うやつ
    <SectionContainer1510 className={containerStyle}>
      <Flex id={`services`} className={listStyle}>
        {list.map((service) => {
          if (service.isInternal == `true`) {
            return (
              <h3 className={imageStyle} key={service.name}>
                <div className={image}>
                  <InternalLink href={service.link}>
                    <Image
                      image={{
                        ...service.image,
                        alt: service.name,
                        layout: `responsive`,
                      }}
                      className={hoverStyle}
                    />
                  </InternalLink>
                  <p className={bigText}>{service.category}</p>
                  <p className={smallText}>{service.name}</p>
                </div>
              </h3>
            );
          }
          if (service.isInternal == `false`) {
            return (
              <h3 className={imageStyle} key={service.name}>
                <div className={image}>
                  <ExternalLink href={service.link}>
                    <Image
                      image={{
                        ...service.image,
                        alt: service.name,
                        layout: `responsive`,
                      }}
                      className={hoverStyle}
                    />
                  </ExternalLink>
                  <p className={bigText}>{service.category}</p>
                  <p className={smallText}>{service.name}</p>
                </div>
              </h3>
            );
          } else {
            return (
              <h3 className={imageStyle} key={service.name}>
                <div className={image}>
                  <Image
                    image={{
                      ...service.image,
                      alt: service.name,
                      layout: `responsive`,
                    }}
                  />
                  <p className={bigText}>{service.category}</p>
                  <p className={smallText}>{service.name}</p>
                </div>
              </h3>
            );
          }
        })}
      </Flex>
    </SectionContainer1510>

    //  <SectionContainer1510 className={containerStyle}>
    //     <Flex id={`services`} className={listStyle}>
    //       {list.map((service) => (
    //         <h3 className={imageStyle} key={service.name}>
    //           <div className={image}>
    //             <a href={service.link}>
    //                <Image
    //                 image={{
    //                   ...service.image,
    //                   alt: service.name,
    //                   layout: `responsive`,
    //                 }}
    //                 className={hoverStyle}
    //               />
    //             </a>
    //             <p className={bigText}>{service.category}</p>
    //             <p className={smallText}>{service.name}</p>
    //           </div>
    //         </h3>
    //       ))}
    //     </Flex>
    //   </SectionContainer1510>
  );
};
