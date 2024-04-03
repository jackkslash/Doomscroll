import { fetchUserData } from './actions'

export default async function Page() {
    const data = await fetchUserData();

    return <p>Hello {data.username}</p>
}