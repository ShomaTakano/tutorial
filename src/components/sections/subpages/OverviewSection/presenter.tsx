// import layer
import { FC } from 'react';
import { Box, Flex } from '@chakra-ui/react';

import { SectionContainer920 } from 'components/containers/SectionContainer920';
import { Table } from 'components/tables/Table';
import { OUTLINE } from 'constants/parameters';

import { container } from './style.css';

// type layer
export type StyleProps = Record<string, unknown>;
export type PresenterProps = StyleProps;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  return (
    <SectionContainer920 className={`${container}`} mx={`auto`} as={`section`}>
      <Table mt={{ base: `2.25rem` }} list={OUTLINE} />
    </SectionContainer920>
  );
};
