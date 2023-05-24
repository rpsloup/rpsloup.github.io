import { createSlice } from '@reduxjs/toolkit';

interface InitialStateDefaultObject {
  startMenuOpen: boolean;
}

const INITIAL_STATE: InitialStateDefaultObject = {
  startMenuOpen: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState: INITIAL_STATE,
  reducers: {
    toggleStartMenu: (state) => {
      state.startMenuOpen = !state.startMenuOpen;
    },
  },
});

export const { toggleStartMenu } = uiSlice.actions;
export default uiSlice.reducer;
