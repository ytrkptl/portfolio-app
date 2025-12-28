import { combineReducers } from '@reduxjs/toolkit';

import { cardsReducer } from './cards/cards.reducer';
import { projectsReducer } from './projects/projects.reducer';

export const rootReducer = combineReducers({
  cards: cardsReducer,
  projects: projectsReducer
});
