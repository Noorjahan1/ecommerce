import React from 'react'
import Rating from '@/app/component/Rating/page'
export default function Review({reviews}) {
  return (
    <div >
      {reviews?reviews.map((review) => (
        <div key={review.reviewerEmail} className="flex flex-col gap-4 p-4 border-b border-gray-300">
          <h2 className="text-lg font-bold">{review.reviewerName}</h2>
          <p className="text-gray-700">{review.comment}</p>
          <Rating rating={review.rating}/>
          <p className="text-sm text-gray-500">Date: {new Date(review.date).toLocaleDateString()}</p>
        </div>
      )):null}
    </div>
  )
}
