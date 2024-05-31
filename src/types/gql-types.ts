import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  JSON: any;
  Upload: any;
};

export type Article = {
  __typename?: 'Article';
  category?: Maybe<ArticleCatetgoryEntityResponse>;
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  date: Scalars['Date'];
  image?: Maybe<UploadFileEntityResponse>;
  meta_description?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ArticleCatetgory = {
  __typename?: 'ArticleCatetgory';
  articles?: Maybe<ArticleRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  en_name: Scalars['String'];
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url_name?: Maybe<Scalars['String']>;
};


export type ArticleCatetgoryArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ArticleCatetgoryEntity = {
  __typename?: 'ArticleCatetgoryEntity';
  attributes?: Maybe<ArticleCatetgory>;
  id?: Maybe<Scalars['ID']>;
};

export type ArticleCatetgoryEntityResponse = {
  __typename?: 'ArticleCatetgoryEntityResponse';
  data?: Maybe<ArticleCatetgoryEntity>;
};

export type ArticleCatetgoryEntityResponseCollection = {
  __typename?: 'ArticleCatetgoryEntityResponseCollection';
  data: Array<ArticleCatetgoryEntity>;
  meta: ResponseCollectionMeta;
};

export type ArticleCatetgoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ArticleCatetgoryFiltersInput>>>;
  articles?: InputMaybe<ArticleFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  en_name?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ArticleCatetgoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ArticleCatetgoryFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url_name?: InputMaybe<StringFilterInput>;
};

export type ArticleCatetgoryInput = {
  articles?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  en_name?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url_name?: InputMaybe<Scalars['String']>;
};

export type ArticleEntity = {
  __typename?: 'ArticleEntity';
  attributes?: Maybe<Article>;
  id?: Maybe<Scalars['ID']>;
};

export type ArticleEntityResponse = {
  __typename?: 'ArticleEntityResponse';
  data?: Maybe<ArticleEntity>;
};

export type ArticleEntityResponseCollection = {
  __typename?: 'ArticleEntityResponseCollection';
  data: Array<ArticleEntity>;
  meta: ResponseCollectionMeta;
};

export type ArticleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ArticleFiltersInput>>>;
  category?: InputMaybe<ArticleCatetgoryFiltersInput>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  date?: InputMaybe<DateFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  meta_description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ArticleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ArticleFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ArticleInput = {
  category?: InputMaybe<Scalars['ID']>;
  content?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['Date']>;
  image?: InputMaybe<Scalars['ID']>;
  meta_description?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ArticleRelationResponseCollection = {
  __typename?: 'ArticleRelationResponseCollection';
  data: Array<ArticleEntity>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  eqi?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type Contact = {
  __typename?: 'Contact';
  address?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  contact_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  kind?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  postal_code?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ContactEntity = {
  __typename?: 'ContactEntity';
  attributes?: Maybe<Contact>;
  id?: Maybe<Scalars['ID']>;
};

export type ContactEntityResponse = {
  __typename?: 'ContactEntityResponse';
  data?: Maybe<ContactEntity>;
};

export type ContactEntityResponseCollection = {
  __typename?: 'ContactEntityResponseCollection';
  data: Array<ContactEntity>;
  meta: ResponseCollectionMeta;
};

export type ContactFiltersInput = {
  address?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ContactFiltersInput>>>;
  company?: InputMaybe<StringFilterInput>;
  contact_id?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  kind?: InputMaybe<StringFilterInput>;
  message?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ContactFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ContactFiltersInput>>>;
  phone?: InputMaybe<StringFilterInput>;
  postal_code?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ContactInput = {
  address?: InputMaybe<Scalars['String']>;
  company?: InputMaybe<Scalars['String']>;
  contact_id?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  kind?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  postal_code?: InputMaybe<Scalars['String']>;
};

export type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  contains?: InputMaybe<Scalars['Date']>;
  containsi?: InputMaybe<Scalars['Date']>;
  endsWith?: InputMaybe<Scalars['Date']>;
  eq?: InputMaybe<Scalars['Date']>;
  eqi?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  not?: InputMaybe<DateFilterInput>;
  notContains?: InputMaybe<Scalars['Date']>;
  notContainsi?: InputMaybe<Scalars['Date']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  startsWith?: InputMaybe<Scalars['Date']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  eqi?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  eqi?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type GenericMorph = Article | ArticleCatetgory | Contact | I18NLocale | Info | MailTemplate | NewsCategory | NtuContact | Recruit | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  eqi?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type Info = {
  __typename?: 'Info';
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  date: Scalars['DateTime'];
  image?: Maybe<UploadFileEntityResponse>;
  link?: Maybe<Scalars['String']>;
  meta_description?: Maybe<Scalars['String']>;
  news_category?: Maybe<NewsCategoryEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type InfoEntity = {
  __typename?: 'InfoEntity';
  attributes?: Maybe<Info>;
  id?: Maybe<Scalars['ID']>;
};

export type InfoEntityResponse = {
  __typename?: 'InfoEntityResponse';
  data?: Maybe<InfoEntity>;
};

export type InfoEntityResponseCollection = {
  __typename?: 'InfoEntityResponseCollection';
  data: Array<InfoEntity>;
  meta: ResponseCollectionMeta;
};

export type InfoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<InfoFiltersInput>>>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  date?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  link?: InputMaybe<StringFilterInput>;
  meta_description?: InputMaybe<StringFilterInput>;
  news_category?: InputMaybe<NewsCategoryFiltersInput>;
  not?: InputMaybe<InfoFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<InfoFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type InfoInput = {
  content?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['DateTime']>;
  image?: InputMaybe<Scalars['ID']>;
  link?: InputMaybe<Scalars['String']>;
  meta_description?: InputMaybe<Scalars['String']>;
  news_category?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type InfoRelationResponseCollection = {
  __typename?: 'InfoRelationResponseCollection';
  data: Array<InfoEntity>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  eqi?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  eqi?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type MailTemplate = {
  __typename?: 'MailTemplate';
  createdAt?: Maybe<Scalars['DateTime']>;
  from?: Maybe<Scalars['String']>;
  html: Scalars['String'];
  name: Scalars['String'];
  reply_to?: Maybe<Scalars['String']>;
  subject: Scalars['String'];
  text: Scalars['String'];
  to?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type MailTemplateEntity = {
  __typename?: 'MailTemplateEntity';
  attributes?: Maybe<MailTemplate>;
  id?: Maybe<Scalars['ID']>;
};

export type MailTemplateEntityResponse = {
  __typename?: 'MailTemplateEntityResponse';
  data?: Maybe<MailTemplateEntity>;
};

export type MailTemplateEntityResponseCollection = {
  __typename?: 'MailTemplateEntityResponseCollection';
  data: Array<MailTemplateEntity>;
  meta: ResponseCollectionMeta;
};

export type MailTemplateFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<MailTemplateFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  from?: InputMaybe<StringFilterInput>;
  html?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<MailTemplateFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<MailTemplateFiltersInput>>>;
  reply_to?: InputMaybe<StringFilterInput>;
  subject?: InputMaybe<StringFilterInput>;
  text?: InputMaybe<StringFilterInput>;
  to?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type MailTemplateInput = {
  from?: InputMaybe<Scalars['String']>;
  html?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  reply_to?: InputMaybe<Scalars['String']>;
  subject?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createArticle?: Maybe<ArticleEntityResponse>;
  createArticleCatetgory?: Maybe<ArticleCatetgoryEntityResponse>;
  createContact?: Maybe<ContactEntityResponse>;
  createInfo?: Maybe<InfoEntityResponse>;
  createMailTemplate?: Maybe<MailTemplateEntityResponse>;
  createNewsCategory?: Maybe<NewsCategoryEntityResponse>;
  createNtuContact?: Maybe<NtuContactEntityResponse>;
  createRecruit?: Maybe<RecruitEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteArticle?: Maybe<ArticleEntityResponse>;
  deleteArticleCatetgory?: Maybe<ArticleCatetgoryEntityResponse>;
  deleteContact?: Maybe<ContactEntityResponse>;
  deleteInfo?: Maybe<InfoEntityResponse>;
  deleteMailTemplate?: Maybe<MailTemplateEntityResponse>;
  deleteNewsCategory?: Maybe<NewsCategoryEntityResponse>;
  deleteNtuContact?: Maybe<NtuContactEntityResponse>;
  deleteRecruit?: Maybe<RecruitEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateArticle?: Maybe<ArticleEntityResponse>;
  updateArticleCatetgory?: Maybe<ArticleCatetgoryEntityResponse>;
  updateContact?: Maybe<ContactEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateInfo?: Maybe<InfoEntityResponse>;
  updateMailTemplate?: Maybe<MailTemplateEntityResponse>;
  updateNewsCategory?: Maybe<NewsCategoryEntityResponse>;
  updateNtuContact?: Maybe<NtuContactEntityResponse>;
  updateRecruit?: Maybe<RecruitEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationCreateArticleArgs = {
  data: ArticleInput;
};


export type MutationCreateArticleCatetgoryArgs = {
  data: ArticleCatetgoryInput;
};


export type MutationCreateContactArgs = {
  data: ContactInput;
};


export type MutationCreateInfoArgs = {
  data: InfoInput;
};


export type MutationCreateMailTemplateArgs = {
  data: MailTemplateInput;
};


export type MutationCreateNewsCategoryArgs = {
  data: NewsCategoryInput;
};


export type MutationCreateNtuContactArgs = {
  data: NtuContactInput;
};


export type MutationCreateRecruitArgs = {
  data: RecruitInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteArticleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteArticleCatetgoryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteContactArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteInfoArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteMailTemplateArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteNewsCategoryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteNtuContactArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteRecruitArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateArticleArgs = {
  data: ArticleInput;
  id: Scalars['ID'];
};


export type MutationUpdateArticleCatetgoryArgs = {
  data: ArticleCatetgoryInput;
  id: Scalars['ID'];
};


export type MutationUpdateContactArgs = {
  data: ContactInput;
  id: Scalars['ID'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateInfoArgs = {
  data: InfoInput;
  id: Scalars['ID'];
};


export type MutationUpdateMailTemplateArgs = {
  data: MailTemplateInput;
  id: Scalars['ID'];
};


export type MutationUpdateNewsCategoryArgs = {
  data: NewsCategoryInput;
  id: Scalars['ID'];
};


export type MutationUpdateNtuContactArgs = {
  data: NtuContactInput;
  id: Scalars['ID'];
};


export type MutationUpdateRecruitArgs = {
  data: RecruitInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type NewsCategory = {
  __typename?: 'NewsCategory';
  createdAt?: Maybe<Scalars['DateTime']>;
  infos?: Maybe<InfoRelationResponseCollection>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url_name: Scalars['String'];
};


export type NewsCategoryInfosArgs = {
  filters?: InputMaybe<InfoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsCategoryEntity = {
  __typename?: 'NewsCategoryEntity';
  attributes?: Maybe<NewsCategory>;
  id?: Maybe<Scalars['ID']>;
};

export type NewsCategoryEntityResponse = {
  __typename?: 'NewsCategoryEntityResponse';
  data?: Maybe<NewsCategoryEntity>;
};

export type NewsCategoryEntityResponseCollection = {
  __typename?: 'NewsCategoryEntityResponseCollection';
  data: Array<NewsCategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type NewsCategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<NewsCategoryFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  infos?: InputMaybe<InfoFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<NewsCategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<NewsCategoryFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url_name?: InputMaybe<StringFilterInput>;
};

export type NewsCategoryInput = {
  infos?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  url_name?: InputMaybe<Scalars['String']>;
};

export type NtuContact = {
  __typename?: 'NtuContact';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  kind?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type NtuContactEntity = {
  __typename?: 'NtuContactEntity';
  attributes?: Maybe<NtuContact>;
  id?: Maybe<Scalars['ID']>;
};

export type NtuContactEntityResponse = {
  __typename?: 'NtuContactEntityResponse';
  data?: Maybe<NtuContactEntity>;
};

export type NtuContactEntityResponseCollection = {
  __typename?: 'NtuContactEntityResponseCollection';
  data: Array<NtuContactEntity>;
  meta: ResponseCollectionMeta;
};

export type NtuContactFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<NtuContactFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  kind?: InputMaybe<StringFilterInput>;
  message?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<NtuContactFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<NtuContactFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type NtuContactInput = {
  email?: InputMaybe<Scalars['String']>;
  kind?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  article?: Maybe<ArticleEntityResponse>;
  articleCatetgories?: Maybe<ArticleCatetgoryEntityResponseCollection>;
  articleCatetgory?: Maybe<ArticleCatetgoryEntityResponse>;
  articles?: Maybe<ArticleEntityResponseCollection>;
  contact?: Maybe<ContactEntityResponse>;
  contacts?: Maybe<ContactEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  info?: Maybe<InfoEntityResponse>;
  infos?: Maybe<InfoEntityResponseCollection>;
  mailTemplate?: Maybe<MailTemplateEntityResponse>;
  mailTemplates?: Maybe<MailTemplateEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  newsCategories?: Maybe<NewsCategoryEntityResponseCollection>;
  newsCategory?: Maybe<NewsCategoryEntityResponse>;
  ntuContact?: Maybe<NtuContactEntityResponse>;
  ntuContacts?: Maybe<NtuContactEntityResponseCollection>;
  recruit?: Maybe<RecruitEntityResponse>;
  recruits?: Maybe<RecruitEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryArticleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryArticleCatetgoriesArgs = {
  filters?: InputMaybe<ArticleCatetgoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryArticleCatetgoryArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryContactArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryContactsArgs = {
  filters?: InputMaybe<ContactFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryInfoArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryInfosArgs = {
  filters?: InputMaybe<InfoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryMailTemplateArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryMailTemplatesArgs = {
  filters?: InputMaybe<MailTemplateFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryNewsCategoriesArgs = {
  filters?: InputMaybe<NewsCategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryNewsCategoryArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryNtuContactArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryNtuContactsArgs = {
  filters?: InputMaybe<NtuContactFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryRecruitArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryRecruitsArgs = {
  filters?: InputMaybe<RecruitFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Recruit = {
  __typename?: 'Recruit';
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  image?: Maybe<UploadFileEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RecruitEntity = {
  __typename?: 'RecruitEntity';
  attributes?: Maybe<Recruit>;
  id?: Maybe<Scalars['ID']>;
};

export type RecruitEntityResponse = {
  __typename?: 'RecruitEntityResponse';
  data?: Maybe<RecruitEntity>;
};

export type RecruitEntityResponseCollection = {
  __typename?: 'RecruitEntityResponseCollection';
  data: Array<RecruitEntity>;
  meta: ResponseCollectionMeta;
};

export type RecruitFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<RecruitFiltersInput>>>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  date?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<RecruitFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<RecruitFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type RecruitInput = {
  content?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['DateTime']>;
  image?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  eqi?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  folder?: InputMaybe<Scalars['ID']>;
  folderPath?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String'];
  pathId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<Scalars['ID']>;
  path?: InputMaybe<Scalars['String']>;
  pathId?: InputMaybe<Scalars['Int']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type GetBlogByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetBlogByIdQuery = { __typename?: 'Query', article?: { __typename?: 'ArticleEntityResponse', data?: { __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, date: any, content: string, meta_description?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', width?: number | null, height?: number | null, url: string, formats?: any | null, alternativeText?: string | null } | null } | null } | null, category?: { __typename?: 'ArticleCatetgoryEntityResponse', data?: { __typename?: 'ArticleCatetgoryEntity', id?: string | null, attributes?: { __typename?: 'ArticleCatetgory', name: string, en_name: string, url_name?: string | null } | null } | null } | null } | null } | null } | null };

export type GetBlogAllQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBlogAllQuery = { __typename?: 'Query', articles?: { __typename?: 'ArticleEntityResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, date: any, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', width?: number | null, height?: number | null, url: string, formats?: any | null, alternativeText?: string | null } | null } | null } | null, category?: { __typename?: 'ArticleCatetgoryEntityResponse', data?: { __typename?: 'ArticleCatetgoryEntity', id?: string | null, attributes?: { __typename?: 'ArticleCatetgory', name: string, en_name: string, url_name?: string | null } | null } | null } | null } | null }> } | null };

export type GetHomeContentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHomeContentsQuery = { __typename?: 'Query', infos?: { __typename?: 'InfoEntityResponseCollection', data: Array<{ __typename?: 'InfoEntity', id?: string | null, attributes?: { __typename?: 'Info', title: string, date: any, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', width?: number | null, height?: number | null, url: string, formats?: any | null, alternativeText?: string | null } | null } | null } | null, news_category?: { __typename?: 'NewsCategoryEntityResponse', data?: { __typename?: 'NewsCategoryEntity', id?: string | null, attributes?: { __typename?: 'NewsCategory', name: string, url_name: string } | null } | null } | null } | null }> } | null, articles?: { __typename?: 'ArticleEntityResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, date: any, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', width?: number | null, height?: number | null, url: string, formats?: any | null, alternativeText?: string | null } | null } | null } | null, category?: { __typename?: 'ArticleCatetgoryEntityResponse', data?: { __typename?: 'ArticleCatetgoryEntity', id?: string | null, attributes?: { __typename?: 'ArticleCatetgory', name: string, en_name: string, url_name?: string | null } | null } | null } | null } | null }> } | null, recruits?: { __typename?: 'RecruitEntityResponseCollection', data: Array<{ __typename?: 'RecruitEntity', id?: string | null, attributes?: { __typename?: 'Recruit', title: string, date?: any | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', width?: number | null, height?: number | null, url: string, formats?: any | null, alternativeText?: string | null } | null } | null } | null } | null }> } | null };

export type GetNewsByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetNewsByIdQuery = { __typename?: 'Query', info?: { __typename?: 'InfoEntityResponse', data?: { __typename?: 'InfoEntity', id?: string | null, attributes?: { __typename?: 'Info', title: string, date: any, content: string, meta_description?: string | null, link?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', width?: number | null, height?: number | null, url: string, formats?: any | null, alternativeText?: string | null } | null } | null } | null, news_category?: { __typename?: 'NewsCategoryEntityResponse', data?: { __typename?: 'NewsCategoryEntity', id?: string | null, attributes?: { __typename?: 'NewsCategory', name: string, url_name: string } | null } | null } | null } | null } | null } | null };

export type GetNewsAllQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNewsAllQuery = { __typename?: 'Query', infos?: { __typename?: 'InfoEntityResponseCollection', data: Array<{ __typename?: 'InfoEntity', id?: string | null, attributes?: { __typename?: 'Info', title: string, date: any, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', width?: number | null, height?: number | null, url: string, formats?: any | null, alternativeText?: string | null } | null } | null } | null, news_category?: { __typename?: 'NewsCategoryEntityResponse', data?: { __typename?: 'NewsCategoryEntity', id?: string | null, attributes?: { __typename?: 'NewsCategory', name: string, url_name: string } | null } | null } | null } | null }> } | null };

export type GetRecruitAllQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRecruitAllQuery = { __typename?: 'Query', recruits?: { __typename?: 'RecruitEntityResponseCollection', data: Array<{ __typename?: 'RecruitEntity', id?: string | null, attributes?: { __typename?: 'Recruit', title: string, date?: any | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', width?: number | null, height?: number | null, url: string, formats?: any | null, alternativeText?: string | null } | null } | null } | null } | null }> } | null };

export type GetRecruitByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetRecruitByIdQuery = { __typename?: 'Query', recruit?: { __typename?: 'RecruitEntityResponse', data?: { __typename?: 'RecruitEntity', id?: string | null, attributes?: { __typename?: 'Recruit', title: string, date?: any | null, content: string, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', width?: number | null, height?: number | null, url: string, formats?: any | null, alternativeText?: string | null } | null } | null } | null } | null } | null } | null };

export type GetRecruitsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRecruitsQuery = { __typename?: 'Query', recruits?: { __typename?: 'RecruitEntityResponseCollection', data: Array<{ __typename?: 'RecruitEntity', id?: string | null, attributes?: { __typename?: 'Recruit', title: string, date?: any | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', width?: number | null, height?: number | null, url: string, formats?: any | null, alternativeText?: string | null } | null } | null } | null } | null }> } | null };


export const GetBlogByIdDocument = gql`
    query getBlogById($id: ID!) {
  article(id: $id) {
    data {
      id
      attributes {
        title
        date
        content
        meta_description
        image {
          data {
            attributes {
              width
              height
              url
              formats
              alternativeText
            }
          }
        }
        category {
          data {
            id
            attributes {
              name
              en_name
              url_name
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetBlogByIdQuery__
 *
 * To run a query within a React component, call `useGetBlogByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBlogByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBlogByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetBlogByIdQuery(baseOptions: Apollo.QueryHookOptions<GetBlogByIdQuery, GetBlogByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBlogByIdQuery, GetBlogByIdQueryVariables>(GetBlogByIdDocument, options);
      }
export function useGetBlogByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBlogByIdQuery, GetBlogByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBlogByIdQuery, GetBlogByIdQueryVariables>(GetBlogByIdDocument, options);
        }
export type GetBlogByIdQueryHookResult = ReturnType<typeof useGetBlogByIdQuery>;
export type GetBlogByIdLazyQueryHookResult = ReturnType<typeof useGetBlogByIdLazyQuery>;
export type GetBlogByIdQueryResult = Apollo.QueryResult<GetBlogByIdQuery, GetBlogByIdQueryVariables>;
export const GetBlogAllDocument = gql`
    query getBlogAll {
  articles(sort: "date:desc") {
    data {
      id
      attributes {
        title
        date
        image {
          data {
            attributes {
              width
              height
              url
              formats
              alternativeText
            }
          }
        }
        category {
          data {
            id
            attributes {
              name
              en_name
              url_name
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetBlogAllQuery__
 *
 * To run a query within a React component, call `useGetBlogAllQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBlogAllQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBlogAllQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBlogAllQuery(baseOptions?: Apollo.QueryHookOptions<GetBlogAllQuery, GetBlogAllQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBlogAllQuery, GetBlogAllQueryVariables>(GetBlogAllDocument, options);
      }
export function useGetBlogAllLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBlogAllQuery, GetBlogAllQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBlogAllQuery, GetBlogAllQueryVariables>(GetBlogAllDocument, options);
        }
export type GetBlogAllQueryHookResult = ReturnType<typeof useGetBlogAllQuery>;
export type GetBlogAllLazyQueryHookResult = ReturnType<typeof useGetBlogAllLazyQuery>;
export type GetBlogAllQueryResult = Apollo.QueryResult<GetBlogAllQuery, GetBlogAllQueryVariables>;
export const GetHomeContentsDocument = gql`
    query getHomeContents {
  infos(sort: "date:desc", pagination: {limit: 2}) {
    data {
      id
      attributes {
        title
        date
        image {
          data {
            attributes {
              width
              height
              url
              formats
              alternativeText
            }
          }
        }
        news_category {
          data {
            id
            attributes {
              name
              url_name
            }
          }
        }
      }
    }
  }
  articles(sort: "date:desc", pagination: {limit: 3}) {
    data {
      id
      attributes {
        title
        date
        image {
          data {
            attributes {
              width
              height
              url
              formats
              alternativeText
            }
          }
        }
        category {
          data {
            id
            attributes {
              name
              en_name
              url_name
            }
          }
        }
      }
    }
  }
  recruits(sort: "date:desc", pagination: {limit: 3}) {
    data {
      id
      attributes {
        title
        date
        image {
          data {
            attributes {
              width
              height
              url
              formats
              alternativeText
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetHomeContentsQuery__
 *
 * To run a query within a React component, call `useGetHomeContentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHomeContentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHomeContentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHomeContentsQuery(baseOptions?: Apollo.QueryHookOptions<GetHomeContentsQuery, GetHomeContentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHomeContentsQuery, GetHomeContentsQueryVariables>(GetHomeContentsDocument, options);
      }
export function useGetHomeContentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHomeContentsQuery, GetHomeContentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHomeContentsQuery, GetHomeContentsQueryVariables>(GetHomeContentsDocument, options);
        }
export type GetHomeContentsQueryHookResult = ReturnType<typeof useGetHomeContentsQuery>;
export type GetHomeContentsLazyQueryHookResult = ReturnType<typeof useGetHomeContentsLazyQuery>;
export type GetHomeContentsQueryResult = Apollo.QueryResult<GetHomeContentsQuery, GetHomeContentsQueryVariables>;
export const GetNewsByIdDocument = gql`
    query getNewsById($id: ID!) {
  info(id: $id) {
    data {
      id
      attributes {
        title
        date
        content
        meta_description
        image {
          data {
            attributes {
              width
              height
              url
              formats
              alternativeText
            }
          }
        }
        link
        news_category {
          data {
            id
            attributes {
              name
              url_name
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetNewsByIdQuery__
 *
 * To run a query within a React component, call `useGetNewsByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNewsByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNewsByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetNewsByIdQuery(baseOptions: Apollo.QueryHookOptions<GetNewsByIdQuery, GetNewsByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNewsByIdQuery, GetNewsByIdQueryVariables>(GetNewsByIdDocument, options);
      }
export function useGetNewsByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNewsByIdQuery, GetNewsByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNewsByIdQuery, GetNewsByIdQueryVariables>(GetNewsByIdDocument, options);
        }
export type GetNewsByIdQueryHookResult = ReturnType<typeof useGetNewsByIdQuery>;
export type GetNewsByIdLazyQueryHookResult = ReturnType<typeof useGetNewsByIdLazyQuery>;
export type GetNewsByIdQueryResult = Apollo.QueryResult<GetNewsByIdQuery, GetNewsByIdQueryVariables>;
export const GetNewsAllDocument = gql`
    query getNewsAll {
  infos(sort: "date:desc") {
    data {
      id
      attributes {
        title
        date
        image {
          data {
            attributes {
              width
              height
              url
              formats
              alternativeText
            }
          }
        }
        news_category {
          data {
            id
            attributes {
              name
              url_name
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetNewsAllQuery__
 *
 * To run a query within a React component, call `useGetNewsAllQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNewsAllQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNewsAllQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetNewsAllQuery(baseOptions?: Apollo.QueryHookOptions<GetNewsAllQuery, GetNewsAllQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNewsAllQuery, GetNewsAllQueryVariables>(GetNewsAllDocument, options);
      }
export function useGetNewsAllLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNewsAllQuery, GetNewsAllQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNewsAllQuery, GetNewsAllQueryVariables>(GetNewsAllDocument, options);
        }
export type GetNewsAllQueryHookResult = ReturnType<typeof useGetNewsAllQuery>;
export type GetNewsAllLazyQueryHookResult = ReturnType<typeof useGetNewsAllLazyQuery>;
export type GetNewsAllQueryResult = Apollo.QueryResult<GetNewsAllQuery, GetNewsAllQueryVariables>;
export const GetRecruitAllDocument = gql`
    query getRecruitAll {
  recruits(sort: "date:desc") {
    data {
      id
      attributes {
        title
        date
        image {
          data {
            attributes {
              width
              height
              url
              formats
              alternativeText
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetRecruitAllQuery__
 *
 * To run a query within a React component, call `useGetRecruitAllQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRecruitAllQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRecruitAllQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRecruitAllQuery(baseOptions?: Apollo.QueryHookOptions<GetRecruitAllQuery, GetRecruitAllQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRecruitAllQuery, GetRecruitAllQueryVariables>(GetRecruitAllDocument, options);
      }
export function useGetRecruitAllLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRecruitAllQuery, GetRecruitAllQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRecruitAllQuery, GetRecruitAllQueryVariables>(GetRecruitAllDocument, options);
        }
export type GetRecruitAllQueryHookResult = ReturnType<typeof useGetRecruitAllQuery>;
export type GetRecruitAllLazyQueryHookResult = ReturnType<typeof useGetRecruitAllLazyQuery>;
export type GetRecruitAllQueryResult = Apollo.QueryResult<GetRecruitAllQuery, GetRecruitAllQueryVariables>;
export const GetRecruitByIdDocument = gql`
    query getRecruitById($id: ID!) {
  recruit(id: $id) {
    data {
      id
      attributes {
        title
        date
        content
        image {
          data {
            attributes {
              width
              height
              url
              formats
              alternativeText
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetRecruitByIdQuery__
 *
 * To run a query within a React component, call `useGetRecruitByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRecruitByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRecruitByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetRecruitByIdQuery(baseOptions: Apollo.QueryHookOptions<GetRecruitByIdQuery, GetRecruitByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRecruitByIdQuery, GetRecruitByIdQueryVariables>(GetRecruitByIdDocument, options);
      }
export function useGetRecruitByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRecruitByIdQuery, GetRecruitByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRecruitByIdQuery, GetRecruitByIdQueryVariables>(GetRecruitByIdDocument, options);
        }
export type GetRecruitByIdQueryHookResult = ReturnType<typeof useGetRecruitByIdQuery>;
export type GetRecruitByIdLazyQueryHookResult = ReturnType<typeof useGetRecruitByIdLazyQuery>;
export type GetRecruitByIdQueryResult = Apollo.QueryResult<GetRecruitByIdQuery, GetRecruitByIdQueryVariables>;
export const GetRecruitsDocument = gql`
    query getRecruits {
  recruits(sort: "date:desc", pagination: {limit: 3}) {
    data {
      id
      attributes {
        title
        date
        image {
          data {
            attributes {
              width
              height
              url
              formats
              alternativeText
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetRecruitsQuery__
 *
 * To run a query within a React component, call `useGetRecruitsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRecruitsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRecruitsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRecruitsQuery(baseOptions?: Apollo.QueryHookOptions<GetRecruitsQuery, GetRecruitsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRecruitsQuery, GetRecruitsQueryVariables>(GetRecruitsDocument, options);
      }
export function useGetRecruitsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRecruitsQuery, GetRecruitsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRecruitsQuery, GetRecruitsQueryVariables>(GetRecruitsDocument, options);
        }
export type GetRecruitsQueryHookResult = ReturnType<typeof useGetRecruitsQuery>;
export type GetRecruitsLazyQueryHookResult = ReturnType<typeof useGetRecruitsLazyQuery>;
export type GetRecruitsQueryResult = Apollo.QueryResult<GetRecruitsQuery, GetRecruitsQueryVariables>;