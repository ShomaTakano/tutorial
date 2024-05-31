import type { NextPage, InferGetStaticPropsType, GetStaticProps } from 'next';
import { useSetRecoilState } from 'recoil';
import { useRouter } from 'next/router';

import { SeoComponent } from 'components/seo/SeoComponent';
import { Blog as Template } from 'templates/Blog';

import { initializeApollo } from 'lib/apollo/client';
import { UPDATE_INTERVAL } from 'constants/parameters';
import {
  GetBlogAllQuery,
  GetBlogAllDocument,
  ArticleEntity,
} from 'types/gql-types';
import { articleListState } from 'features/blog/atoms';
import { parseArticleList } from 'features/blog/utils';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Blog: NextPage<Props> = ({ data }) => {
  const title = `ブログ | 株式会社ラクウェブ`;
  const description = `株式会社ラクウェブ(RAKUWEB)の[ブログ]です。有益な情報をお届けします。`;
  const setBlogList = useSetRecoilState(articleListState);
  const router = useRouter();

  if (router.isFallback) {
    return <></>;
  }
  if (!data) {
    return <></>;
  }

  setBlogList(() => {
    const list = parseArticleList(data.articles.data as ArticleEntity[]);
    return list;
  });

  return (
    <div>
      <SeoComponent title={title} description={description} />
      <Template />
    </div>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps<{
  data: GetBlogAllQuery;
}> = async () => {
  const apolloClient = initializeApollo();
  try {
    const { data } = await apolloClient.query<GetBlogAllQuery>({
      query: GetBlogAllDocument,
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
