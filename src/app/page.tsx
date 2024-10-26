import Image from "next/image";
import Navbar from "@/components/Navbar";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#ffeeba] text-[#4a4a4a] font-sans">
      <Navbar />
      
      <main className="flex-grow">
        <section className="relative h-screen flex flex-col items-center justify-center">
          <video
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="/video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <h1 className="text-6xl font-bold text-white z-10 mb-8">CultAR</h1>
          <Image 
            src="/statue.png" 
            alt="Statue" 
            width={600} 
            height={600} 
            className="z-10 mb-15"
          />
          <div className="bg-[#ffeeba] w-full py-4 text-center">
            <h1 className="text-4xl font-bold text-[#8B4513]">WELCOME !</h1>
          </div>
        </section>

       

        <section className="p-8 text-center">
          <p className="mb-4 text-[#8B0000]">
            Scan and restore India's timeless art with AI.<br />
            Explore rich history and cultural stories as artifacts<br />
            come to life before your eyes!
          </p>
          <Link href="/upload">
            <button className="bg-yellow-400 text-black px-6 py-4 rounded-full font-bold">
              Start Upload
            </button>
          </Link>
        </section>

        <section className="bg-yellow-300 p-8 mx-auto max-w-md rounded-lg mb-8">
          <h3 className="text-2xl font-bold mb-4 text-center">Steps To Restore</h3>
          <ol className="list-decimal list-inside">
            <li>Scan or Upload Your Photograph or Sketch</li>
            <li>Let AI do its Work</li>
            <li>Explore its Augmented Reality (AR)</li>
            <li>Unlock Feedback or Critique</li>
            <li>Listen to the History</li>
          </ol>
        </section>
      </main>

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
