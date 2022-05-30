export const ADD_VACANCIES = 'ADD_VACANCIES';

export const addVacancies = (vacancies) => ({
  type: ADD_VACANCIES,
  payload: vacancies,
});
