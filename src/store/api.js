/**
 * All API methods
 */

import { API_STATUS } from "../utilities/enums";

/**
 * An object containing API functions.
 */
const API = {
  /**
   * Logs in a user.
   *
   * @param {object} formData The login form data.
   * @param {string} formData.email The user's email address.
   * @param {string} formData.password The user's password.
   * @returns {object} An object containing the API response data.
   * @returns {API_STATUS} returns.status The API status code.
   * @returns {object} returns.user The user object, if the login was successful.
   * @returns {boolean} returns.isAuthenticated Whether the login was successful.
   * @returns {string} returns.message A message describing the API response.
   */
  login: (formData) => {
    const { email, password } = formData;

    if (email === "user@example.com" && password === "1Password") {
      return {
        status: API_STATUS.SUCCEEDED,
        user: { email },
        isAuthenticated: true,
        message: "Login successful!",
      };
    } else {
      return {
        status: API_STATUS.FAILED,
        user: null,
        isAuthenticated: false,
        message: "Invalid credentials!",
      };
    }
  },
};

export default API;
