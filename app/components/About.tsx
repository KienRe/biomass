'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-green-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Placeholder.png-sM2z4jzjVqkNpEC5DzzGRHBrx91le2.jpeg"
              alt="Biogas Anlage von Energie Minichmair in Ried" 
              width={800} 
              height={600} 
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-700">Über Biogas Minichmair GmbH</h2>
            <p className="text-lg mb-6 text-gray-700">
              Die Biogas Minichmair GmbH ist ein innovatives Unternehmen, das sich auf die Nutzung von Reststoffen zur Energiegewinnung spezialisiert hat. Mit unserer modernen Biogasanlage bieten wir Ihnen flexible und nachhaltige Lösungen zur Verwertung von organischen Abfällen, überlagerten Lebensmitteln und Schlachtabfällen.
            </p>
            <p className="text-lg text-gray-700">
              Unser Fokus liegt dabei auf umweltfreundlicher und ressourcenschonender Energieproduktion, die gleichzeitig zur Reduktion von Abfällen beiträgt.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

