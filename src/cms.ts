import { MiraCMSOptions, CMSResponse } from './types';
import { CMS_ENDPOINTS } from './constants';
import { sendRequest } from './request'

/**
 * Represents a resource instance for interacting with CMS content.
 */
export class MiraResource {
  private readonly resourceId: string;
  private readonly apiKey: string;
  private readonly options: MiraCMSOptions;

  constructor(resourceId: string, apiKey: string, options: MiraCMSOptions) {
    this.resourceId = resourceId;
    this.apiKey = apiKey;
    this.options = options;
  }

  /**
   * Gets categories for the resource.
   *
   * @param {string} key - The key to identify the categories.
   * @param {string} [lang] - Optional language code.
   * @return {Promise<CMSResponse>} A promise that resolves to the categories data.
   */
  public async getCategories(key: string, lang?: string): Promise<CMSResponse> {
    return sendRequest(
      CMS_ENDPOINTS.CATEGORIES,
      { resourceId: this.resourceId, key, lang },
      { baseUrl: this.options.baseUrl!, apiKey: this.apiKey }
    );
  }

  /**
   * Gets articles indexes for the resource.
   *
   * @param {string} key - The key to identify the articles index (e.g., 'blog/articles-index.json').
   * @param {string} [lang] - Optional language code (e.g., 'en').
   * @return {Promise<CMSResponse>} A promise that resolves to the articles indexes data.
   */
  public async getArticlesIndexes(key: string, lang?: string): Promise<CMSResponse> {
    return sendRequest(
      CMS_ENDPOINTS.ARTICLES_INDEXES,
      { resourceId: this.resourceId, key, lang },
      { baseUrl: this.options.baseUrl!, apiKey: this.apiKey }
    );
  }
}

/**
 * MiraCMS SDK for interacting with CMS content like categories and articles.
 */
export class MiraCMS {
  private readonly apiKey: string;
  private readonly options: MiraCMSOptions;

  /**
   * Creates a new MiraCMS instance.
   *
   * @param {string} apiKey - The API key for authentication.
   * @param {MiraCMSOptions} [options] - Optional configuration options.
   */
  constructor(apiKey: string, options?: MiraCMSOptions) {
    this.apiKey = apiKey;
    this.options = options || {};
  }

  /**
   * Initializes a resource instance for the given resource ID.
   *
   * @param {string} resourceId - The UUID of the resource.
   * @return {MiraResource} A resource instance with methods to interact with CMS content.
   */
  public initResource(resourceId: string): MiraResource {
    return new MiraResource(resourceId, this.apiKey, this.options);
  }


  /**
   * Gets articles indexes for the resource.
   *
   * @param {string} key - The key to identify the articles index (e.g., 'blog/articles-index.json').
   * @param {string} [lang] - Optional language code (e.g., 'en').
   * @param {number} [page] - Optional page number for pagination.
   * @param {number} [limit] - Optional limit of items per page.
   * @param {string[]} resourceIds - The UUID of the resource.
   * @return {Promise<CMSResponse>} A promise that resolves to the articles indexes data.
   */
  public async getAllArticlesIndexes(resourceIds: string[], key: string, page?: number, limit?: number, lang?: string): Promise<CMSResponse> {
    return sendRequest(
      CMS_ENDPOINTS.ALL_ARTICLES_INDEXES,
      { resourceIds, key, lang, page, limit },
      { baseUrl: this.options.baseUrl!, apiKey: this.apiKey }
    );
  }
}
