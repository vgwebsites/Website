export type Founder = {
  name: string
  role: string
  bio: string
  image: string
  skills: string[]
  linkedin: string
  github: string
}

// Editable demo profiles. Replace names, portraits, biographies, and social destinations.
export const founders: Founder[] = [
  {
    name: 'Girish Posture',
    role: ' Full-Stack Developer',
    bio: 'MERN Stack Developer with hands-on experience in developing full-stack web applications using React.js, Node.js, Express.js, and MongoDB. Proficient in REST API development, JWT authentication, database integration, payment gateways, and responsive UI design. Familiar with secure application development, CRUD operations, and Git-based collaboration.',
    image: '/founders/Profile.jpeg',
    skills: ['React.js', 'Node.js', 'MongoDB', 'API Design'],
    linkedin: 'https://www.linkedin.com/in/girish-posture-148409374/',
    github: 'https://github.com/girishposture1623',
  },
  {
    name: 'Vipul Rale',
    role: 'Data Analyst',
    bio: 'Data Analyst skilled in data analysis, dashboard development, and business reporting. Proficient in Advanced Excel, Power BI, and data visualization, with a strong focus on data accuracy, process optimization, and delivering actionable business insights.',
    image: '/founders/VIPUL.png',
    skills: ['Power BI','Data cleaning','Trend Analysis','Excel', ],
    linkedin: 'https://www.linkedin.com/in/vipul-rale-8917bb252/',
    github: 'https://github.com/vipulrale9906',
  },
]
