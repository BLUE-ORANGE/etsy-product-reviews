import React from 'react';
import $ from 'jquery';
import Review from './Review.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      id: 0,
      rating: 0,
    };
  }

  componentWillMount() {
    this.random();
  }

  componentDidMount() {
    this.fetch();
  }

  random() {
    const idz = Math.floor(Math.random() * 200);
    this.setState({
      id: idz,
    });
  }

  fetch() {
    $.ajax({
      url: `/v1/products/${this.state.id}/reviews`,
      method: 'GET',
      success: (reviewsData) => {
        console.log('successfully got review data');
        this.setState({
          reviews: reviewsData,
        });
        this.averageReview();
        console.log(this.state.reviews);
      },
      error: () => {
        console.error('failed to fetch reviews');
      },
    });
  }

  averageReview() {
    let total = 0;
    const length = this.state.reviews.length;
    for (let i = 0; i < length; i += 1) {
      total += this.state.reviews[i].rating;
    }
    const totalRating = Math.round(total / length);
    this.setState({
      rating: totalRating
    });
  }

  render() {
    return (
      <div id="mainContainer">
        <div id="totalReviews">
          <strong>Reviews</strong>   {this.state.rating}   <div id="reviewCount">({this.state.reviews.length})</div>
        </div>
        {this.state.reviews.map(review => <Review review={review} key={review.id} />)}
        <button onClick={() => this.fetch()} type="button">Fetch reviews here!</button>
      </div>
    );
  }
}

export default Reviews;

