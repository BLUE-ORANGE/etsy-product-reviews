import React from 'react';
import Star from './Star.jsx';
import NoStars from './NoStars.jsx';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stars: [],
      noStars: [],
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
      stars,
      noStars,
    });
  }

  render() {
    return (
      <div id="review">
        <div id="userInfo">
          <img className="userThumbnails" src={`../thumbnails/${this.props.id}.jpg`} />
          <br />
          Reviewed by <br />
          {this.props.review.userName}
        </div>
        <div id="otherStuff">
          <div id="ratingDate">
            <div id="rating">
              {this.state.stars.map(() => <Star />)}
              {this.state.noStars.map(() => <NoStars />)}
            </div>
            <div id="date">
              {this.props.review.date}
            </div>
          </div>
          <div className="productReview">
            {this.props.review.review}
          </div>
          <div className="itemReview">
            <img className="itemThumbnail" src="../thumbnails/4.jpg" />
            <div className="itemreviews">
              {this.props.review.itemReview}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Review;
