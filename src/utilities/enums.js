/**
 * App enums
 */

/**
 * Enum representing the status of an API request.
 * @readonly
 * @enum {string}
 * @property {string} IDLE - The API request is in an idle state.
 * @property {string} LOADING - The API request is currently loading.
 * @property {string} SUCCEEDED - The API request has succeeded.
 * @property {string} FAILED - The API request encountered an error.
 */
export const API_STATUS = {
  IDLE: "IDLE",
  LOADING: "LOADING",
  SUCCEEDED: "SUCCEEDED",
  FAILED: "FAILED",
};

/**
 * Enum representing the a notification type.
 * @readonly
 * @enum {string}
 * @property {string} SUCCESS - The success notice type.
 * @property {string} WARNING - The warning notice type.
 * @property {string} ERROR - The error notice type.
 */
export const NOTICE_TYPE = {
  SUCCESS: "SUCCESS",
  WARNING: "WARNING",
  ERROR: "ERROR",
};

/**
 * Enum representing the application theme moe.
 * @readonly
 * @enum {string}
 * @property {string} LIGHT - Light app theme mode.
 * @property {string} DARK - Dark app theme mode.
 */
export const APP_THEME = {
  LIGHT: "LIGHT",
  DARK: "DARK",
};

/**
 * The debounce time (in milliseconds) used for search operations.
 * @type {number}
 * @constant
 */
export const SEARCH_DEBOUNCE = 1;

/**
 * The time (in seconds) duration for notification display.
 * @type {number}
 * @constant
 */
export const NOTICE_INTERVAL = 5;

/**
 * The number of photos to be displayed per page.
 * @type {number}
 * @constant
 */
export const LIST_PER_PAGE = 25;
