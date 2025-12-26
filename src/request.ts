import { CMSResponse } from './types';
import { DEFAULT_HEADERS, DEFAULT_ERROR_MESSAGE } from './constants';

export interface RequestOptions {
  baseUrl: string;
  apiKey: string;
}

export interface RequestBody {
  resourceId: string;
  key: string;
  lang?: string;
}

/**
 * Sends a POST request to the CMS API.
 *
 * @param {string} endpoint - The API endpoint path.
 * @param {RequestBody} body - The request body.
 * @param {RequestOptions} options - Request configuration options.
 * @return {Promise<CMSResponse>} A promise that resolves to the API response.
 */
export async function sendRequest(
  endpoint: string,
  body: RequestBody,
  options: RequestOptions
): Promise<CMSResponse> {
  const url = `${options.baseUrl}${endpoint}`;
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        ...DEFAULT_HEADERS,
        'Authorization': `Bearer ${options.apiKey}`,
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return {
      success: res.ok,
      data,
      errors: !res.ok ? [data?.message || DEFAULT_ERROR_MESSAGE] : undefined,
    };
  } catch (e: any) {
    return { success: false, errors: [e.message] };
  }
}
