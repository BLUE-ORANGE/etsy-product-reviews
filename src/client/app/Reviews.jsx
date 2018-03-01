import React from 'react';
import $ from 'jquery';
import Review from './Review.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
    this.random.bind(this);
    this.fetch();
  }

  random() {
    return Math.floor(Math.random() * 200);
  }

  fetch() {
    const data = this.random();
    $.ajax({
      url: `http://127.0.0.1:3004/v1/products/${data}/reviews`,
      method: 'GET',
      success: (reviewsData) => {
        console.log('successfully got review data');
        this.setState({
          reviews: reviewsData,
        });
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
        {this.state.reviews.map(review => <Review review={review} key={review.id} />)}
        <button onClick={() => this.fetch()} type="button">Fetch reviews here!</button>
      </div>
    );
  }
}

export default Reviews;

