import {
  Atom,
  Braces,
  Code2,
  Database,
  FileCode2,
  GitBranch,
  Github,
  Hexagon,
  Server,
  Wind,
  type LucideIcon,
} from 'lucide-react'

export type Technology = {
  name: string
  type: string
  icon: LucideIcon
  color: string
}

export const technologies: Technology[] = [
  { name: 'HTML5', type: 'Structure', icon: FileCode2, color: '#ff7657' },
  { name: 'CSS3', type: 'Styling', icon: Code2, color: '#64a4ff' },
  { name: 'JavaScript', type: 'Language', icon: Braces, color: '#f5d547' },
  { name: 'React.js', type: 'Frontend', icon: Atom, color: '#61dafb' },
  { name: 'Tailwind CSS', type: 'Styling', icon: Wind, color: '#7dd3fc' },
  { name: 'Node.js', type: 'Runtime', icon: Hexagon, color: '#8dd17e' },
  { name: 'Express.js', type: 'Backend', icon: Server, color: '#d4d4d8' },
  { name: 'MongoDB', type: 'Database', icon: Database, color: '#79c978' },
  { name: 'Git', type: 'Version control', icon: GitBranch, color: '#f08a68' },
  { name: 'GitHub', type: 'Collaboration', icon: Github, color: '#e4e4e7' },
]
