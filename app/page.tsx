import { Metadata } from './components/Metadata'
import { StructuredData } from './components/StructuredData'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { About } from './components/About'
import { Categories } from './components/Categories'
import { WhyUs } from './components/WhyUs'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function Home() {
  return (
    <>
      <Metadata 
        title="Energie Minichmair | Biogas Ried | Werner Minichmair"
        description="Energie Minichmair GmbH - Ihr Experte für Biogas in Ried. Innovative Lösungen für nachhaltige Energiegewinnung und Reststoffverwertung."
        keywords="Energie Minichmair, Biogas Ried, Werner Minichmair, nachhaltige Energie, Reststoffverwertung, Biogasanlage"
      />
      <StructuredData />
      <main className="min-h-screen bg-white">
        <Header />
        <Hero />
        <Services />
        <About />
        <Categories />
        <WhyUs />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

