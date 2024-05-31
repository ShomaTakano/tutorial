import {RecruitEntity} from 'types/gql-types';
import { RecruitListItem, RecruitItem, } from './types';
import { routes } from 'constants/routes';
import { parseDate } from 'lib/parse/strapi/date';
import { parseImage } from 'lib/parse/strapi/image';

export const parseRecruitList = (data: RecruitEntity[]): RecruitListItem[] => {
  const result = data.map((entity) => {
    const recruit = entity.attributes;
    const result = {
      id: ``,
      title: recruit.title,
      date: parseDate(recruit.date),
      url: `${routes.recruit.url}/${entity.id}`,
      image: recruit?.image?.data?.attributes?.url
        ? parseImage(recruit.image.data.attributes)
        : undefined,
    };
    return result;
  });
  return result;
};

export const parseRecruit = (data: RecruitEntity): RecruitItem => {
  const recruit = data.attributes;
  const result = {
    id: ``,
    title: recruit.title,
    date: parseDate(recruit.date),
    url: `${routes.news.url}/${data.id}`,
    image: recruit?.image?.data?.attributes?.url
      ? parseImage(recruit.image.data.attributes)
      : undefined,
    content: recruit.content,
  };

  return result;
};

