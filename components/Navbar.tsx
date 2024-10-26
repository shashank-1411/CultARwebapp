import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="p-4 flex justify-center bg-[#ffeeba]">
      <div className="space-x-8">
        <Link href="/" className="text-[#8B4513] hover:underline">Home</Link>
        <Link href="/upload" className="text-[#8B4513] hover:underline">Upload</Link>
        <Link href="/about" className="text-[#8B4513] hover:underline">About</Link>
        <Link href="/ar" className="text-[#8B4513] hover:underline">AR</Link>
      </div>
    </nav>
  );
}
