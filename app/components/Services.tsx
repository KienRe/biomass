'use client'
import { motion } from 'framer-motion'
import { Recycle, Apple, Drumstick, Truck } from 'lucide-react'

const services = [
  {
    title: "Biogasproduktion aus Reststoffen",
    description: "Wir nutzen organische Abfälle zur Erzeugung von umweltfreundlicher Energie.",
    icon: Recycle
  },
  {
    title: "Entsorgung von überlagerten Lebensmitteln",
    description: "Sichere und effiziente Lösung für die Entsorgung von abgelaufenen Lebensmitteln.",
    icon: Apple
  },
  {
    title: "Entsorgung von Schlachtabfällen",
    description: "Hygienische Verwertung von Schlachtabfällen zur Biogasgewinnung.",
    icon: Drumstick
  },
  {
    title: "Flexible Abfallentsorgung mit Abrollcontainern",
    description: "Maßgeschneiderte Containerlösungen für Ihre Abfallentsorgung.",
    icon: Truck
  }
]

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-green-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Unsere Leistungen
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-green-50 p-6 rounded-lg shadow-md flex items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <service.icon className="w-12 h-12 text-green-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-3 text-green-600">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

