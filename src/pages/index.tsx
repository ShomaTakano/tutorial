import type { NextPage, InferGetStaticPropsType, GetStaticProps } from 'next';
import { useSetRecoilState, useRecoilState } from 'recoil';
import { useRouter } from 'next/router';

import Template from 'templates/Home';
import { initializeApollo } from 'lib/apollo/client';
import { newsListState } from 'features/news/atoms';
import { parseNewsList } from 'features/news/utils';
import { parseRecruitList } from 'features/recruit/utils';

import { articleListState } from 'features/blog/atoms';
import { parseArticleList } from 'features/blog/utils';
import { recruitListState } from 'features/recruit/atoms';

import {
  GetHomeContentsQuery,
  GetHomeContentsDocument,
  InfoEntity,
  ArticleEntity,
  RecruitEntity,
} from 'types/gql-types';
import { UPDATE_INTERVAL } from 'constants/parameters';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

// const title = `新潟のWebシステム開発会社 | 株式会社ラクウェブ`;
// const description = `株式会社ラクウェブ(RAKUWEB)の[TOP]です。有益な情報をお届けします。`;

const Home: NextPage<Props> = ({ data }) => {
  const setNewsList = useSetRecoilState(newsListState);
  const setArticleList = useSetRecoilState(articleListState);
  const setRecruitList = useSetRecoilState(recruitListState);

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

  setArticleList(() => {
    const articlelist = parseArticleList(data.articles.data as ArticleEntity[]);

    return articlelist;
  });

  setRecruitList(() => {
    const recruitlist = parseRecruitList(data.recruits.data as RecruitEntity[]);
    return recruitlist;
  });

  return (
    <div>
      <Template />
    </div>
  );
};

export const getStaticProps: GetStaticProps<{
  data: GetHomeContentsQuery;
}> = async () => {
  const apolloClient = initializeApollo();
  try {
    const { data } = await apolloClient.query<GetHomeContentsQuery>({
      query: GetHomeContentsDocument,
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

export default Home;
