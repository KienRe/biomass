import Script from 'next/script'

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Energie Minichmair GmbH",
    "alternateName": "Biogas Minichmair",
    "url": "https://www.energie-minichmair.at",
    "logo": "https://www.energie-minichmair.at/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+43-650-4127018",
      "contactType": "customer service",
      "email": "ried@energie-minichmair.at",
      "areaServed": "AT",
      "availableLanguage": "German"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Großendorf 10",
      "addressLocality": "Ried im Traunkreis",
      "postalCode": "4551",
      "addressCountry": "AT"
    },
    "sameAs": [
      "https://www.facebook.com/energieminichmair",
      "https://www.linkedin.com/company/energie-minichmair-gmbh"
    ],
    "founder": {
      "@type": "Person",
      "name": "Werner Minichmair"
    }
  }

  return (
    <Script id="structured-data" type="application/ld+json">
      {JSON.stringify(structuredData)}
    </Script>
  )
}

