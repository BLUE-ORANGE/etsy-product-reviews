import React from 'react';
import Review from './Review.jsx';
import $ from 'jquery';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
  }

  fetch() {
    $.ajax({
      url: 'http://127.0.0.1:3004/v1/products/120/reviews',
      method: 'GET',
      success: (reviews) => {
        console.log('successfully got review data');
        reviews.forEach(review => this.state.reviews.push(review));
      },
      error: () => {
        console.error('failed to fetch reviews');
      },
    });
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
