import Head from 'next/head'

interface MetadataProps {
  title: string
  description: string
  keywords: string
}

export const Metadata = ({ title, description, keywords }: MetadataProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Head>
  )
} 