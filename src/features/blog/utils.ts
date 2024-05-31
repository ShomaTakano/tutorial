import { ArticleEntity } from 'types/gql-types';
import { ArticleListItem, ArticleItem } from './types';
import { routes } from 'constants/routes';
import { MEDIA_ROOT_URL } from 'constants/parameters';
import { parseDate } from 'lib/parse/strapi/date';
import { parseImage } from 'lib/parse/strapi/image';

export const parseArticleList = (data: ArticleEntity[]): ArticleListItem[] => {
  const result = data.map((entity) => {
    const article = entity.attributes;
    const result = {
      id: ``,
      title: article.title,
      date: parseDate(article.date),
      category: article.category.data.attributes.name,
      url: `${routes.blog.url}/${entity.id}`,
      image: article?.image?.data?.attributes?.url
        ? parseImage(article.image.data.attributes)
        : undefined,
    };

    return result;
  });

  return result;
};

export const parseArticle = (data: ArticleEntity): ArticleItem => {
  const article = data.attributes;
  const result = {
    id: ``,
    title: article.title,
    date: parseDate(article.date),
    category: article.category.data.attributes.name,
    url: `${routes.blog.url}/${data.id}`,
    imageUrl: article?.image?.data?.attributes?.url
      ? `${MEDIA_ROOT_URL}${article.image.data.attributes.url}`
      : undefined,
    content: article.content,
    meta_descripsion: article.meta_description,
  };

  return result;
};
