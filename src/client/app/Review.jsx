import React from 'react';
import Star from './Star.jsx';


class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: ['hey'],
      pictures: [],
      stars: [],
    };
  }

  componentDidMount() {
    this.totalStars();
  }

  totalStars() {
    const stars = [];
    const noStars = [];
    for (let i = 0; i < this.props.review.rating; i += 1) {
      stars.push('hi');
    }
    for (let i = 0; i < (5 - this.props.review.rating); i += 1) {
      noStars.push('hi');
    }
    this.setState({
      stars: stars,
      noStars: noStars,
    });
  }

  render() {
    return (
      <div id="review">
        <div id="userInfo">
          <div>
            Thumbnail
          </div>
          Reviewed by {this.props.review.userName}
        </div>
        <div>
          <div id="ratingDate">
            <div id="rating">
              {this.state.stars.map(() => <Star />)}
            </div>
            <div id="date">
              Mar 1, 2018
            </div>
          </div>
          <div>
            {this.props.review.review}
          </div>
        </div>
      </div>
    );
  }
}

export default Review;
