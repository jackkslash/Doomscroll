import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

interface StarRatingProps {
    initialValue: number;
    onSave: (value: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ initialValue, onSave }) => {
    const [rating, setRating] = useState<number>(initialValue);
    const [hoverRating, setHoverRating] = useState<number>(0);

    const handleMouseOver = (value: number) => {
        setHoverRating(value);
    };

    const handleMouseLeave = () => {
        setHoverRating(0);
    };

    const handleClick = () => {
        setRating(hoverRating);
        onSave(hoverRating);
    };

    return (
        <div className="flex items-center">
            {[...Array(10)].map((_, index) => {
                const starValue: number = index + 1;
                const isHovered = hoverRating >= starValue;
                const isSelected = rating >= starValue;
                return (
                    <span
                        key={index}
                        onMouseOver={() => handleMouseOver(starValue)}
                        onMouseLeave={handleMouseLeave}
                        onClick={handleClick}
                        className="cursor-pointer"
                    >
                        {isHovered || isSelected ? (
                            <FaStar
                                className={`w-8 h-8 text-green-500 ${isSelected && 'opacity-100'} `}
                            />
                        ) : (
                            <FaStar className="w-8 h-8 text-gray-300" />
                        )}
                    </span>
                );
            })}
        </div>
    );
};

export default StarRating;
