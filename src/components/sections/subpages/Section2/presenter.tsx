// import layer
import { FC, ReactNode } from 'react';
import { Box, Stack } from '@chakra-ui/react';

import { FadeUpBox } from 'components/boxes/FadeUpBox';
import { SectionTitle } from 'components/titles/subpages/SectionTitle';

import { contentContainer } from './style.css';

// type layer
export type StyleProps = { className?: string };
export type DataProps = {
  title: string;
  subTitle: string;
  messages?: string[];
  children: ReactNode;
};
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({
  title,
  subTitle,
  className,
  children,
}) => {
  return (
    <section className={`${className ?? ``}`}>
      <Stack
        spacing={{ base: `0`, lg: `initial` }}
        direction={{ base: `column`, lg: `row` }}
      >
        <FadeUpBox
          w={{ lg: `37%` }}
        // w={{ lg: `27.2%` }}
        >
          <SectionTitle title={title} subTitle={subTitle} />
        </FadeUpBox>
        <div
          className={`${contentContainer}`}
        // w={{ lg: `72.88%` }}
        >
          <FadeUpBox>{children}</FadeUpBox>
        </div>
      </Stack>
    </section>
  );
};
