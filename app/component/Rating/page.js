import React from 'react';

const RatingStars = ({ rating, maxRating = 5, starSize = 30, starColor = 'gold', emptyStarColor = 'lightgray' }) => {
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating - filledStars >= 0.5;
  const emptyStars = maxRating - filledStars - (hasHalfStar ? 1 : 0);

  const stars = [];

  // Add filled stars
  for (let i = 0; i < filledStars; i++) {
    stars.push(
      <span key={`filled-${i}`} style={{ color: starColor, fontSize: `${starSize}px` }}>
        &#9733; {/* Full star */}
      </span>
    );
  }

  // Add half star
  if (hasHalfStar) {
    stars.push(
      <span key="half" style={{ position: 'relative', display: 'inline-block', width: `${starSize}px`, fontSize: `${starSize}px` }}>
        <span style={{ color: starColor, position: 'absolute', width: '50%', overflow: 'hidden' }}>
          &#9733; {/* Half-filled star */}
        </span>
        <span style={{ color: emptyStarColor }}>
          &#9733; {/* Empty star behind the half-filled star */}
        </span>
      </span>
    );
  }

  // Add empty stars
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <span key={`empty-${i}`} style={{ color: emptyStarColor, fontSize: `${starSize}px` }}>
        &#9734; {/* Empty star */}
      </span>
    );
  }

  return <div>{stars}</div>;
};

export default RatingStars;