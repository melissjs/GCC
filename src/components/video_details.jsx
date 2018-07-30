import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

moment().format();

const VideoDetails = ({ video }) => {
  const seriesOrEpisode = video.type;
  let seriesOrEpisodeTitle;
  let seriesAndEpisodeWithTime;
  let totalEpisodes;
  if (seriesOrEpisode === 'product_video' && video.series !== undefined) {
    seriesOrEpisodeTitle = (
      <div className="tile-episode__series-title">
        {video.series.title}
      </div>);
  } else {
    seriesOrEpisodeTitle = (
      <div className="tile-episode__series-flag">
        series
      </div>);
  }
  if (video.fields.season && video.fields.episode) {
    const time = Math.round(moment.duration(video.feature.duration * 1000).asMinutes());
    seriesAndEpisodeWithTime = (
      <div className="video-details__season-episode">
        S
        {video.fields.season[0].value}
        :E
        {video.fields.episode[0].value}
        &nbsp;
        {time}
        mins
      </div>);
  }
  if (video.type === 'product_series') {
    const numOfEpisodes = video.total_episodes;
    totalEpisodes = (
      <div className="video-details__episodes">
        {numOfEpisodes}
        &nbsp;
        Episodes
      </div>);
  }
  const up = video.fivestar.up_count.value;
  const down = video.fivestar.down_count.value;
  const total = up + down;
  const upPercent = Math.round((up * 100) / total);
  const downPercent = Math.round((down * 100) / total);

  return (
    <div className="video-details">
      <div className="video-details__wrapper">
        <div className="video-details__one">
          {seriesOrEpisodeTitle}
          <div className="vote">
            <i className="vote__like flaticon-like" />
            <i className="like">
              {upPercent}
              %
            </i>
            <span className="dislike">
              <i className="vote__dislike flaticon-finger" />
              {downPercent}
              %
            </span>
          </div>
        </div>
        <div className="tile-episode__title">
          {video.title}
        </div>
        <div className="video-details-three">
          {seriesAndEpisodeWithTime}
          {totalEpisodes}
        </div>
      </div>
    </div>
  );
};

VideoDetails.propTypes = {
  video: PropTypes.object,
};

export default VideoDetails;
