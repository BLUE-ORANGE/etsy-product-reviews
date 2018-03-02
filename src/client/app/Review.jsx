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

  // totalStars() {
  //   let arr = [];
  //   for (let i = 0; i < this.props.review.rating; i++) {
  //     arr.push('hi');
  //   }
  //   this.setState({
  //     stars: 
  //   })
  // }

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
              {this.props.review.rating}
              <Star />
              <Star />
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
