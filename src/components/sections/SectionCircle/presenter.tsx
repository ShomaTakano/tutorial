// import layer
import { FC } from 'react';

import { Text } from 'components/texts/Text';
import { Image } from 'components/images/Image';
import { Button } from 'components/buttons/Button';

import {
  circle,
  desc,
  h2CircleWrapper,
  h2Circle,
  descCircle,
  buttonWrapper,
  icon,
} from './style.css';
import {
  titleContainer,
  // h2,
  h2Sub,
  // h2Wrapper,
} from 'components/sections/AboutSection/style.css';
import { InternalButtonLink } from 'components/links/InternalButtonLink';

// type layer
export type StyleProps = Record<string, unknown>;
export type DataProps = {
  title: string;
  subTitle: string;
  description: string;
  url?: string;
};
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({
  title,
  subTitle,
  description,
  url,
}) => {
  return (
    <div className={`${circle}`}>
      <div className={`${titleContainer}`}>
        <div className={`${icon}`}>
          <Image image={{ src: `/svg/section-icon.svg` }} />
        </div>
        <Text className={`${h2CircleWrapper}`} as={`h2`}>
          <span className={`${h2Circle}`}>{title}</span>
          <span className={`${h2Sub}`}>{subTitle}</span>
        </Text>

        <Text className={`${desc} ${descCircle}`} as={`p`}>
          {description}
        </Text>

        {url && (
          <div className={`${buttonWrapper}`}>
            <InternalButtonLink href={url}>
              <Button>Read More</Button>
            </InternalButtonLink>
          </div>
        )}
      </div>
    </div>
  );
};
