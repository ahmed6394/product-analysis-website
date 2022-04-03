import React from "react";

const Review = (props) => {
  const { name, rating, comment } = props.review;
  return (
    <div className="review-container">
      <h4>Customer Name:{name}</h4>
      <p>
        <small>Rating: {rating}</small>
      </p>
      <p>{comment}</p>
    </div>
  );
};

export default Review;
