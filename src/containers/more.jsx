import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { clickMore } from '../actions/index';

class More extends Component {
  render() {
    let { sortCache, activeVideos, filterCriteria, clickMore } = this.props;
    return (
      <div className="load-more">
        <div className="load-more-btn btn btn__large btn--primary" onClick={() => clickMore({ sortCache, activeVideos, filterCriteria })}>
          Load More
        </div>
      </div>
    );
  };
};

More.propTypes = {
  sortCache: PropTypes.object,
  activeVideos: PropTypes.array,
  filterCriteria: PropTypes.string,
};

function mapStateToProps({ sortCache, activeVideos, filterCriteria }) {
  return {
    sortCache,
    activeVideos,
    filterCriteria,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ clickMore }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(More);
