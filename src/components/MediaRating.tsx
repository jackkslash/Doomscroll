import { Rating, Ratings } from '@/types/types'
import React from 'react'

// {
//     ratings: [
//       { rating: 4, count: 6 },
//       { rating: 1, count: 1 },
//       { rating: 0, count: 2 }
//     ],
//     averageRating: 2.7777777777777777
//   }

interface RatingProps { ratings: Ratings }

export default function ({ ratings }: RatingProps) {
    return (
        <div>
            <div >
                <div >
                    <div>Rating {ratings.averageRating} of 5</div>
                </div>
            </div>

            {ratings.ratings.map((rating: Rating) => (
                <div key={rating.rating}>
                    <div>{rating.count} users rated this {rating.rating} out of 5</div>
                </div>
            ))}
        </div>
    )
}
