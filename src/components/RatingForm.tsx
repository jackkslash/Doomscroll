'use client'
import React, { useState } from 'react';
import StarRating from './StarRating';
import { submitReview } from '@/app/media/[id]/actions';

interface IdProps {
    id: string | string[];
}

const RatingForm = ({ id }: IdProps) => {
    const [body, setBody] = useState<string>('');
    const [rating, setRating] = useState<number>(0);

    const handleBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setBody(e.target.value);
    };

    const handleRatingChange = (value: number) => {
        setRating(value);
    };

    return (
        <form action={submitReview}>
            <div className="mb-4">
                <label htmlFor="body" className="block text-gray-700 font-bold mb-2">Body:</label>
                <textarea
                    value={body}
                    onChange={handleBodyChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    rows={4}
                    name='body'
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Rating:</label>
                <input type="hidden" name="rating" value={rating} />
                <StarRating initialValue={rating} onSave={handleRatingChange} />
            </div>
            <input type="hidden" name="id" value={id} />
            <button type="submit" className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
        </form>
    );
};

export default RatingForm;
