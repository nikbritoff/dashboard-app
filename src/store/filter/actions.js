export const filterActionType = {
  add: 'ADD_FILTER',
  remove: 'REMOVE_FILTER',
  clear: 'CLEAR_FILTER',
};

export const addFilter = (filter) => ({
  type: filterActionType.add,
  payload: filter,
});

export const removeFilter = (filter) => ({
  type: filterActionType.remove,
  payload: filter,
});

export const clearFilter = () => ({
  type: filterActionType.clear,
});
