import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { API_STATUS, APP_THEME } from "../utilities/enums";
import API from "./api";

export const useAuth = create()(
  devtools(
    persist(
      (set, get) => ({
        user: null,
        status: API_STATUS.IDLE,
        message: "",
        isAuthenticated: false,
        theme: APP_THEME.LIGHT,
        init: () => {
          set((state) => ({
            ...state,
            state: API_STATUS.LOADING,
          }));
        },
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
        logout: () => {
          set((state) => ({
            ...state,
            user: null,
            status: API_STATUS.IDLE,
            message: "",
            isAuthenticated: false,
            theme: APP_THEME.LIGHT,
          }));
        },
        setTheme: () => {
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
