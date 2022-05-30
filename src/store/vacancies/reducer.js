import { ADD_VACANCIES } from './actions';

const initialState = [];

export const vacanciesReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_VACANCIES: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
};
