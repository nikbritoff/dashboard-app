import { combineReducers } from 'redux';
import { vacanciesReducer } from './vacancies/reducer';
import { filterReducer } from './filter/reducer';

export const rootReducer = combineReducers({
  vacancies: vacanciesReducer,
  filter: filterReducer,
});