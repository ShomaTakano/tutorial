// import layer
import { FC } from 'react';

import { Flex } from 'components/fundamentals/Flex';
import { Text } from 'components/texts/Text';
import { ExternalLink } from 'components/links/ExternalLink';
import { InternalLink } from 'components/links/InternalLink';

import { contactUrl } from 'constants/routes';

import { containerStyle, messageStyle } from './style.css';

// type layer
export type StyleProps = Record<string, unknown>;
export type DataProps = Record<string, unknown>;
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  const message = `Click here to
contact RAKUWEB Inc.`;

  return (
    <Flex id={`contact`} className={containerStyle} as={`section`}>
      <InternalLink href="/contact">
        <Text className={messageStyle}>{message}</Text>
      </InternalLink>
    </Flex>
  );
};
