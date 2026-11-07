import {
  CalendarCheck2,
  Code2,
  Gauge,
  MessagesSquare,
  MonitorSmartphone,
  Palette,
  type LucideIcon,
} from 'lucide-react'

export type Reason = { title: string; description: string; icon: LucideIcon }

export const reasons: Reason[] = [
  { title: 'Modern Design', description: 'Contemporary, uncluttered interfaces with a clear point of view.', icon: Palette },
  { title: 'Clean Code', description: 'Readable components and considered architecture, not shortcuts.', icon: Code2 },
  { title: 'Responsive Development', description: 'Thoughtful behavior across mobile, tablet, laptop, and desktop.', icon: MonitorSmartphone },
  { title: 'Performance Optimization', description: 'Lean assets, sensible rendering, and fast-loading experiences.', icon: Gauge },
  { title: 'On-Time Delivery', description: 'Clear milestones and honest communication throughout the build.', icon: CalendarCheck2 },
  { title: 'Client-Focused Approach', description: 'Your goals guide decisions, from the first sketch to launch day.', icon: MessagesSquare },
]
