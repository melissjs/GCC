import { CHANGE_FILTER_CRITERIA } from '../actions/index';

export default ({ dispatch }) => (next) => (action) => {
  if (action.type == CHANGE_FILTER_CRITERIA && !action.payload.sortCache[action.payload.filterCriteria]){
    switch(action.payload.filterCriteria) {
      case 'most_popular_cache':
        if (!action.payload.sortCache.most_popular_cache) {
          action.payload.sortCache.most_popular_cache = JSON.parse(JSON.stringify(action.payload.videos.titles));
        }
        break;
      case 'alphabetical_cache':
        if (!action.payload.sortCache.alphabetical_cache) {
          let tempAlphabeticalVideos = JSON.parse(JSON.stringify(action.payload.videos.titles.sort((a, b) => { 
            let titleA = a.title.toUpperCase();
            let titleB = b.title.toUpperCase();
            if (titleA < titleB) {
              return -1;
            } 
            if (titleB < titleA) {
              return 1;
            } 
            return 0;
          })));
          action.payload.sortCache.alphabetical_cache = tempAlphabeticalVideos;
        }
        break;
      case 'recently_added_cache':
        if (!action.payload.sortCache.recently_added_cache) {
          let tempRecentlyAddedVideos = JSON.parse(JSON.stringify(action.payload.videos.titles.sort((a, b) => { 
            return b.created - a.created;
          })));
          action.payload.sortCache.recently_added_cache = tempRecentlyAddedVideos;
          }
        break;
      default:
          console.log('Defaulting on filter switch IN MIDDLEWARE')
  }
  const newAction = { ...action };
  dispatch(newAction);
  } 
  return next(action);
};
