import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { changeFilter } from '../actions/index';


class Filter extends Component {
  filterChange = (event) => {
    this.props.changeFilter({ videos: this.props.videos, sortCache: this.props.sortCache, filterCriteria: event.target.value });
  }

  render() {
    return (
      <div className="filter">
        <div className="filter__wrapper">
          <div className="filter__label">
            Sort By
          </div>
          <select id="dropdown" className="filter__select" onChange={this.filterChange}>
            <option className="filter__select__item" value="most_popular_cache">
              Most popular
            </option>
            <option className="filter__select__item" value="recently_added_cache">
              Recently added
            </option>
            <option className="filter__select__item" value="alphabetical_cache">
              Alphabetical
            </option>
          </select>
        </div>
      </div>
    );
  }
}

Filter.propTypes = {
  videos: PropTypes.object,
  sortCache: PropTypes.object,
  filterCriteria: PropTypes.string,
  changeFilter: PropTypes.func,
};

function mapStateToProps({ videos, sortCache, filterCriteria }) {
  return {
    videos,
    sortCache,
    filterCriteria,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeFilter }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
