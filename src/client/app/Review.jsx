import React from 'react';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: ['hey'],
      pictures: [],
    };
  }

  showReviewData() {
    this.setState({
      reviews: this.props.review,
    });
    console.log(this.state.reviews);
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
              {this.props.review.rating}
            </div>
            <div id="date">
              Mar 1, 2018
            </div>
          </div>
          <div>
            {this.props.review.review}
          </div>
        </div>
        this will be an individual review with thumbnails, stars, and the review
        <button onClick={() => this.showReviewData()} type="button">Check review data</button>
      </div>
    );
  }
}

export default Review;
