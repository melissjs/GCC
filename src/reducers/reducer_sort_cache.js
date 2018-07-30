import { FETCH_VIDEOS } from '../actions/index';

export default function (state = {}, action) {
  const stateCopy = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case FETCH_VIDEOS:
      stateCopy.most_popular_cache = JSON.parse(JSON.stringify(action.payload.videos.titles));
      return stateCopy;
    default:
      return state;
  }
}
