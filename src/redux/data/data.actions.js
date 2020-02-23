import DataActionTypes from './data.types';

export const fetchData = data => ({
  type: DataActionTypes.FETCH_DATA,
  payload: data
});
