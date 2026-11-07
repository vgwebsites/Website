export type Testimonial = {
  quote: string
  name: string
  role: string
}

// Presentation examples only — these are not real customer endorsements.
export const testimonials: Testimonial[] = [
  {
    quote: '“The team made every decision feel clear. We always knew what was happening, why it mattered, and what would come next.”',
    name: 'Client name placeholder',
    role: 'Founder · Sample company',
  },
  {
    quote: '“They found the simple idea inside a complicated product, then brought it to life with real attention to every interaction.”',
    name: 'Client name placeholder',
    role: 'Product Lead · Sample company',
  },
  {
    quote: '“The final experience felt polished on every screen, and the handover gave our team the confidence to keep building.”',
    name: 'Client name placeholder',
    role: 'Marketing Director · Sample company',
  },
]
