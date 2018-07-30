
import axios from 'axios';

export const FETCH_VIDEOS = 'FETCH_VIDEOS'
export const CLICK_MORE = 'CLICK_MORE';
export const CHANGE_FILTER_CRITERIA = 'CHANGE_FILTER_CRITERIA';

export function fetchVideos() {
  const request = axios.get('https://brooklyn.gaia.com/videos/term/119931');
  return {
    type: FETCH_VIDEOS,
    payload: request,
  };
}

export function clickMore(values) {
  return {
    type: CLICK_MORE,
    payload: values,
  };
}

export function changeFilter(values) {
  return {
    type: CHANGE_FILTER_CRITERIA,
    payload: values,
  };
}
