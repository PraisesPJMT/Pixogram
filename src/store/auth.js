import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { API_STATUS, APP_THEME } from "../utilities/enums";

import API from "./api";

/**
 * A Zustand store for managing user authentication and state.
 *
 * @returns {object} An object containing the store's properties and functions.
 */
export const useAuth = create()(
  devtools(
    persist(
      (set, get) => ({
        /**
         * The current user, or `null` if the user is not authenticated.
         *
         * @type {object|null}
         */
        user: null,

        /**
         * The current status of the authentication process.
         *
         * @type {API_STATUS}
         */
        status: API_STATUS.IDLE,

        /**
         * Any message associated with the current status.
         *
         * @type {string}
         */
        message: "",

        /**
         * A boolean value indicating whether the user is authenticated.
         *
         * @type {boolean}
         */
        isAuthenticated: false,

        /**
         * The current theme of the application.
         *
         * @type {APP_THEME}
         */
        theme: APP_THEME.LIGHT,

        /**
         * Initializes the store and fetches the current user's authentication status.
         *
         * @returns {void}
         */
        init: () => {
          set((state) => ({
            ...state,
            state: API_STATUS.LOADING,
          }));
        },

        /**
         * Attempts to log in the user with the provided form data.
         *
         * @param {object} formData The form data to use for login.
         *
         * @returns {Promise<{status: API_STATUS, user: object, isAuthenticated: boolean, message: string}}}> A promise that resolves to the login status and user information.
         */
        login: async (formData) => {
          get().init();

          const { status, user, isAuthenticated, message } =
            API.login(formData);

          set((state) => ({
            ...state,
            user,
            status,
            isAuthenticated,
            message,
          }));
        },

        /**
         * Logs the user out.
         *
         * @returns {void}
         */
        logout: () => {
          set((state) => ({
            ...state,
            user: null,
            status: API_STATUS.IDLE,
            message: "",
            isAuthenticated: false,
          }));
        },

        /**
         * Toggles the theme of the application between dark and light.
         *
         * @returns {void}
         */
        toggleTheme: () => {
          set((state) => ({
            ...state,
            theme:
              state.theme === APP_THEME.LIGHT
                ? APP_THEME.DARK
                : APP_THEME.LIGHT,
          }));
        },
      }),
      {
        name: "auth-store",
      }
    )
  )
);
