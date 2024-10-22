import React from 'react';
import Header from './Header';
import Hero from './Hero';
import FeaturedTheses from './FeaturedTheses';
import Footer from './Footer';
import LatestUpdates from './LatestUpdates';
function Home() {
  return (
    <div data-theme="dark">
      {/* <Header /> */}
      <Hero />
      <LatestUpdates/>
      <FeaturedTheses />
      <Footer />
    </div>
  );
}

export default Home;
