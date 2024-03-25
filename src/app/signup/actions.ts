'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function signup(formData: FormData) {
    const supabase = createClient()

    // type-casting here for convenience
    // in practice, you should validate your inputs

    const { error } = await supabase.auth.signUp({
        email: formData.get('email') as string,
        password: formData.get('password') as string,
        options: {
            data: {
                user_name: formData.get('username') as string
            }
        }

    })

    if (error) {
        console.log(error)
        redirect('/error')
    }

    revalidatePath('/', 'layout')
    redirect('/')
}