import React from "react";
import useReviews from "../../Hooks/useRevies";
import Review from "../Review/Review";

const Reviews = (props) => {
  const [reviews, setReviews] = useReviews();

  return (
    <div>
      <h2>Customer Reviews</h2>
      {reviews.map((review) => (
        <Review key={review.id} review={review}></Review>
      ))}
    </div>
  );
};

export default Reviews;
