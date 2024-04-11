import ReviewList from '@/components/ReviewList';
import { fetchUserData, userReviews } from './actions'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation';

export default async function Page() {
    const data = await fetchUserData();
    if (!data) {
        redirect('/')
    }
    const reviewData = await userReviews(data.userId);

    async function signOut() {
        'use server'
        const supabase = createClient()
        supabase.auth.signOut()
        redirect('/')
    }


    return <div>
        Hello {data.username}
        <form >
            <button formAction={signOut}>Sign out</button>
        </form>
        <ReviewList reviews={reviewData} />
    </div>
}