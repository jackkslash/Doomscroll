import React from 'react'
import { Media } from '../types/types'

interface MediaProps {
    media: Media;
}
export default function MediaItem({ media }: MediaProps) {
    return (
        <div>
            <h1>{media?.title}</h1>
            <p>{media?.desc}</p>
        </div>
    )
}
