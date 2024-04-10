import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function fetchUserData() {
    try {
        const supabase = createClient()
        const { data, error } = await supabase.auth.getUser()
        if (error || !data?.user) {
            redirect('/')
        }
        const req = await fetch(process.env.NEXT_PUBLIC_DB_LINK + "/profile/" + data.user?.id, {
            method: 'GET',
        });
        const res = await req.json();
        console.log(res)
        return res;
    } catch (error) {
        console.error('Error fetching media data:', error);
    }
}

export async function userReviews(id: string) {
    try {
        const supabase = createClient()
        const { data, error } = await supabase.auth.getUser()
        if (error || !data?.user) {
            redirect('/')
        }
        const req = await fetch(process.env.NEXT_PUBLIC_DB_LINK + "/media/review/" + data.user?.id, {
            method: 'GET',
        });
        const res = await req.json();
        console.log(res)
        return res;
    } catch (error) {
        console.error('Error fetching media data:', error);
    }
}