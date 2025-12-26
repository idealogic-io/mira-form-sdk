/**
 * CMS API endpoints constants.
 */
export const CMS_ENDPOINTS = {
  CATEGORIES: '/api/v1/cms/categories',
  ARTICLES_INDEXES: '/api/v1/cms/articles-indexes',
  ALL_ARTICLES_INDEXES: '/api/v1/cms/all/articles-indexes',
} as const;

/**
 * Default HTTP headers for CMS API requests.
 */
export const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
} as const;

/**
 * Default error message when API response doesn't contain one.
 */
export const DEFAULT_ERROR_MESSAGE = 'Unknown error';

