// import layer
import { FC } from 'react';
import { Td, TableCellProps } from '@chakra-ui/react';

import { colors } from 'constants/styles/colors';

// type layer
export type StyleProps = TableCellProps & { isKey?: boolean };
export type PresenterProps = StyleProps;

// presenter
export const Presenter: FC<PresenterProps> = ({
  children,
  isKey,
  ...props
}) => {
  return (
    <Td
      color={isKey ? `textBlue` : `textBlack2`}
      fontWeight={`bold`}
      letterSpacing={`0.1em`}
      lineHeight={`2em`}
      fontFamily={`'Noto Sans JP', sans-serif;`}
      borderColor={colors.primary}
      paddingY={{ base: `${40 / 3.75}vw`, lg: `${40 / 19.2}vw` }}
      paddingX={{ base: `${8 / 3.75}vw`, lg: `${24 / 19.2}vw` }}
      {...props}
    >
      {children}
    </Td>
  );
};
