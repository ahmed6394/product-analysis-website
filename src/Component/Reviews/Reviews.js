import React from "react";
import useReviews from "../../Hooks/useRevies";
import Review from "../Review/Review";

const Reviews = (props) => {
  const [reviews, setReviews] = useReviews();

  return (
    <div>
      <h4>Reviews...</h4>
      {reviews.map((review) => (
        <Review key={review.id} review={review}></Review>
      ))}
    </div>
  );
};

export default Reviews;
