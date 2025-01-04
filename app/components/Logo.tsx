import Image from 'next/image'

interface LogoProps {
  className?: string
  width?: number
  height?: number
}

export function Logo({ className = "", width = 200, height = 50 }: LogoProps) {
  return (
    <Image
      src="/Biogas-Minichmair_CMYK_Vektorlogo_e_designsprache-werbeagentur.pdf-1(Powered by MaxAI).jpg"
      alt="Biogas Minichmair GmbH Logo"
      width={width}
      height={height}
      className={className}
      priority
    />
  )
}

