import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

import type { PayloadAction } from '@reduxjs/toolkit';

import type { Window } from '../../typings/window';

interface InitialStateDefaultObject {
  startMenuOpen: boolean;
  windows: Window[];
  currentBackground: string | null;
}

const INITIAL_STATE: InitialStateDefaultObject = {
  startMenuOpen: false,
  windows: [],
  currentBackground: null,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState: INITIAL_STATE,
  reducers: {
    toggleStartMenu: (state) => {
      state.startMenuOpen = !state.startMenuOpen;
    },
    createWindow: (
      state,
      action: PayloadAction<{
        title: string;
        content: JSX.Element;
      }>
    ) => {
      const maxElevation = state.windows.length
        ? Math.max(...state.windows.map((window) => window.elevation))
        : -1;

      state.startMenuOpen = false;
      state.windows = [
        ...state.windows.map((window) => ({ ...window, active: false })),
        {
          id: uuid(),
          title: action.payload.title,
          active: true,
          elevation: maxElevation + 1,
          content: action.payload.content,
        },
      ];
    },
    closeWindow: (state, action: PayloadAction<Window['id']>) => {
      state.windows = state.windows.filter(
        (window) => window.id !== action.payload
      );
    },
    toggleWindowActive: (state, action: PayloadAction<Window['id']>) => {
      const maxElevation = Math.max(
        ...state.windows.map((window) => window.elevation)
      );

      state.startMenuOpen = false;
      state.windows = state.windows.map((window, index) =>
        window.id === action.payload
          ? {
              ...window,
              active: true,
              elevation: maxElevation,
            }
          : {
              ...window,
              active: false,
              elevation:
                window.elevation >
                state.windows.filter(
                  (window) => window.id === action.payload
                )[0].elevation
                  ? state.windows[index].elevation - 1
                  : window.elevation,
            }
      );
    },
    resetWindowFocus: (state) => {
      state.startMenuOpen = false;
      state.windows = state.windows.map((window) => ({
        ...window,
        active: false,
      }));
    },
    setCurrentBackground: (state, action: PayloadAction<string>) => {
      state.currentBackground = action.payload;
    },
  },
});

export const {
  toggleStartMenu,
  createWindow,
  closeWindow,
  toggleWindowActive,
  resetWindowFocus,
  setCurrentBackground,
} = uiSlice.actions;
export default uiSlice.reducer;
