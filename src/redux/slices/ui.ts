import { createSlice, current } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

import type { PayloadAction } from '@reduxjs/toolkit';

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
      const maxElevation = state.windows.length
        ? Math.max(...state.windows.map((window) => window.elevation))
        : -1;

      state.startMenuOpen = false;
      state.windows = [
        ...state.windows.map((window) => ({ ...window, active: false })),
        {
          id: uuid(),
          title: 'Window',
          active: true,
          elevation: maxElevation + 1,
        },
      ];
    },
    closeWindow: (state, action: PayloadAction<Window['id']>) => {
      state.windows = state.windows.filter(
        (window) => window.id !== action.payload
      );
    },
    toggleWindowActive: (state, action: PayloadAction<Window['id']>) => {
      state.windows = current(state.windows).map((window) =>
        window.id === action.payload
          ? { ...window, active: true }
          : { ...window, active: false }
      );
    },
  },
});

export const {
  toggleStartMenu,
  createWindow,
  closeWindow,
  toggleWindowActive,
} = uiSlice.actions;
export default uiSlice.reducer;
