import type {
  NextPage,
  InferGetStaticPropsType,
  GetStaticPaths,
  GetStaticProps,
} from 'next/types';
import { useSetRecoilState } from 'recoil';
import { useRouter } from 'next/router';

import { SeoComponent } from 'components/seo/SeoComponent';
import { NewsId as Template } from 'templates/NewsId';
import { initializeApollo } from 'lib/apollo/client';
import { UPDATE_INTERVAL } from 'constants/parameters';
import { newsState } from 'features/news/atoms';
import {
  GetNewsAllQuery,
  GetNewsAllDocument,
  GetNewsByIdQuery,
  GetNewsByIdDocument,
  InfoEntity,
} from 'types/gql-types';
import { parseNews } from 'features/news/utils';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const NewsId: NextPage<Props> = ({ data }) => {
  const setNewsId = useSetRecoilState(newsState);
  const router = useRouter();
  const title = `${data?.info?.data?.attributes?.title} | 株式会社ラクウェブ（RAKUWEB)`;
  const description = data?.info?.data?.attributes?.meta_description;
  const cmsurl = `https://management.rakuweb.jp`;
  const imageurl = data?.info?.data?.attributes?.image?.data?.attributes?.url;
  const openGraph = {
    type: 'website',
    title: `${data?.info?.data?.attributes?.title} | 株式会社ラクウェブ（RAKUWEB)`,
    description: data?.info?.data?.attributes?.meta_description,
    url: `https://rakuweb.jp/news/${data?.info?.data?.id}`,
    images: [
      {
        url: `${cmsurl}${imageurl}`,
        width: 1200,
        height: 630,
      },
    ],
  };

  if (router.isFallback) {
    return <></>;
  }
  if (!data) {
    return <></>;
  }

  setNewsId(() => {
    const result = parseNews(data.info.data as InfoEntity);

    return result;
  });

  return (
    <>
      <SeoComponent
        title={title}
        description={description}
        openGraph={openGraph}
      />

      <Template />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo();
  try {
    const { data } = await apolloClient.query<GetNewsAllQuery>({
      query: GetNewsAllDocument,
    });

    const paths = data?.infos?.data
      ? data.infos.data.map((item) => ({
          params: {
            id: item?.id,
          },
        }))
      : [];

    return {
      paths,
      fallback: true,
    };
  } finally {
    console.log('get pages/news/[id] paths');
  }
};

export const getStaticProps: GetStaticProps<{
  data: GetNewsByIdQuery;
}> = async ({ params }) => {
  const { id } = params;
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query<GetNewsByIdQuery>({
    query: GetNewsByIdDocument,
    variables: { id },
  });

  try {
    return {
      props: {
        data,
      },
      notFound: !data,
      revalidate: UPDATE_INTERVAL,
    };
  } catch (err) {
    console.error(err);

    return { props: { data: undefined }, notFound: true };
  } finally {
    console.log('get pages/news/[id] static props');
  }
};

export default NewsId;
