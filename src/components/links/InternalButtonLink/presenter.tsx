// import layer
import { FC, ReactNode } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

// type layer
export type StyleProps = NextLinkProps & { className?: string };
export type DataProps = { children: ReactNode };
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({
  children,
  href,
  as,
  replace,
  scroll,
  shallow,
  passHref = true,
  prefetch = false,
  locale,
  className = ``,
  ...props
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
      <a className={className}>{children}</a>
    </NextLink>
  );
};
