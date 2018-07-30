import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Hero extends Component {
  render() {
    let { videos } = this.props;
    let shortDesc;
    (videos != null) ? shortDesc = videos.term.body.substring(0,247)+"..." : null;
    return (
      <div>
        { videos ? (
          <div className="hero" id="hero">
            <div className="hero-image__image" style={{ backgroundImage: `url(${videos.term.termImages.hero.hero_1070x300})` }}>
              <div className="hero-subcategory__wrapper">
                <div className="hero-subcategory__title">
                  {videos.term.name}
                </div>
                <div className="hero-subcategory__short-description">
                  {shortDesc}
                </div>
                <div className="hero-readmore">
                  <a className="hero-readmore__link" href="#popup">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>) : (
            <div className="spinner">
              <img alt="" src="../../../src/assets/loading.gif" />
            </div>) }
        <div id="popup" className="popup">
          <div className="popup__content">
            <a href="#hero" className="popup__close">
              &times;
            </a>
            { videos ? (
              <div className="subcategory-description-full__title">
                {videos.term.name}
              </div>) : null }
            { videos ? (
              <div className="subcategory-description-full__description">
                {videos.term.body}
              </div>) : null }
          </div>
        </div>
      </div>
    );
  };
};

Hero.propTypes = {
  videos: PropTypes.object,
};

function mapStateToProps({ videos }) {
  return {
    videos,
  };
}

export default connect(mapStateToProps)(Hero);
