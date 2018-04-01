import React from 'react';
import $ from 'jquery';
import Review from './Review.jsx';
import Star from './Star.jsx';
import NoStars from './NoStars.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      id: 10,
      rating: 0,
      stars: [],
      noStars: [],
      thumbnails: ['https://i.imgur.com/bOgVa8h.jpg', 'https://i.imgur.com/NPWfoCx.jpg', 'https://i.imgur.com/RdnSJ6Q.jpg', 'https://i.imgur.com/XZ4GEKf.png'],
    };
  }

  componentWillMount() {
    const idPathname = window.location.pathname.slice(12, window.location.pathname.length - 1);
    this.setState({
      id: Number(idPathname),
    });
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

  totalStars() {
    const stars = [];
    const noStars = [];
    for (let i = 0; i < this.state.rating; i += 1) {
      stars.push('hi');
    }
    for (let i = 0; i < (5 - this.state.rating); i += 1) {
      noStars.push('hi');
    }
    this.setState({
      stars: stars,
      noStars: noStars,
    });
  }

  fetch() {
    $.ajax({
      url: `/v1/product/${this.state.id}/reviews`,
      method: 'GET',
      success: (reviewsData) => {
        console.log('successfully got review data', reviewsData);
        this.setState({
          reviews: reviewsData,
          rating: reviewsData.rating,
        });
        this.averageReview();
        this.totalStars();
        console.log(this.state.id, 'inside ajax with id');
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
          <strong id="strong">Reviews</strong>   
          {this.state.stars.map(() => <Star />)}
          {this.state.noStars.map(() => <NoStars />)}
          <div id="reviewCount">({this.state.reviews.length})</div>
        </div>
        {this.state.reviews.map((review, id) => <Review review={review} key={review.id} id={id} picture={this.state.thumbnails} />)}
      </div>
    );
  }
}

export default Reviews;

