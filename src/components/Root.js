import React, { useState } from 'react';
import Header from './Header';
import LandingPage from './LandingPage';
import Adopt from './Adopt';

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
    </main>
  )
}

export default Root
