import React from 'react';
import Review from './Review.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        this will be where all the reviews will be rendered
        <Review />
      </div>
    );
  }
}

export default Reviews;
