import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import VideoTile from '../components/video_tile';
import { fetchVideos } from '../actions/index';

class VideoList extends Component {
  componentDidMount() {
    const { fetchVideos } = this.props;
    fetchVideos();
  }

  RenderVideoTileArr() {
    const { activeVideos } = this.props;
    return activeVideos.map(video => <VideoTile video={video} key={video.nid} />);
  }

  render() {
    const { activeVideos } = this.props;
    return (
      <div className="video-list">
        <div className="video-list__wrapper">
          {activeVideos ? this.RenderVideoTileArr() : null}
        </div>
      </div>
    );
  }
}

VideoList.propTypes = {
  videos: PropTypes.object,
  activeVideos: PropTypes.array,
  filterCriteria: PropTypes.string,
  fetchVideos: PropTypes.func,
};


function mapStateToProps({ videos, activeVideos, filterCriteria }) {
  return {
    videos,
    activeVideos,
    filterCriteria,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchVideos }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
