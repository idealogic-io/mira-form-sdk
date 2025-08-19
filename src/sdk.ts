import { MiraFormSDKOptions } from './types';
import {
  PrepareFormDataParams,
  PreparedFormData,
  SendFormResponse,
} from './types';


/**
 * A class to interact with the MiraForm API for creating and sending form data.
 */
export class MiraFormSDK {
  private readonly apiKey: string;
  private options: MiraFormSDKOptions;

  constructor(apiKey: string, options?: MiraFormSDKOptions) {
    this.apiKey = apiKey;
    this.options = options || {};
  }


  /**
   * Prepares form data for submission by validating the input parameters and appending them to a FormData object.
   *
   * @param {PrepareFormDataParams} params - The input parameters for preparing the form data.
   * - resourceId: The ID of the resource (required).
   * - formId: The ID of the form (required).
   * - content: The content object to include (optional, must be a valid object).
   * - files: An array of files to include in the form data (optional).
   *
   * @return {PreparedFormData} An object containing the prepared FormData object or error messages if validation fails.
   */
  public prepareFormData(params: PrepareFormDataParams): PreparedFormData {
    const errors: string[] = [];
    if (!params.resourceId) errors.push('resourceId is required');
    if (!params.formId) errors.push('formId is required');
    if (params.content && typeof params.content !== 'object') errors.push('content must be a valid object');
    if (errors.length) return { formData: null as any, errors };

    const formData = new FormData();
    formData.append('resourceId', params.resourceId);
    formData.append('formId', params.formId);
    formData.append('content', JSON.stringify(params.content));
    if (params.files) {
      params.files.forEach((file, idx) => {
        formData.append(`file_${idx}`, file as any);
      });
    }
    return { formData };
  }

  /**
   * Sends a form to the specified API endpoint.
   *
   * @param {FormData} formData - The form data to be sent to the server.
   * @return {Promise<SendFormResponse>} A promise that resolves to an object indicating the success of the operation, the server response data, and any errors encountered.
   */
  public async sendForm(formData: FormData): Promise<SendFormResponse> {
    const url = `${this.options.baseUrl}/api/v1/send`;
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Authentication': `Bearer ${this.apiKey}`,
        },
        body: formData,
      });
      const data = await res.json();
      return { success: res.ok, data, errors: !res.ok ? [data?.message || 'Unknown error'] : undefined };
    } catch (e: any) {
      return { success: false, errors: [e.message] };
    }
  }
}
