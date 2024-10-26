'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useCallback, useState } from 'react';

export default function UploadPage() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleUploadClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleFileChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      console.log('Uploaded file:', file.name);
      // Here you would typically send this file to your server or process it
    }
  }, []);

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
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        {/* Upload box */}
        <div className="bg-[#FFE5B4] rounded-lg p-8 mb-12 w-full max-w-md flex flex-col items-center">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />
          <button 
            onClick={handleUploadClick}
            className="bg-black text-white px-8 py-2 rounded-full mb-4 font-bold"
          >
            Upload
          </button>
          <p className="text-center text-[#8B4513]">
            or drop a file,<br />
            paste image or <span className="underline">URL</span>
          </p>
          {selectedFile && (
            <p className="mt-4 text-[#8B4513]">Selected file: {selectedFile.name}</p>
          )}
        </div>

        {/* Steps To Restore */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#8B4513]">Steps To Restore</h2>
          <ul className="text-[#8B4513] space-y-2">
            <li>Scan or Upload Your Damaged Artwork</li>
            <li>Let the AI Work</li>
            <li>Explore in Augmented Reality (AR)</li>
            <li>Submit Feedback or Validate</li>
            <li>Listen to the History</li>
          </ul>
        </div>
      </main>

      {/* Updated Footer */}
      <footer className="bg-[#EFC963] p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-[#8B4513] mb-2">CultAR</h3>
            <p className="text-sm text-[#8B4513] max-w-md">
              CultAR: Time Machine for Indian Art is a Web App
              designed to preserve and showcase India's cultural
              heritage through AI and AR technology.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <Image src="/pillar.png" alt="Pillar with Globe" width={100} height={150} />
          </div>
          <div className="flex-1 text-right">
            <p className="text-sm text-[#8B4513] mb-2">Socials:</p>
            <div className="flex justify-end space-x-2">
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
