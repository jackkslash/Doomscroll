import React from 'react'
import MediaList from '../components/MediaList'
import { redirect } from 'next/navigation';

export default function Page() {
    async function submitLink(formData: FormData) {
        'use server'
        const req = await fetch(process.env.DB_LINK + "/process?link=" + formData.get("link"), {
            method: 'POST',
        });
        const res = await req.json();
        const id = res.pLink[0].id;
        redirect("/media/" + id)
    }
    return (
        <div><MediaList submitLink={submitLink} ></MediaList></div>
    )
}
