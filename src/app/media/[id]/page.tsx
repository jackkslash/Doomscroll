import React from 'react'
import MediaItem from '../../../components/MediaItem'
import RatingForm from '@/components/RatingForm'
import { getMediaById } from './actions'


export default async function Page({
    params,
}: {
    params: { id: string }

}) {
    const data = await getMediaById(params.id)
    return (
        <div>
            <MediaItem media={data} />
            <div><RatingForm id={params.id} />
            </div>
        </div>
    )
}
