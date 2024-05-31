import type { NextPage, InferGetStaticPropsType, GetStaticProps } from 'next';
import { useSetRecoilState } from 'recoil';
import { useRouter } from 'next/router';

import { SeoComponent } from 'components/seo/SeoComponent';
import { Recruit as Template } from 'templates/Recruit';

import { initializeApollo } from 'lib/apollo/client';
import { UPDATE_INTERVAL } from 'constants/parameters';
import {
  GetRecruitsQuery,
  GetRecruitsDocument,
  RecruitEntity,
} from 'types/gql-types';
import { recruitListState } from 'features/recruit/atoms';
import { parseRecruitList } from 'features/recruit/utils';

const title = `リクルート | 株式会社ラクウェブ`;
const description = `株式会社ラクウェブ(RAKUWEB)の採用情報です。ともに成長できる仲間を募集しています。`;

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Recruit: NextPage<Props> = ({ data }) => {
  const setRecruitList = useSetRecoilState(recruitListState);
  const router = useRouter();

  if (router.isFallback) {
    return <></>;
  }
  if (!data) {
    return <></>;
  }

  setRecruitList(() => {
    const list = parseRecruitList(data.recruits.data as RecruitEntity[]);
    return list;
  });

  return (
    <div>
      <SeoComponent title={title} description={description} />
      <Template />
    </div>
  );
};

export default Recruit;

export const getStaticProps: GetStaticProps<{
  data: GetRecruitsQuery;
}> = async () => {
  const apolloClient = initializeApollo();
  try {
    const { data } = await apolloClient.query<GetRecruitsQuery>({
      query: GetRecruitsDocument,
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
    console.log('get pages/recruit static props');
  }
};
