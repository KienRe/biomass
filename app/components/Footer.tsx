import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-green-800 text-white py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-8 md:mb-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Biogas-Minichmair_Logo_NoText-RFHFZoEAQHNwBkSOvdA1f27LXvrbk7.png"
              alt="Biogas Minichmair GmbH Logo"
              width={160}
              height={40}
              className="w-auto h-[40px] brightness-0 invert mb-4"
            />
            {/*<p className="text-lg font-semibold">Biogas Minichmair GmbH</p>*/}
            <p>Großendorf 10</p>
            <p>4551 Ried im Traunkreis</p>
            <p>Österreich</p>
          </div>
          <div className="mb-8 md:mb-0">
            <p className="font-semibold mb-2">Kontakt</p>
            <p>Email: <a href="mailto:ried@energie-minichmair.at" className="hover:text-green-200">ried@energie-minichmair.at</a></p>
            <p>Tel: <a href="tel:06504127018" className="hover:text-green-200">06504127018</a></p>
          </div>
          <div>
            <p className="font-semibold mb-2">Unternehmensinformationen</p>
            <p>Firmenbuchnummer: FN 487596 d</p>
            <p>UID-Nummer: ATU73555547</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-green-700 text-center">
          <p>&copy; {new Date().getFullYear()} Biogas Minichmair GmbH. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}

