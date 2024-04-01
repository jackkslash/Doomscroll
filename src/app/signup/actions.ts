'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function signup(formData: FormData) {
    const supabase = createClient()

    const { error } = await supabase.auth.signUp({
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    })

    const { data } = await supabase.auth.getUser()


    await fetch(process.env.NEXT_PUBLIC_DB_LINK + "/profile/" + data.user?.id + "?username=" + formData.get('username') as string, {
        method: 'POST'
    });

    if (error) {
        console.log(error)
        redirect('/error')
    }

    revalidatePath('/', 'layout')
    redirect('/')
}