import { redirect } from "next/navigation";

export async function fetchMediaData() {
    try {
        const response = await fetch(process.env.NEXT_PUBLIC_DB_LINK + "/media", {
            method: 'GET',
        }); // Assuming you have a route /media to fetch data
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.error('Error fetching media data:', error);
    }
}

export async function submitLink(formData: FormData) {
    'use server'
    const req = await fetch(process.env.NEXT_PUBLIC_DB_LINK + "/process?link=" + formData.get("link"), {
        method: 'POST',
    });
    const res = await req.json();
    const id = res.pLink.item.id;
    redirect("/media/" + id)
}