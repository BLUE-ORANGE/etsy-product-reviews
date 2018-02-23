import React from 'react';
import {render} from 'react-dom';
import Reviews from './Reviews.jsx';


class App extends React.Component {
  render () {
    return (
      <div>
        <p> Richard's Reviews</p>
        <Reviews />
      </div>
    );
  } 
}

render(<App/>, document.getElementById('app'));

