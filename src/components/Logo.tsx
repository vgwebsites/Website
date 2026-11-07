import LogoImage from '../assets/logo/WhatsApp_Image_2026-11-07_at_1.18.05_PM-removebg-preview.png'

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <img
        src={LogoImage}
        alt="Veyra logo"
        className="size-20 shrink-0 object-contain"
      />
    </span>
  )
}