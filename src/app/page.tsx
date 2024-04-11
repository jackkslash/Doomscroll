import Link from "next/link";

export default function Home() {

  return (
    <main className="h-screen flex justify-center">
      <div>
        <Link href="/media">Media</Link>
        <br />
        <Link href="/profile">Profile</Link>
        <br />
        <Link href="/login">Login</Link>
      </div>
    </main >
  );
}
