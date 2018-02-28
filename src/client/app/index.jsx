/* global document */

import React from 'react';
import { render } from 'react-dom';
import Reviews from './Reviews.jsx';

const App = () => (
  <div>
    <p> Richards Reviews!</p>
    <Reviews />
  </div>
);

render(<App />, document.getElementById('app'));

