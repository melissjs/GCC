import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search">
        <input className="search__input" value={this.state.term} onChange={event => this.setState({ term: event.target.value })} />
        <i className="search__img flaticon-search" />
      </div>
    );
  }
}

export default SearchBar;
