'use server'
import { redirect } from "next/navigation";
import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from "next/cache";

export async function submitReview(formData: FormData) {

    const supabase = createClient()

    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        redirect('/')
    }


    const fData = {
        r: formData.get('body') as string,
        rating: formData.get('rating') as string,
        id: formData.get('id') as string,
        userID: data.user.id
    }
    await fetch(process.env.NEXT_PUBLIC_DB_LINK + "/media/" + fData.id + "/review", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(fData),
    });
    revalidatePath('/media/' + fData.id)
    redirect("/media/" + fData.id)
}

export async function getMediaById(id: string) {
    const supabase = createClient()

    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        redirect('/')
    }

    const { data: media, error: mediaError } = await supabase.from('media').select('*').eq('id', id).single()
    if (mediaError) {
        redirect('/')
    }

    return {
        media
    }
}