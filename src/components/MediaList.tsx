import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import { Media } from '../types/types';
import { fetchMediaData } from '@/app/media/actions';

interface MediaProps {
    media: Media;
}

export default async function MediaList({ submitLink }: any) {

    const data = await fetchMediaData();

    return (
        <div >
            <h1 className="pt-10 flex justify-center pb-4">Media List</h1>
            <div className='flex flex-col items-center space-y-8'>
                {data.map((media: Media) => (
                    <MediaItem key={media.id} media={media} />
                ))}
            </div>
            <div className="flex justify-center py-10">
                <form action={submitLink}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Link
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="link" type="text" placeholder="Link input" />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

function MediaItem({ media }: MediaProps) {
    return (
        <div className="flex">
            <div className="relative max-w-xs">
                <Link href={"/media/" + media.id}>
                    <Image src={media.thumbnails?.standard?.url!} className="w-full rounded-lg" alt="Card Image" width={media.thumbnails?.standard?.width} height={media.thumbnails?.standard?.height} />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white px-4 py-2">
                        <h2 className="text-lg font-bold">{media.title}</h2>
                    </div></Link>
            </div>
        </div>

    );
}

function LimitedParagraph({ text, maxLength }: any) {
    const limitedText = text.slice(0, maxLength);

    return <p className="text-black">{limitedText} ...</p>;
}
