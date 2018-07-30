import React from 'react';
import PropTypes from 'prop-types';

const VideoThumb = ({ video }) => {
  const thumbnail = video.hero_image.hero_570x300;
  const isNew = video.is_new;
  let newFlag;

  if (isNew) {
    newFlag = (
      <div className="videothumb__new">
        new episode
      </div>);
  } else {
    newFlag = null;
  }

  return (
    <div className="videothumb">
      <div className="videothumb__wrapper">
        {newFlag}
        <div className="videothumb__buttons">
          <i className="videothumb__playBtn flaticon-play-button" />
          <i className="videothumb__moreBtn flaticon-more" />
        </div>
        <div className="videothumb__img" style={{ backgroundImage: `url(${thumbnail})` }} />
      </div>
    </div>
  );
};

VideoThumb.propTypes = {
  video: PropTypes.object,
};

export default VideoThumb;
