import { FC, useState, useEffect, useRef } from 'react';

import { useCountUp } from 'react-countup';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { Header } from 'components/headers/Header';
import { TopFirstview } from 'components/firstviews/TopFirstview';
import { AboutSection } from 'components/sections/AboutSection';
import { BlogSection } from 'components/sections/BlogSection';

import { container, grayAreaStyle } from './style.css';
import { ServiceSection } from 'components/sections/ServiceSection';
import { NewsSection } from 'components/sections/NewsSection';
import { Footer } from 'components/footers/Footer2';
import { TextAnimationBand } from 'components/bands/TextAnimationBand';
import { RecruitSection } from 'components/sections/RecruitSection';
import { ContactSection } from 'components/sections/ContactSection';
import { Loading } from 'components/loadings/Loading';
import { Box } from '@chakra-ui/react';
import { TopRecruitSection } from 'components/sections/TopRecruitSection';

const Template: FC = () => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [completed, setCompleted] = useState<boolean>(false);
  const scroll = useRef(null);

  useCountUp({
    ref: 'loading',
    start: 0,
    end: 100,
    duration: 5,
    onEnd: () => setLoaded(true),
  });

  useEffect(() => {
    if (loaded) {
      setTimeout(() => setCompleted(true), 1000);
      enableBodyScroll(null);
    }
  });

  // useEffect(() => {
  //   if (typeof window === 'undefined' || !loaded) {
  //     return;
  //   }

  //   const handler = async () => {
  //     scroll.current = await import('locomotive-scroll').then(
  //       (loco) =>
  //         new loco.default({
  //           smooth: true,
  //           mobile: {
  //             breakpoint: 0,
  //             smooth: true,
  //           },
  //           tablet: {
  //             breakpoint: 0,
  //             smooth: true,
  //           },
  //         })
  //     );
  //   };
  //   handler();
  //   return () => scroll?.current && scroll.current.destroy();
  // }, [loaded]);

  // useEffect(() => {
  //   disableBodyScroll(null);
  // }, []);

  return (
    <>
      <Box
        position={`fixed`}
        w={`0%`}
        top={0}
        transition={`all 1.5s`}
        opacity={loaded ? 0 : 1}
        zIndex={loaded ? -1 : 9999999}
        display={completed ? `none` : `block`}
        bgColor={`#000`}
        h={`100vh`}
      >
        <Loading />
      </Box>
      <Header isTop />
      <main data-scroll-section className={`${container}`}>
        <TopFirstview />
        <TextAnimationBand />
        <AboutSection />
        <div className={`${grayAreaStyle}`}>
          <ServiceSection />
          <NewsSection />
        </div>
        <RecruitSection />
        {/* <BlogSection /> */}
        <TopRecruitSection />
        <ContactSection />
      </main>
      <Footer data-scroll-section />
    </>
  );
};

export default Template;
