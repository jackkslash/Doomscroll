import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export default async function Page() {
    const supabase = createClient()

    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        redirect('/')
    }
    const req = await fetch(process.env.NEXT_PUBLIC_DB_LINK + "/profile/" + data.user?.id, {
        method: 'GET',
    });
    const res = await req.json();

    return <p>Hello {res.username}</p>
}