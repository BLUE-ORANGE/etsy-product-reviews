import React from 'react';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: this.props.reviews,
    };
  }

  showReviewData() {
    console.log(this.state.reviews);
  }

  render() {
    return (
      <div>
        this will be an individual review with thumbnails, stars, and the review
        <button onClick={() => this.showReviewData()} type="button">Check review data</button>
      </div>
    );
  }
}

export default Review;
