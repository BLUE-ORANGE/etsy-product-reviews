/* global document */

import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from './Reviews.jsx';
import styles from '../styles.css';

const App = () => (
  <div>
    <p> Richards Reviews!</p>
    <Reviews />
  </div>
);

// ReactDOM.render(<App />, document.getElementById('app'));

export default ReactDOM.render(<App />, document.getElementById('reviews'));