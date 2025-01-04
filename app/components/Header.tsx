'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header 
      className="bg-white text-gray-800 py-4 px-6 md:px-12 fixed w-full z-50 shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex items-center"
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Biogas-Minichmair_Logo_NoText-RFHFZoEAQHNwBkSOvdA1f27LXvrbk7.png"
            alt="Biogas Minichmair GmbH Logo"
            width={180}
            height={45}
            className="w-auto h-[45px]"
            priority
          />
        </motion.div>
        <nav className="hidden md:flex space-x-4">
          <a href="#services" className="hover:text-green-600">Leistungen</a>
          <a href="#about" className="hover:text-green-600">Über uns</a>
          <a href="#categories" className="hover:text-green-600">Kategorien</a>
          <a href="#contact" className="hover:text-green-600">Kontakt</a>
        </nav>
        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <motion.nav 
          className="md:hidden mt-4 space-y-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <a href="#services" className="block hover:text-green-600">Leistungen</a>
          <a href="#about" className="block hover:text-green-600">Über uns</a>
          <a href="#categories" className="block hover:text-green-600">Kategorien</a>
          <a href="#contact" className="block hover:text-green-600">Kontakt</a>
        </motion.nav>
      )}
    </motion.header>
  )
}

