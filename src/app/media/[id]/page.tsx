import React from 'react'
import MediaItem from '../../../components/MediaItem'
import RatingForm from '@/components/RatingForm'
import { getMediaById, getMediaReviews } from './actions'
import ReviewList from '@/components/ReviewList'


export default async function Page({
    params,
}: {
    params: { id: string }

}) {
    const data = await getMediaById(params.id)
    const reviews = await getMediaReviews(params.id)
    return (
        <div>
            <MediaItem media={data} />
            <br />
            <ReviewList reviews={reviews} />
            <br />
            <div><RatingForm id={params.id} /></div>
        </div>
    )
}
