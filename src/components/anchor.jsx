import React, { Component } from 'react';
import { throttle } from 'lodash';

class Anchor extends Component {
  constructor(props) {
    super(props);

    // this.handleClickScrollIcon = this.handleClickScrollIcon.bind(this);
    this.handleIconScroll = this.handleIconScroll.bind(this);

    this.state = {
        iconVisible: false
    };
}

componentDidMount() {
  this.scrollListener = throttle(this.handleIconScroll, 100);
  this.touchListener = throttle(this.handleIconScroll, 120);
  window.addEventListener('scroll', this.scrollListener, { passive: true });
  window.addEventListener("touchmove", this.touchListener, { passive: true });
}

componentWillUnmount() {
  window.removeEventListener('scroll', this.scrollListener);
  window.removeEventListener("touchmove", this.touchListener);
}

handleIconScroll() {
  if (window.scrollY <= 260) {
      this.state.iconVisible && this.setState({ iconVisible: false });
  }
  else {
      !this.state.iconVisible && this.setState({ iconVisible: true });
  }
}

  render() {
    return (
      <div className="anchor">
        <a href="#header-app">
          <i className={ this.state.iconVisible ? "anchor__img--show anchor__img flaticon-up-arrow" : "anchor__img--hide anchor__img flaticon-up-arrow"} />
        </a>
      </div>
    );
  }
}

export default Anchor;
