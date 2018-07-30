import React from 'react';
import PropTypes from 'prop-types';
import VideoThumb from './video_thumb';
import VideoDetails from './video_details';

const VideoTile = ({ video }) => {
  return (
    <div className="video-tile">
      <div className="video-tile__wrapper">
        <VideoThumb video={video} />
        <VideoDetails video={video} />
      </div>
    </div>
  );
};

VideoTile.propTypes = {
  video: PropTypes.object,
};

export default VideoTile;
