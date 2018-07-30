import { FETCH_VIDEOS, CHANGE_FILTER_CRITERIA } from '../actions/index';

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_VIDEOS:
      return 'most_popular_cache';
    case CHANGE_FILTER_CRITERIA:
      return action.payload.filterCriteria;
    default:
      return state;
  }
}
