export const selectVacancies = (state) => state.vacancies;

export const selectVisibleVacancies = (state, filters) => {
  if (filters.length === 0) {
    return state.vacancies;
  }

  return state.vacancies.filter((vacancy) => {
    const vacancyFilters = new Array(0).concat(
      vacancy.role, 
      vacancy.level,
      ...vacancy.languages,
      ...vacancy.tools,
      );

      return filters.every((filter) => vacancyFilters.includes(filter));
  });
};
