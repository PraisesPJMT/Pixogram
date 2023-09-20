import { create } from "zustand";
import { generateRandomID } from "../utilities/helpers";

/**
 * A Zustand store for managing notices.
 */
export const useNotice = create()((set) => ({
  // Notices
  notices: [],

  /**
   * Sets a notice.
   *
   * @param {object} notice The notice to set.
   * @param {string} notice.type The type of the notice.
   * @param {string} notice.message The message of the notice.
   */
  setNotice: (notice) => {
    const { type, message } = notice;
    set((state) => ({
      ...state,
      notices: [...state.notices, { id: generateRandomID(), type, message }],
    }));
  },

  /**
   * Removes a notice.
   *
   * @param {string} id The ID of the notice to remove.
   */
  removeNotice: (id) => {
    set((state) => ({
      ...state,
      notices: [...state.notices.filter((notice) => notice.id !== id)],
    }));
  },
}));
