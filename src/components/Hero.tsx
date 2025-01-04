'use client'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-12-28%20at%2012.23.37-yiQ6mqMaibY52ZddCHvsWZTneOA2nW.jpeg"
          alt="Biogas Anlage von Energie Minichmair in Ried"
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Biogas-Minichmair_CMYK_Vektorlogo_e_designsprache-werbeagentur.pdf-1(Powered%20by%20MaxAI)-YuMFcxYIv2qxULAaXa4SAog2X0lRrl.png"
            alt="Energie Minichmair GmbH Logo"
            width={400}
            height={100}
            className="w-auto h-[100px] mx-auto mb-8 brightness-0 invert"
            priority
          />
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ihr Partner für nachhaltige Energiegewinnung und Reststoffverwertung
          </motion.p>
          <motion.a 
            href="#contact" 
            className="bg-white text-green-700 py-3 px-6 rounded-full text-lg font-semibold hover:bg-green-100 transition duration-300 inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Kontaktieren Sie uns
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

