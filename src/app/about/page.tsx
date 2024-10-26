'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FFF2D8] flex flex-col">
      {/* Header */}
      <header className="p-4 flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold text-[#8B4513]">CultAR</Link>
        <nav className="space-x-6">
          <Link href="/" className="text-[#8B4513] hover:underline">Home</Link>
          <Link href="/upload" className="text-[#8B4513] hover:underline">Upload</Link>
          <Link href="/about" className="text-[#8B4513] hover:underline">About</Link>
          <Link href="/ar" className="text-[#8B4513] hover:underline">AR</Link>
        </nav>
      </header>

      {/* Main content */}
      <main className="flex-grow flex flex-col items-center">
        {/* Scan/Upload button */}
        <div className="mt-8">
          <button className="bg-[#FFD700] text-[#8B4513] px-6 py-2 rounded-full font-bold flex items-center">
            <span className="mr-2"></span>
            Scan / Upload
            <span className="ml-2"></span>
          </button>
        </div>

        {/* Artifact images */}
        <div className="mt-8 flex justify-center">
          <Image src="/broken.jpg" alt="Artifacts" width={600} height={200} />
        </div>

        {/* Yellow section */}
        <div className="w-full bg-[#FFD700] h-32 mt-8"></div>

        {/* Decorative border */}
        <div className="w-full h-24 bg-cover bg-center" style={{backgroundImage: "url('/decorative-border.jpg')"}}></div>

        {/* Quote and image */}
        <div className="flex items-center justify-between w-full max-w-4xl mt-8 px-4">
          <Image src="/restored image 1.jpg" alt="Restoration Example" width={300} height={400} />
          <div className="flex-1 ml-8">
            <p className="text-2xl text-[#8B4513] font-semibold">
              When we restore heritage, we're not only saving the past—we're gifting it to the future
            </p>
            <button className="bg-[#FFD700] text-[#8B4513] px-6 py-2 rounded-full mt-4 font-bold flex items-center">
              <span className="mr-2"></span>
              Scan / Upload
              <span className="ml-2"></span>
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#FFD700] p-4 mt-8">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div>
            <h3 className="text-3xl font-bold text-[#8B4513]">CultAR</h3>
            <p className="text-sm text-[#8B4513] max-w-md">
              CultAR: Time Machine for Indian Art is a Web App
              designed to preserve and showcase India's cultural
              heritage through AI and AR technology.
            </p>
          </div>
          <Image src="/pillar.png" alt="Pillar with Globe" width={100} height={150} />
          <div>
            <p className="text-sm text-[#8B4513] mb-2">Socials:</p>
            <div className="flex space-x-2">
              <Image src="/facebook-icon.png" alt="Facebook" width={24} height={24} />
              <Image src="/discord-icon.png" alt="Discord" width={24} height={24} />
              <Image src="/instagram-icon.png" alt="Instagram" width={24} height={24} />
              <Image src="/linkedin-icon.png" alt="LinkedIn" width={24} height={24} />
              <Image src="/twitter-icon.png" alt="Twitter" width={24} height={24} />
            </div>
            <p className="text-sm text-[#8B4513] mt-4">Created for Mumbai Hacks</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
