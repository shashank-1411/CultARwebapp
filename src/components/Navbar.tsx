'use client'

import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-[#ffeeba] p-4">
      <nav className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex justify-between items-center w-full md:w-auto">
          <a href="#" className="text-2xl font-bold">CultAR</a>
          <div className="md:hidden">
            <button className="text-[#4a4a4a]" onClick={() => setIsOpen(!isOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        <ul className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 mt-4 md:mt-0`}>
          <li><a href="/about" className="hover:underline">About</a></li>
          <li><a href="/upload" className="hover:underline">Upload</a></li>
          <li><a href="/arview" className="hover:underline">AR View</a></li>
        </ul>
      </nav>
    </header>
  )
}
