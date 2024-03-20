'use client'

import { useEffect, useState } from "react";

export interface Media {
  id: string
  title: string
  desc: string
  uploadDate: string;
  channelId: string;
  channelTitle: string;
  thumbnails?: Thumbnails;
  tags?: (string)[] | null;
  platform: string
}

export interface Thumbnails {
  default: Metadata;
  medium?: Metadata | null;
  high?: Metadata | null;
  standard?: Metadata | null;
  maxres?: Metadata | null;
}
export interface Metadata {
  url: string;
  width: number;
  height: number;
}

interface MediaProps {
  media: Media;
}

export default function Home() {

  const [mediaList, setMediaList] = useState<Media[]>([]);

  useEffect(() => {
    // Assuming you fetch data in useEffect and set it to mediaList state
    fetchMediaData();
  }, []);

  const fetchMediaData = async () => {
    try {
      const response = await fetch('http://localhost:3000/media'); // Assuming you have a route /media to fetch data
      const data = await response.json();
      setMediaList(data); // set the fetched data to state
    } catch (error) {
      console.error('Error fetching media data:', error);
    }
  };

  return (
    <main className="h-screen flex justify-center">
      <div>
        <h1 className="pt-10 flex justify-center">Media List</h1>
        {mediaList.map(media => (
          <MediaItem key={media.id} media={media} />
        ))}
      </div>
    </main>
  );
}


function MediaItem({ media }: MediaProps) {
  return (
    <div className="mb-10">
      <div className="p-20">
        <div className="bg-white rounded-lg shadow-2xl md:flex">
          <img src={media.thumbnails?.standard?.url} className="md:w-1/3 rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
          <div className="p-6">
            <h2 className="font-bold text-xl md:text-3xl mb-2 text-black">{media.title}</h2>
            <LimitedParagraph text={media.desc} maxLength={100} />
          </div>

        </div>
      </div>
    </div>

  );
}

function LimitedParagraph({ text, maxLength }: any) {
  const limitedText = text.slice(0, maxLength);

  return <p className="text-black">{limitedText} ...</p>;
}
