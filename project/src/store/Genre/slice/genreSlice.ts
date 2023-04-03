import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {GenreName, GenreState} from '../../../types/genre';

const initialState: GenreState = {
  selected: GenreName.ALL_GENRES
};

const genreSlice = createSlice({
  name: 'genre',
  initialState,
  reducers: {
    select: (state, action: PayloadAction<GenreName>) => {
      state.selected = action.payload;
    },
  },
});

export const {actions: genreActions} = genreSlice;
export default genreSlice.reducer;
