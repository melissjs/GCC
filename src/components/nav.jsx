import React from 'react';
import SearchBar from './search_bar';

const Nav = () => {
  return (
    <div>
      <div id="header-app" className="header">
        <div className="header__top">
          <div className="header__branding">
            <div className="header__menu__icon">
              <i className="flaticon-menu" />
            </div>
            <a className="header__logo" href="#">
              <img alt="logo" src="../../../src/assets/gaia.svg" />
            </a>
          </div>
          <div className="user-menu">
            <a href="#">
              <div className="user-menu__username">
                Melissjs
              </div>
              <i className="user-menu__avatar flaticon-user" />
            </a>
          </div>
        </div>
        <div className="header__bottom">
          <div className="navigation u-float-lt">
            <ul className="menu">
              <li className="menu-item menu-item__link">
                My Gaia
              </li>
              <li className="menu-item menu-item__link">
                Yoga
              </li>
              <li className="menu-item menu-item__link menu-item__link__active">
                Seeking truth
              </li>
              <li className="menu-item menu-item__link">
                Transformation
              </li>
              <li className="menu-item menu-item__link">
                Films & Docs
              </li>
              <li className="menu-item menu-item__link">
                Centers
              </li>
            </ul>
          </div>
          <div className="search">
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
};


export default Nav;
