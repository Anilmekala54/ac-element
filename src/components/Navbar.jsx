import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 bg-white shadow-md flex justify-center gap-6">
      <Link href="/" className="text-purple-800 hover:underline">Home</Link>
      <Link href="/contact" className="text-purple-800 hover:underline">About</Link>
    </nav>
  );
}
