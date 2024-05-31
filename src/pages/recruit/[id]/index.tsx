import type {
  NextPage,
  InferGetStaticPropsType,
  GetStaticPaths,
  GetStaticProps,
} from 'next/types';
import { useSetRecoilState } from 'recoil';
import { useRouter } from 'next/router';

// import { SeoComponent } from '~/components/SeoComponent';
import { RecruitId as Template } from 'templates/RecruitId';
import { initializeApollo } from 'lib/apollo/client';
import { UPDATE_INTERVAL } from 'constants/parameters';
import { recruitState } from 'features/recruit/atoms';
import {
  GetRecruitAllQuery,
  GetRecruitAllDocument,
  GetRecruitByIdQuery,
  GetRecruitByIdDocument,
  RecruitEntity,
} from 'types/gql-types';
import { parseRecruit } from 'features/recruit/utils';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const RecruitId: NextPage<Props> = ({ data }) => {
  const setRecruit = useSetRecoilState(recruitState);
  const router = useRouter();

  if (router.isFallback) {
    return <></>;
  }
  if (!data) {
    return <></>;
  }

  setRecruit(() => {
    const result = parseRecruit(data.recruit.data as RecruitEntity);

    return result;
  });

  return (
    <>
      {/*
      {seo ? <SeoComponent {...seo} /> : <SeoComponent />}
    */}
      <Template />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo();
  try {
    const { data } = await apolloClient.query<GetRecruitAllQuery>({
      query: GetRecruitAllDocument,
    });

    const paths = data?.recruits?.data
      ? data.recruits.data.map((item) => ({
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
    console.log('get pages/recruit/[id] paths');
  }
};

export const getStaticProps: GetStaticProps<{
  data: GetRecruitByIdQuery;
}> = async ({ params }) => {
  const { id } = params;
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query<GetRecruitByIdQuery>({
    query: GetRecruitByIdDocument,
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
    console.log('get pages/recruit/[id] static props');
  }
};

export default RecruitId;
