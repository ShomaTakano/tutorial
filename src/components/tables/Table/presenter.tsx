// import layer
import { FC } from 'react';
import { Box, Table, TableProps, BoxProps, Tr, Tbody } from '@chakra-ui/react';

import { Td } from 'components/tables/Td';
import { ExternalLink } from 'components/links/ExternalLink';

import { colors } from 'constants/styles/colors';
import { tdStyle } from './style.css';

// type layer
export type StyleProps = BoxProps & { tableProps?: TableProps };
export type TableRowType = { key: string; value: string };
export type DataProps = { list: TableRowType[] };
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({
  list,
  tableProps,
  ...props
}) => {
  return (
    <Box
      w={{ base: `100%` }}
      borderRadius={`10px`}
      // border={`solid ${colors.primary} 1px`}
      {...props}
    >
      <Table {...tableProps}>
        <Tbody>
          {list.map((row) =>
            row.key === `link` ? (
              <Tr key={row.key}>
                <Td
                  className={`${tdStyle}`}
                  w={{ lg: `18rem` }}
                  textAlign={`center`}
                  whiteSpace={`nowrap`}
                  isKey
                >
                  {row.key}
                </Td>
                <ExternalLink href={row.value}>
                  <Td className={`${tdStyle}`}>{row.value}</Td>
                </ExternalLink>
              </Tr>
            ) : (
              <Tr borderColor={colors.primary} key={row.key}>
                <Td
                  className={`${tdStyle}`}
                  w={{ lg: `18rem` }}
                  textAlign={`center`}
                  whiteSpace={`nowrap`}
                  isKey
                >
                  {row.key}
                </Td>
                <Td
                  className={`${tdStyle}`}
                  letterSpacing={`0.2em`}
                  whiteSpace={`pre-wrap`}
                >
                  {row.value}
                </Td>
              </Tr>
            )
          )}
        </Tbody>
      </Table>
    </Box>
  );
};
