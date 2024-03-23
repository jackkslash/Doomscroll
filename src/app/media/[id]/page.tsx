'use client'
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import MediaItem from '@/app/components/MediaItem'
import { Media } from '@/app/types/types'


export default function Page() {
    const params = useParams()
    const [mediaItem, setMediaItem] = useState<Media>();

    useEffect(() => {
        fetchMediaData();
    }, []);

    const fetchMediaData = async () => {
        try {
            const response = await fetch(process.env.NEXT_PUBLIC_DB_LINK + '/media/' + params.id); // Assuming you have a route /media to fetch data
            const data = await response.json();
            setMediaItem(data); // set the fetched data to state
        } catch (error) {
            console.error('Error fetching media data:', error);
        }
    };
    return (
        <div>
            <MediaItem media={mediaItem!} />
        </div>
    )
}
