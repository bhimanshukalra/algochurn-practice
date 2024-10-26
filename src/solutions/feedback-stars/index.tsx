import { useState } from "react";
import { Star } from "./components/star";

type FeedbackStarsProps = {
  numberOfStars?: number;
};

const FeedbackStars = ({ numberOfStars = 5 }: FeedbackStarsProps) => {
  const [rating, setRating] = useState(1);
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <>
      <p>{numberOfStars}</p>
      <div className="flex">
        <div className="flex border">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <Star
                key={index}
                id={index + 1}
                onMouseEnter={() => setHoverRating(index + 1)}
                onMouseLeave={() => setHoverRating(0)}
                rating={hoverRating || rating}
                onClick={() => setRating(index + 1)}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default FeedbackStars;
