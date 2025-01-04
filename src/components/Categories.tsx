'use client'
import { motion } from 'framer-motion'
import { Leaf, Apple, Drumstick, Truck, Recycle } from 'lucide-react'

const categories = [
  {
    title: "Biogasproduktion",
    description: "Erfahren Sie mehr über die Technologie und Prozesse hinter unserer Biogasproduktion.",
    icon: Leaf
  },
  {
    title: "Überlagerte Lebensmittel entsorgen",
    description: "Wie Sie abgelaufene oder überlagerte Lebensmittel sicher und umweltgerecht entsorgen können.",
    icon: Apple
  },
  {
    title: "Schlachtabfälle entsorgen",
    description: "Wir bieten eine hygienische und sichere Lösung für die Entsorgung von Schlachtabfällen.",
    icon: Drumstick
  },
  {
    title: "Abrollcontainer-Service",
    description: "Hier finden Sie alle Informationen zu unserem flexiblen Abrollcontainer-Service.",
    icon: Truck
  },
  {
    title: "Nachhaltigkeit",
    description: "Entdecken Sie, wie unser Unternehmen durch nachhaltige Prozesse und umweltfreundliche Lösungen zur Energiegewinnung und Abfallverwertung einen Beitrag zum Schutz der Umwelt leistet.",
    icon: Recycle
  }
]

export function Categories() {
  return (
    <section id="categories" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-green-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Unsere Kategorien im Überblick
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div 
              key={index}
              className="bg-green-50 p-6 rounded-lg shadow-md flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, backgroundColor: "#E6FFE6" }}
            >
              <category.icon className="w-16 h-16 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-green-600">{category.title}</h3>
              <p className="text-gray-700">{category.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

