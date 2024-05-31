import type { NextPage, InferGetStaticPropsType, GetStaticProps } from 'next';
import { useSetRecoilState } from 'recoil';
import { useRouter } from 'next/router';

import { SeoComponent } from 'components/seo/SeoComponent';
import { News as Template } from 'templates/News';

import { initializeApollo } from 'lib/apollo/client';
import { UPDATE_INTERVAL } from 'constants/parameters';
import {
  GetNewsAllQuery,
  GetNewsAllDocument,
  InfoEntity,
} from 'types/gql-types';
import { newsListState } from 'features/news/atoms';
import { parseNewsList } from 'features/news/utils';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const News: NextPage<Props> = ({ data }) => {
  const title = `ニュース | 株式会社ラクウェブ`;
  const description = `株式会社ラクウェブ(RAKUWEB)の[ニュース]です。有益な情報をお届けします。`;
  const setNewsList = useSetRecoilState(newsListState);
  const router = useRouter();

  if (router.isFallback) {
    return <></>;
  }
  if (!data) {
    return <></>;
  }

  setNewsList(() => {
    const list = parseNewsList(data.infos.data as InfoEntity[]);
    return list;
  });

  return (
    <div>
      <SeoComponent title={title} description={description} />
      <Template />
    </div>
  );
};

export default News;

export const getStaticProps: GetStaticProps<{
  data: GetNewsAllQuery;
}> = async () => {
  const apolloClient = initializeApollo();
  try {
    const { data } = await apolloClient.query<GetNewsAllQuery>({
      query: GetNewsAllDocument,
    });

    return {
      props: { data },
      notFound: !data,
      revalidate: UPDATE_INTERVAL,
    };
  } catch (error) {
    console.error(error);

    return {
      props: { data: undefined },
      notFound: true,
      revalidate: UPDATE_INTERVAL,
    };
  } finally {
    console.log('get pages/index static props');
  }
};
