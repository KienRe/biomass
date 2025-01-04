import Head from 'next/head'

interface MetadataProps {
  title: string
  description: string
  keywords: string
}

export function Metadata({ title, description, keywords }: MetadataProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href="https://www.energie-minichmair.at" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.energie-minichmair.at" />
      <meta property="og:image" content="https://www.energie-minichmair.at/og-image.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://www.energie-minichmair.at/twitter-image.jpg" />
    </Head>
  )
}

