import React from 'react';

import Nav from './nav';
import Hero from '../containers/hero';
import Filter from '../containers/filter';
import VideoList from '../containers/video_list';
import More from '../containers/more';
import Anchor from './anchor';
import Footer from './footer';

const App = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Filter />
      <VideoList />
      <More />
      <Anchor />
      <Footer />
    </div>
  );
};

export default App;
