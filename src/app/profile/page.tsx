import ReviewList from '@/components/ReviewList';
import { fetchUserData, userReviews } from './actions'

export default async function Page() {
    const data = await fetchUserData();
    const reviewData = await userReviews(data.userId);
    return <p>
        Hello {data.username}
        <ReviewList reviews={reviewData} />
    </p>
}