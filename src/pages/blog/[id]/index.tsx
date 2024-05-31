import type {
  NextPage,
  InferGetStaticPropsType,
  GetStaticPaths,
  GetStaticProps,
} from 'next/types';

import { useSetRecoilState } from 'recoil';
import { useRouter } from 'next/router';

import { SeoComponent } from 'components/seo/SeoComponent';
import { BlogId as Template } from 'templates/BlogId';
import { initializeApollo } from 'lib/apollo/client';
import { UPDATE_INTERVAL } from 'constants/parameters';
import { articleState } from 'features/blog/atoms';
import {
  GetBlogAllQuery,
  GetBlogAllDocument,
  GetBlogByIdQuery,
  GetBlogByIdDocument,
  ArticleEntity,
} from 'types/gql-types';
import { parseArticle } from 'features/blog/utils';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const BlogId: NextPage<Props> = ({ data }) => {
  const setBlogId = useSetRecoilState(articleState);
  const router = useRouter();
  const description = data?.article?.data?.attributes?.meta_description;
  const title = `${data?.article?.data?.attributes?.title}| 株式会社ラクウェブ（RAKUWEB）`;
  const cmsurl = `https://management.rakuweb.jp`;
  const imageurl =
    data?.article?.data?.attributes?.image?.data?.attributes?.url;
  const openGraph = {
    type: 'website',
    title: `${data?.article?.data?.attributes?.title}| 株式会社ラクウェブ（RAKUWEB）`,
    description: data?.article?.data?.attributes?.meta_description,
    url: `https://rakuweb.jp/blog/${data?.article?.data?.id}`,
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

  setBlogId(() => {
    const result = parseArticle(data.article.data as ArticleEntity);

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
    const { data } = await apolloClient.query<GetBlogAllQuery>({
      query: GetBlogAllDocument,
    });

    const paths = data?.articles?.data
      ? data.articles.data.map((item) => ({
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
    console.log('get pages/blog/[id] paths');
  }
};

export const getStaticProps: GetStaticProps<{
  data: GetBlogByIdQuery;
}> = async ({ params }) => {
  const { id } = params;
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query<GetBlogByIdQuery>({
    query: GetBlogByIdDocument,
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
    console.log('get pages/blog/[id] static props');
  }
};

export default BlogId;
