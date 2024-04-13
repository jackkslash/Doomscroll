import React from 'react'
import MediaItem from '../../../components/MediaItem'
import RatingForm from '@/components/RatingForm'
import { getMediaById, getMediaRatings, getMediaReviews } from './actions'
import ReviewList from '@/components/ReviewList'
import MediaRating from '@/components/MediaRating'


export default async function Page({
    params,
}: {
    params: { id: string }

}) {
    const data = await getMediaById(params.id)
    const reviews = await getMediaReviews(params.id)
    const rating = await getMediaRatings(params.id)

    return (
        <div>
            <MediaItem media={data} />
            <br />
            <MediaRating ratings={rating} />
            <br />
            <ReviewList reviews={reviews} />
            <br />
            <div><RatingForm id={params.id} /></div>
        </div>
    )
}
