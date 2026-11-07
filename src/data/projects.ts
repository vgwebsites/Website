export const projectCategories = [ 'Websites', 'Data Analysis' ] as const

export type ProjectCategory = Exclude<(typeof projectCategories)[number], 'All'>

export type Project = {
  id: string
  title: string
  category: ProjectCategory
  description: string
  image: string
  tags: string[]
  githubUrl: string
}

// Sample concept projects only. Replace copy, artwork, and external URLs with real work.
export const projects: Project[] = [
  {
    id: 'northstar',
    title: 'Shoplix ',
    category: 'Websites',
    description: 'Shoplix is a modern full-stack e-commerce web application built using the MERN Stack. It provides a seamless online shopping experience with secure authentication, product management, shopping cart, wishlist, Razorpay payment integration, order management, and an admin dashboard.',
    image: '../../public/images/shoplix.png',
    tags: ['React', 'Node.js', 'MongoDB Atlas','Razorpay Integration'],
    liveUrl: 'https://shoplix-9uxf.onrender.com/',
    
  },
  {
    id: 'aurel',
    title: 'Stayora ',
    category: 'Websites',
    description: 'Stayora is a full-stack hotel booking platform built with React.js, Node.js, Express.js, and MySQL, featuring Google OAuth authentication, hotel management, online bookings, Cloudinary image uploads, and Razorpay payment integration.',
    image: '../../public/images/hotel.png',
    tags: ['React', 'Node.js', 'MySQL' ,'JWT','Razorpay'],
    liveUrl: 'https://hotel-system-frontend-tau.vercel.app/',
  },
  {
    id: 'forma',
    title: 'Atliq Hardwar Store Analysis',
    category: 'Data Analysis',
    description: 'Developed an automated Power BI dashboard for Atliq Hardware to unlock actionable sales insights previously not visible to the sales team. The dashboard supported decision-making by reducing manual data gathering time by 20% and helped the sales team identify 10% in cost savings. Key stakeholders included the Sales Director, Marketing, Customer Service, and Data & Analytics teams. The solution provided real-time visibility into sales order data, enabling faster and data-driven business decisions.',
    image: '../../public/images/BI.png',
    tags: ['Power BI','DAX','Excel'],
    githubUrl: 'https://github.com/',
    liveUrl: 'https://github.com/vipulrale9906/Atliq-Hardware-Sales/tree/main/Atliq-Hardware-Sales',
  },
  {
    id: 'flux',
    title: 'Ecommerce Sales Analysis',
    category: 'Data Analysis',
    description: 'Ecommerce Sales Analysis Dashboard is an interactive Excel dashboard that provides a comprehensive overview of business performance through key KPIs such as sales, profit, quantity sold, orders, and profit margin. It includes monthly sales and profit trends, category-wise performance, sales distribution by state, and top-performing sub-categories. Interactive filters for segment, year, and region enable users to explore data and identify business trends, growth opportunities, and areas for improvement.',
    image: '../../public/images/Dashboard 1.png',
    tags: ['Advance Excel','Excel visualization'],
    githubUrl: 'https://github.com/',
    liveUrl: 'https://github.com/vipulrale9906/Ecommerce-Sales-Analysis-Excel/tree/main/Ecommerce-Sales-Analysis-Excel',
  },
  
]
