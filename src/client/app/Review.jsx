import React from 'react';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: ['hey'],
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
      <div>
        this will be an individual review with thumbnails, stars, and the review
        <button onClick={() => this.showReviewData()} type="button">Check review data</button>
      </div>
    );
  }
}

export default Review;
