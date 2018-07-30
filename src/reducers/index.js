import { combineReducers } from 'redux';
import VideosReducer from './reducer_videos';
import ActiveVideosReducer from './reducer_active_videos';
import filterCriteriaReducer from './reducer_filter_criteria';
import sortCacheReducer from './reducer_sort_cache';

const rootReducer = combineReducers({
  videos: VideosReducer,
  activeVideos: ActiveVideosReducer,
  filterCriteria: filterCriteriaReducer,
  sortCache: sortCacheReducer,
});

export default rootReducer;
