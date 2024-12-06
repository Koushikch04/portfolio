import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  iiits,
  nvs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  { id: "Education", title: "Education" },
  { id: "Publications", title: "Publications" },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Mern Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Machine Learning",
    icon: creator,
  },
  {
    title: "Quantum Computing",
    icon: creator,
  },
];

const techCategories = [
  {
    category: "Languages",
    technologies: [
      { name: "C++", icon: "c++-icon" },
      { name: "Python", icon: "python-icon" },
      { name: "Java", icon: "java-icon" },
      { name: "C", icon: "c-icon" },
    ],
  },
  {
    category: "Web Technologies",
    technologies: [
      { name: "HTML", icon: "html-icon" },
      { name: "CSS", icon: "css-icon" },
      { name: "JavaScript", icon: "javascript-icon" },
      { name: "React", icon: "react-icon" },
      { name: "Node.js", icon: "nodejs-icon" },
      { name: "Tailwind CSS", icon: "tailwind-icon" },
      { name: "Bootstrap", icon: "bootstrap-icon" },
    ],
  },
  {
    category: "Databases",
    technologies: [
      { name: "MongoDB", icon: "mongodb-icon" },
      { name: "MySQL", icon: "mysql-icon" },
    ],
  },
  {
    category: "Machine Learning",
    technologies: [
      { name: "TensorFlow", icon: "tensorflow-icon" },
      { name: "PyTorch", icon: "pytorch-icon" },
      { name: "Numpy", icon: "numpy-icon" },
    ],
  },
  {
    category: "Others",
    technologies: [
      { name: "Git", icon: "git-icon" },
      { name: "Docker", icon: "docker-icon" },
      { name: "AWS", icon: "aws-icon" },
    ],
  },
];

const educations = [
  {
    institute: "Indian Institute of Information Technology, Sri City",
    degree: "BTech in Computer Science & Technology",
    grade: "9.25/10",
    icon: iiits,
    iconBg: "#383E56",
    date: "Dec 2021 - Apr 2025",
  },
  {
    institute: "New Vision Junior College, Khammam",
    degree: "Higher Secondary Education",
    percentage: "97.4",
    icon: nvs,
    iconBg: "#E6DEDD",
    date: "Apr 2019 - Oct 2021",
  },
];
const experiences = [
  // {
  //   title: "React.js Developer",
  //   company_name: "Starbucks",
  //   icon: starbucks,
  //   iconBg: "#383E56",
  //   date: "March 2020 - April 2021",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export {
  services,
  techCategories,
  experiences,
  testimonials,
  projects,
  educations,
};
