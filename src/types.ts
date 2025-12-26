/**
 * Configuration options for the MiraForm SDK.
 * This interface defines the optional parameters that can be used
 * to customize the behavior of the MiraForm SDK.
 *
 * @property baseUrl - The base URL to which the SDK will send requests. If not provided, a default URL may be used.
 * @property timeout - Specifies the timeout duration (in milliseconds) for requests. If not set, a default timeout may apply.
 */
export interface MiraFormSDKOptions {
  baseUrl?: string;
  timeout?: number;
}

/**
 * Represents the parameters required to prepare form data.
 *
 * This interface is used to encapsulate the necessary properties
 * needed to prepare and manage form data, including associated files
 * and form-specific identifiers.
 *
 * Properties:
 * - `resourceId` (string): The unique identifier (UUID) for the resource being processed.
 * - `formId` (string): The unique identifier (UUID) for the form.
 * - `content` (Record<string, any>): A key-value mapping of the form's content data.
 * - `files` (File[] | undefined): Optional. An array of files to be associated with the form data.
 */
export interface PrepareFormDataParams {
  resourceId: string; // uuid
  formId: string; // uuid
  content: Record<string, any>;
  files?: File[];
}

/**
 * Represents prepared form data including the form data object and possible errors.
 *
 * This interface is used for handling form submissions where form data and error messages
 * need to be managed concurrently.
 *
 * @interface
 * @property {FormData} formData - The form data object to be processed or submitted.
 * @property {string[]} [errors] - An optional array of error messages that may be associated
 * with the form data, such as validation issues or processing errors.
 */
export interface PreparedFormData {
  formData: FormData;
  errors?: string[];
}

/**
 * Represents the response for sending a form.
 *
 * The `SendFormResponse` interface is designed to encapsulate the result of a form submission action. It includes information about the success or failure of the submission, any associated data, and a list of error messages if applicable.
 *
 * Properties:
 * - `success` (boolean): Indicates whether the form submission was successful.
 * - `data` (optional): Contains any additional data or payload returned from the submission process. The type of this property is not explicitly defined and can vary based on the implementation.
 * - `errors` (optional): An array of error messages associated with the form submission. This property is present when the submission fails.
 */
export interface SendFormResponse {
  success: boolean;
  data?: any;
  errors?: string[];
}

/**
 * Configuration options for the MiraCMS SDK.
 */
export interface MiraCMSOptions {
  baseUrl?: string;
  timeout?: number;
}

/**
 * Parameters for getting articles indexes.
 */
export interface GetArticlesIndexesParams {
  key: string;
  lang?: string;
}

/**
 * Parameters for getting categories.
 */
export interface GetCategoriesParams {
  key: string;
  lang?: string;
}

/**
 * Response from CMS API requests.
 */
export interface CMSResponse<T = any> {
  success: boolean;
  data?: T;
  errors?: string[];
}
