import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  cards: [
    { name: 'About Me', id: 'about-me', url: 'about-me', isExternal: false },
    { name: 'Projects', id: 'projects', url: 'projects', isExternal: false },
    { name: 'Developer', id: 'developer', url: 'developer', isExternal: false },
    {
      name: 'Blog',
      id: 'blog',
      url: 'https://blog.yatrik.dev/',
      isExternal: true
    },
    { name: 'Teacher', id: 'teacher', url: 'teacher', isExternal: false },
    { name: 'Contact', id: 'contact', url: 'contact', isExternal: false },
    { name: 'Credits', id: 'credits', url: 'credits', isExternal: false }
  ]
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState: INITIAL_STATE,
  reducers: {
    setCards(state, action) {
      state.cards = action.payload;
    }
  }
});

export const { setCards } = cardsSlice.actions;
export const cardsReducer = cardsSlice.reducer;
