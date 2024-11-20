/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  collections: {
    posts: Post;
    categories: Category;
    uploads: Upload;
    versions: Version;
    'categories-versions': CategoriesVersion;
    singular: Singular;
    'localized-posts': LocalizedPost;
    'localized-categories': LocalizedCategory;
    'restricted-categories': RestrictedCategory;
    'restricted-posts': RestrictedPost;
    users: User;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {
    categories: {
      relatedPosts: 'posts';
      hasManyPosts: 'posts';
      hasManyPostsLocalized: 'posts';
      'group.relatedPosts': 'posts';
      'group.camelCasePosts': 'posts';
      filtered: 'posts';
      singulars: 'singular';
    };
    uploads: {
      relatedPosts: 'posts';
    };
    'categories-versions': {
      relatedVersions: 'versions';
    };
    'localized-categories': {
      relatedPosts: 'localized-posts';
    };
    'restricted-categories': {
      restrictedPosts: 'posts';
    };
  };
  collectionsSelect: {
    posts: PostsSelect<false> | PostsSelect<true>;
    categories: CategoriesSelect<false> | CategoriesSelect<true>;
    uploads: UploadsSelect<false> | UploadsSelect<true>;
    versions: VersionsSelect<false> | VersionsSelect<true>;
    'categories-versions': CategoriesVersionsSelect<false> | CategoriesVersionsSelect<true>;
    singular: SingularSelect<false> | SingularSelect<true>;
    'localized-posts': LocalizedPostsSelect<false> | LocalizedPostsSelect<true>;
    'localized-categories': LocalizedCategoriesSelect<false> | LocalizedCategoriesSelect<true>;
    'restricted-categories': RestrictedCategoriesSelect<false> | RestrictedCategoriesSelect<true>;
    'restricted-posts': RestrictedPostsSelect<false> | RestrictedPostsSelect<true>;
    users: UsersSelect<false> | UsersSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: string;
  };
  globals: {};
  globalsSelect: {};
  locale: 'en' | 'es';
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "posts".
 */
export interface Post {
  id: string;
  title?: string | null;
  isFiltered?: boolean | null;
  restrictedField?: string | null;
  upload?: (string | null) | Upload;
  category?: (string | null) | Category;
  categories?: (string | Category)[] | null;
  categoriesLocalized?: (string | Category)[] | null;
  group?: {
    category?: (string | null) | Category;
    camelCaseCategory?: (string | null) | Category;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "uploads".
 */
export interface Upload {
  id: string;
  relatedPosts?: {
    docs?: (string | Post)[] | null;
    hasNextPage?: boolean | null;
  } | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "categories".
 */
export interface Category {
  id: string;
  name?: string | null;
  relatedPosts?: {
    docs?: (string | Post)[] | null;
    hasNextPage?: boolean | null;
  } | null;
  hasManyPosts?: {
    docs?: (string | Post)[] | null;
    hasNextPage?: boolean | null;
  } | null;
  hasManyPostsLocalized?: {
    docs?: (string | Post)[] | null;
    hasNextPage?: boolean | null;
  } | null;
  group?: {
    relatedPosts?: {
      docs?: (string | Post)[] | null;
      hasNextPage?: boolean | null;
    } | null;
    camelCasePosts?: {
      docs?: (string | Post)[] | null;
      hasNextPage?: boolean | null;
    } | null;
  };
  singulars?: {
    docs?: (string | Singular)[] | null;
    hasNextPage?: boolean | null;
  } | null;
  filtered?: {
    docs?: (string | Post)[] | null;
    hasNextPage?: boolean | null;
  } | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "singular".
 */
export interface Singular {
  id: string;
  category?: (string | null) | Category;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "versions".
 */
export interface Version {
  id: string;
  category?: (string | null) | Category;
  categoryVersion?: (string | null) | CategoriesVersion;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "categories-versions".
 */
export interface CategoriesVersion {
  id: string;
  relatedVersions?: {
    docs?: (string | Version)[] | null;
    hasNextPage?: boolean | null;
  } | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "localized-posts".
 */
export interface LocalizedPost {
  id: string;
  title?: string | null;
  category?: (string | null) | LocalizedCategory;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "localized-categories".
 */
export interface LocalizedCategory {
  id: string;
  name?: string | null;
  relatedPosts?: {
    docs?: (string | LocalizedPost)[] | null;
    hasNextPage?: boolean | null;
  } | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "restricted-categories".
 */
export interface RestrictedCategory {
  id: string;
  name?: string | null;
  restrictedPosts?: {
    docs?: (string | Post)[] | null;
    hasNextPage?: boolean | null;
  } | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "restricted-posts".
 */
export interface RestrictedPost {
  id: string;
  title?: string | null;
  restrictedField?: string | null;
  category?: (string | null) | RestrictedCategory;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: string;
  document?:
    | ({
        relationTo: 'posts';
        value: string | Post;
      } | null)
    | ({
        relationTo: 'categories';
        value: string | Category;
      } | null)
    | ({
        relationTo: 'uploads';
        value: string | Upload;
      } | null)
    | ({
        relationTo: 'versions';
        value: string | Version;
      } | null)
    | ({
        relationTo: 'categories-versions';
        value: string | CategoriesVersion;
      } | null)
    | ({
        relationTo: 'singular';
        value: string | Singular;
      } | null)
    | ({
        relationTo: 'localized-posts';
        value: string | LocalizedPost;
      } | null)
    | ({
        relationTo: 'localized-categories';
        value: string | LocalizedCategory;
      } | null)
    | ({
        relationTo: 'restricted-categories';
        value: string | RestrictedCategory;
      } | null)
    | ({
        relationTo: 'restricted-posts';
        value: string | RestrictedPost;
      } | null)
    | ({
        relationTo: 'users';
        value: string | User;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "posts_select".
 */
export interface PostsSelect<T extends boolean = true> {
  title?: T;
  isFiltered?: T;
  restrictedField?: T;
  upload?: T;
  category?: T;
  categories?: T;
  categoriesLocalized?: T;
  group?:
    | T
    | {
        category?: T;
        camelCaseCategory?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "categories_select".
 */
export interface CategoriesSelect<T extends boolean = true> {
  name?: T;
  relatedPosts?: T;
  hasManyPosts?: T;
  hasManyPostsLocalized?: T;
  group?:
    | T
    | {
        relatedPosts?: T;
        camelCasePosts?: T;
      };
  singulars?: T;
  filtered?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "uploads_select".
 */
export interface UploadsSelect<T extends boolean = true> {
  relatedPosts?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "versions_select".
 */
export interface VersionsSelect<T extends boolean = true> {
  category?: T;
  categoryVersion?: T;
  updatedAt?: T;
  createdAt?: T;
  _status?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "categories-versions_select".
 */
export interface CategoriesVersionsSelect<T extends boolean = true> {
  relatedVersions?: T;
  updatedAt?: T;
  createdAt?: T;
  _status?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "singular_select".
 */
export interface SingularSelect<T extends boolean = true> {
  category?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "localized-posts_select".
 */
export interface LocalizedPostsSelect<T extends boolean = true> {
  title?: T;
  category?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "localized-categories_select".
 */
export interface LocalizedCategoriesSelect<T extends boolean = true> {
  name?: T;
  relatedPosts?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "restricted-categories_select".
 */
export interface RestrictedCategoriesSelect<T extends boolean = true> {
  name?: T;
  restrictedPosts?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "restricted-posts_select".
 */
export interface RestrictedPostsSelect<T extends boolean = true> {
  title?: T;
  restrictedField?: T;
  category?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  // @ts-ignore 
  export interface GeneratedTypes extends Config {}
}