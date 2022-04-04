import React from "react";
import useReviews from "../../Hooks/useRevies";
import TV from "../../img/SAMSUNG.jpg";
import Review from "../Review/Review";

import "./HomePage.css";

const HomePage = () => {
  const [reviews, setReviews] = useReviews();
  return (
    <div>
      <div className="home-container">
        <div className="photo-container">
          <img className="photo" src={TV} alt="" height={350} />
        </div>
        <div className="info-container">
          <h1>SAMSUNG 55-Inch QLED- 4K UHD Dual LED Quantum HDR Smart TV</h1>
          <h4>Product Description</h4>
          <p>
            Start your 4K journey today with the Q60A QLED 4K TV. This Samsung
            55 inch TV lets you enter a world saturated with color and sharpened
            to refreshing clarity, all of it made possible through the power of
            Quantum Dot technology. You'll be able to enjoy a billion shades of
            color with 100% Color Volume on its quantum dot display,* along with
            an expanded range of brilliant color and contrast from Quantum HDR.
            And, you can see sharp details delivered by the warm and cool Dual
            LED backlights that adjust in real time. Your entertainment is
            automatically upgraded to 4K UHD with Quantum Processor 4K Lite.**
            Your Smart TV Powered by Tizen gives you access to your favorite
            apps and streaming services like Netflix, Prime Video and Google TV.
          </p>
        </div>
      </div>
      <div className="short-review-container">
        <h2>Customer Reviews</h2>
        {reviews.slice(0, 3).map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
