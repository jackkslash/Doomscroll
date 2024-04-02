export async function fetchMediaData() {
    try {
        const response = await fetch(process.env.NEXT_PUBLIC_DB_LINK + "/media"); // Assuming you have a route /media to fetch data
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.error('Error fetching media data:', error);
    }
}