// import layer
import { FC, ReactNode } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

import { link } from './style.css';

// type layer
export type StyleProps = NextLinkProps;
export type DataProps = { className?: string; children: ReactNode };
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({
  className = '',
  children,
  href,
  as,
  replace,
  scroll,
  shallow,
  passHref = true,
  prefetch = false,
  locale,
}) => {
  return (
    <NextLink
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref={passHref}
      prefetch={prefetch}
      locale={locale}
    >
      <a className={`${link} ${className}`}>{children}</a>
    </NextLink>
  );
};
