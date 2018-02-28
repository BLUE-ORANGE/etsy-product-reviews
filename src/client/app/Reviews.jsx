import React from 'react';
import $ from 'jquery';
import Review from './Review.jsx';

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
        this.state.reviews = reviews;
        console.log(this.state.reviews);
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
        <Review reviews={this.state.reviews} />
        <button onClick={() => this.fetch()} type="button">Fetch reviews here!</button>
      </div>
    );
  }
}

export default Reviews;

