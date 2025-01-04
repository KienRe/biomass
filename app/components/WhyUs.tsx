'use client'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const reasons = [
  "Flexibilität: Wir bieten Ihnen maßgeschneiderte Lösungen für Ihre Abfallentsorgung und Biogasproduktion.",
  "Umweltfreundlich: Unser Ziel ist es, die Umwelt zu schonen und nachhaltige Lösungen zu schaffen.",
  "Innovativ: Wir setzen auf moderne Technologien und effiziente Prozesse zur Biogasgewinnung.",
  "Zuverlässig: Mit unserem Abrollcontainer-Service und der sicheren Entsorgung von Lebensmitteln und Schlachtabfällen sind wir Ihr zuverlässiger Partner."
]

export function WhyUs() {
  return (
    <section className="py-16 md:py-24 bg-green-100">
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-green-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Warum Biogas Minichmair GmbH?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div 
              key={index}
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <CheckCircle className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-green-600" />
              <p className="text-lg text-gray-700">{reason}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

