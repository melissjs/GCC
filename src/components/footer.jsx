import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__upper">
          <div className="footer__menu-col footer__menu-first">
            <div className="footer__title footer__menu-title">
              Gaia
            </div>
            <ul className="footer__menu-links">
              <li>
                <a className="footer__menu-links__item" href="https://www.gaia.com/lp/about/">
                  About Gaia
                </a>
              </li>
              <li>
                <a className="footer__menu-links__item" href="https://gaiasupportcenter.zendesk.com/hc/en-us/articles/223618027-Which-devices-can-I-use-to-stream-Gaia-">
                  Devices
                </a>
              </li>
              <li>
                <a className="footer__menu-links__item" href="https://www.gaia.com/terms-privacy#community-posting-guidelines">
                  Community Guidelines
                </a>
              </li>
              <li>
                <a className="footer__menu-links__item" href="https://www.gaia.com/terms-privacy">
                  Terms of Use and Privacy
                </a>
              </li>
              <li>
                <a className="footer__menu-links__item" href="https://www.gaia.com/terms-privacy#anti-spam-policy">
                  Spam Policy
                </a>
              </li>
              <li>
                <a className="footer__menu-links__item" href="https://www.gaia.com/lp/article-sitemap/">
                  Articles Sitemap
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__menu-col footer__menu-second">
            <div className="footer__title footer__menu-title">
              Community
            </div>
            <ul className="footer__menu-links">
              <li>
                <a className="footer__menu-links__item" href="https://gaiasupportcenter.zendesk.com/hc/en-us">
                  Help Center
                </a>
              </li>
              <li>
                <a className="footer__menu-links__item" href="https://www.gaia.com/lp/careers/">
                  Careers
                </a>
              </li>
              <li>
                <a className="footer__menu-links__item" href="https://www.gaia.com/lp/write-for-gaia/">
                  Write for Gaia
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__menu-col footer__menu-third">
            <div className="footer__title footer__menu-title">
              More From Gaia
            </div>
            <div className="footer__menu-links">
              <li>
                <a className="footer__menu-links__item" href="https://www.spiritualcinemacircle.com/">
                  Spiritual Cinema Circle
                </a>
              </li>
              <li>
                <a className="footer__menu-links__item" href="http://ir.gaia.com/">
                  Investor Relations
                </a>
              </li>
            </div> 
          </div>
        </div>
        <div className="footer__lower">
          <div className="social-buttons">
            <div className="footer__title social-buttons__title">
              Connect with us
            </div>
            <div className="social-buttons__button">
              <i className="flaticon-size flaticon-facebook-logo-button" />
              <i className="flaticon-size flaticon-twitter-logo-button" />
              <i className="flaticon-size flaticon-social-instagram-circle" />
              <i className="flaticon-size flaticon-youtube" />
              <i className="flaticon-size flaticon-pinterest" />
            </div>
          </div>
          <div className="app-links">
            <div className="footer__title app-links__title">
              Gaia Apps
            </div>
            <ul className="app-links__list">
              <li className="app-links__list-item">
                <a href="https://channelstore.roku.com/details/9354/gaia" className="app-links__link--roku">
                  <img alt="" className="app-links__list-item--img" src="../../../src/assets/roku.svg" />
                </a>
              </li>
              <li className="app-links__list-item">
                <a href="https://play.google.com/store/apps/details?id=com.gaiamtv&hl=en" className="app-links__link--android">
                  <img alt="" className="app-links__list-item--img" src="../../../src/assets/android.svg" />
                </a>
              </li>
              <li className="app-links__list-item">
                <a href="https://itunes.apple.com/us/app/gaia-conscious-yoga-meditation-and-spirituality/id821068605?mt=8" className="app-links__link--iphone">
                  <img alt="" className="app-links__list-item--img" src="../../../src/assets/iphone.svg" />
                </a>
              </li>
              <li className="app-links__list-item">
                <a href="https://itunes.apple.com/us/app/gaia-conscious-yoga-meditation-and-spirituality/id821068605?mt=8" className="app-links__list-item app-links__link--ipad">
                  <img alt="" className="app-links__list-item--img" src="../../../src/assets/ipad.svg" />
                </a>
              </li>
              <li className="app-links__list-item">
                <a href="https://itunes.apple.com/us/app/gaia-conscious-yoga-meditation-and-spirituality/id821068605?mt=8" className="app-links__link--tv">
                  <img alt="" className="app-links__list-item--img" src="../../../src/assets/tv.svg" />
                </a>
              </li>
              <li className="app-links__list-item">
                <a href="https://www.amazon.com/Gaia-Fire-TV-Meditation-Spirituality/dp/B01N9SQC83/ref=sr_1_1?s=mobile-apps&ie=UTF8&qid=1487105671&sr=1-1&keywords=gaia" className="app-links__link--amazon">
                  <img alt="" className="app-links__list-item--img app-links__link-last" src="../../../src/assets/amazon.svg" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
