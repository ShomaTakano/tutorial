import { InfoEntity } from 'types/gql-types';
import { NewsListItem, NewsItem } from './types';
import { routes } from 'constants/routes';
import { MEDIA_ROOT_URL } from 'constants/parameters';
import { parseDate } from 'lib/parse/strapi/date';
import { parseImage } from 'lib/parse/strapi/image';

export const parseNewsList = (data: InfoEntity[]): NewsListItem[] => {
  const result = data.map((entity) => {
    const news = entity.attributes;
    const result = {
      id: ``,
      title: news.title,
      date: parseDate(news.date),
      category: news.news_category.data.attributes.name,
      url: `${routes.news.url}/${entity.id}`,
      image: news?.image?.data?.attributes?.url
        ? parseImage(news.image.data.attributes)
        : undefined,
    };
    return result;
  });
  return result;
};

export const parseNews = (data: InfoEntity): NewsItem => {
  const news = data.attributes;
  const result = {
    id: ``,
    title: news.title,
    date: parseDate(news.date),
    category: news.news_category.data.attributes.name,
    url: `${routes.news.url}/${data.id}`,
    imageUrl: news?.image?.data?.attributes?.url
      ? `${MEDIA_ROOT_URL}${news.image.data.attributes.url}`
      : undefined,
    content: news.content,
    link: news.link,
    meta_descripsion: news.meta_description,
  };

  return result;
};
