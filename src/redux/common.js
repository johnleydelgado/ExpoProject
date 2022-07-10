import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  openModals: [],
  openAlerts: [],
  isFetching: false,
};

export const common = createSlice({
  name: 'common',
  initialState,
  reducers: {
    /**
     * OPEN_MODAL
     * @param {string} action.payload - name of modal to be opened
     * @returns {string[]} array of name of modals that should be opened
     */
    OPEN_MODAL: (state, action) => {
      state.openModals =
        state.openModals.filter((x) => x === action.payload).length > 0
          ? state.openModals
          : [...state.openModals, action.payload];
    },
    /**
     * CLOSE_MODAL
     * @param {string} action.payload - name of modal to be closed
     * @returns {string[]} array of name of modals without the payload
     */
    CLOSE_MODAL: (state, action) => {
      state.openModals =
        state.openModals.filter((x) => x === action.payload).length > 0
          ? state.openModals.filter((x) => x !== action.payload)
          : state.openModals;
    },

    /**
     * OPEN_MODAL
     * @param {string} action.payload - name of alert to be opened
     * @returns {string[]} array of name of alert that should be opened
     */
    OPEN_ALERT: (state, action) => {
      state.openAlerts =
        state.openAlerts.filter((x) => x === action.payload).length > 0
          ? state.openAlerts
          : [...state.openAlerts, action.payload];
    },
    /**
     * CLOSE_MODAL
     * @param {string} action.payload - name of alert to be closed
     * @returns {string[]} array of name of alert without the payload
     */
    CLOSE_ALERT: (state, action) => {
      state.openAlerts =
        state.openAlerts.filter((x) => x === action.payload).length > 0
          ? state.openAlerts.filter((x) => x !== action.payload)
          : state.openAlerts;
    },
    RESET_ALERT: (state, action) => {
      state.openAlerts = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { OPEN_MODAL, CLOSE_MODAL, OPEN_ALERT, CLOSE_ALERT, RESET_ALERT } = common.actions;

export default common.reducer;
