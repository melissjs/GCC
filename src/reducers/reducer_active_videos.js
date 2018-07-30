import { FETCH_VIDEOS, CLICK_MORE, CHANGE_FILTER_CRITERIA } from '../actions/index';

export default function (state = null, action) {
  let newActive;
  switch (action.type) {
    case FETCH_VIDEOS:
      return action.payload.activeVideos;
    case CLICK_MORE:
      newActive = action.payload.activeVideos.concat(action.payload.sortCache[action.payload.filterCriteria].slice(action.payload.activeVideos.length, action.payload.activeVideos.length + 16));
      return newActive;
    case CHANGE_FILTER_CRITERIA:
      return action.payload.sortCache[action.payload.filterCriteria].slice(0, 16);
    default:
      return state;
  }
}
