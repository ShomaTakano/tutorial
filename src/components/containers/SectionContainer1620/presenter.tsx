// import layer
import { FC, ReactNode } from 'react';

import { Box, BoxProps } from 'components/fundamentals/Box';
import { container } from './style.css';

// type layer
export type StyleProps = BoxProps;
export type DataProps = { className?: string; children: ReactNode };
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Box className={`${container} ${className ?? ''}`} {...props}>
      {children}
    </Box>
  );
};
