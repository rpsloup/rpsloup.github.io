import { createSlice } from '@reduxjs/toolkit';

import type { Window } from '../../typings/window';

interface InitialStateDefaultObject {
  startMenuOpen: boolean;
  windows: Window[];
}

const INITIAL_STATE: InitialStateDefaultObject = {
  startMenuOpen: false,
  windows: [],
};

const uiSlice = createSlice({
  name: 'ui',
  initialState: INITIAL_STATE,
  reducers: {
    toggleStartMenu: (state) => {
      state.startMenuOpen = !state.startMenuOpen;
    },
    createWindow: (state) => {
      state.startMenuOpen = false;
      state.windows.push({
        id: 0,
      });
    },
  },
});

export const { toggleStartMenu, createWindow } = uiSlice.actions;
export default uiSlice.reducer;
