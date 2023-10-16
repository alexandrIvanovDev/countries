import type { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    value: '',
    option: '',
  } as InitialState,
  reducers: {
    changeValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    changeOption: (state, action: PayloadAction<string>) => {
      state.option = action.payload;
    },
  },
});

export const { changeValue, changeOption } = filterSlice.actions;

type InitialState = {
  option: string;
  value: string;
};

export type Option = {
  label: string;
  value: string;
};
