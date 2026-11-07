import {
  Atom,
  Globe2,
  Layers3,
  MousePointer2,
  PenTool,
  ShoppingBag,
  Smartphone,
  Wrench,
  type LucideIcon,
} from 'lucide-react'

export type Service = {
  title: string
  description: string
  icon: LucideIcon
}

export const services: Service[] = [
  {
    title: 'Website Development',
    description: 'Fast, accessible business websites built around your content, goals, and customers.',
    icon: Globe2,
  },
  {
    title: 'React.js Development',
    description: 'Component-driven interfaces with thoughtful state, clean architecture, and room to scale.',
    icon: Atom,
  },
  {
    title: 'UI/UX Design',
    description: 'Clear user journeys and polished interfaces shaped by research, prototyping, and iteration.',
    icon: PenTool,
  },
  {
    title: 'E-commerce Development',
    description: 'Conversion-conscious storefronts with intuitive browsing, checkout, and product management.',
    icon: ShoppingBag,
  },
  {
    title: 'Landing Page Development',
    description: 'Focused campaign pages that communicate value quickly and make every call to action count.',
    icon: MousePointer2,
  },
  {
    title: 'Full Stack Development',
    description: 'End-to-end product builds connecting elegant frontends to reliable APIs and databases.',
    icon: Layers3,
  },
  {
    title: 'Website Maintenance',
    description: 'Ongoing updates, monitoring, fixes, and improvements that keep your website healthy.',
    icon: Wrench,
  },
  {
    title: 'Responsive Web Design',
    description: 'Carefully adapted layouts that feel intentional on every screen, from mobile to widescreen.',
    icon: Smartphone,
  },
]
