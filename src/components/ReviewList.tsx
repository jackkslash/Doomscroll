import React from 'react'
import { Review } from '../types/types';

interface ReviewProps {
    reviews: Review[];
}

export default async function ReviewList({ reviews }: ReviewProps) {
    return (
        <div>ReviewList
            {reviews.map((review: Review) => (
                <div key={review.profileID}>
                    <p>Username: {review.profileUsername}</p>
                    <p>Comment: {review.reviewComment}</p>
                    <p>Rating: {review.reviewRating}/10 Stars</p>
                    <p>Date: {review.reviewDate.substring(0, 10)}</p>
                    <br />
                </div>
            ))}
        </div>
    )
}
