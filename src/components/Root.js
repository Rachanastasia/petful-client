import React, { useState } from 'react';
import Header from './Header';
import LandingPage from './LandingPage';
import Adopt from './Adopt';
import Footer from './Footer';

import '../css/globals.css';
import '../css/styles.css';

function Root() {
  const [content, setContent] = useState('main')
  return (
    <main>
      <Header />
      {
        content === 'main'
          ? <LandingPage />
          : <Adopt />

      }
      <Footer />
    </main>
  )
}

export default Root
