import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import { useRef } from 'react';
import { LocomotiveScrollProvider as RLSProvider } from 'react-locomotive-scroll';
import { ChakraProvider } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';
import { RecoilRoot } from 'recoil';
import { ApolloProvider } from '@apollo/client';

import { SEO } from 'constants/seo';
import { useApollo } from 'lib/apollo/client';
import { GoogleAnalytics } from 'components/GoogleAnalytics';

import 'locomotive-scroll/dist/locomotive-scroll.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const apolloClient = useApollo(pageProps);

  return (
    <>
      <GoogleAnalytics />
      <ApolloProvider client={apolloClient}>
        <DefaultSeo {...SEO} />
        <RecoilRoot>
          <RLSProvider
            options={{
              smooth: true,
            }}
            watch={
              [
                //..all the dependencies you want to watch to update the scroll.
                //  Basicaly, you would want to watch page/location changes
                //  For exemple, on Next.js you would want to watch properties like `ro uter.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
              ]
            }
            location={asPath}
            onLocationChange={(scroll: any) =>
              scroll.scrollTo(0, { duration: 0, disableLerp: true })
            }
            containerRef={containerRef}
          >
            <div
              className={`site__main__contents`}
              data-scroll-container
              ref={containerRef}
            >
              <ChakraProvider>
                <Component {...pageProps} />
              </ChakraProvider>
            </div>
          </RLSProvider>
        </RecoilRoot>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
