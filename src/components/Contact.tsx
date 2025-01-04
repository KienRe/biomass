'use client'
import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="max-w-3xl mx-auto text-center p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-700">Kontaktieren Sie uns noch heute!</h2>
          <p className="text-lg mb-8 text-gray-700">
            Haben Sie Fragen oder benötigen Sie ein Angebot? Unsere Experten stehen Ihnen gerne zur Verfügung, um die besten Lösungen für Ihre Abfallentsorgung und Biogasproduktion zu finden.
          </p>
          <motion.a 
            href="mailto:ried@energie-minichmair.at" 
            className="bg-green-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-green-700 transition duration-300 inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Kontakt aufnehmen
            <Mail className="ml-2 h-5 w-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

