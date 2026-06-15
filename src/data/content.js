export const profile = {
  name: 'Sharan Reddy R',
  role: 'Full Stack Developer',
  location: 'Bengaluru, Karnataka, India',
  address:
    'Bengaluru, Karnataka',
  availability: 'Open for Freelance Projects',
  email: 'sharanreddy26372@gmail.com',
  phone: '+91 9901414072',
  phoneTel: '+919901414072',
  whatsapp: 'https://wa.me/919901414072',
  linkedin: 'https://www.linkedin.com/in/sharanreddy-r/',
  github: 'https://github.com/SharanreddyR',
  domains: ['Health-Tech', 'Ed-Tech', 'Enterprise SaaS'],
  responseNote: 'Typically responds within 24 hours',
  timezone: 'IST (UTC+5:30) · India',
  resumeUrl: '/Sharan_Reddy.pdf',
  resumeFileName: 'Sharan_Reddy_Resume.pdf',
  photoUrl: '/sharan-profile.png',
  photoAlt: 'Sharan Reddy R — Full Stack Developer professional portrait',
  engagement: ['Freelance Projects', 'Contract Work', 'Remote Collaboration', 'Part-time Consulting'],
}

export const contactLinks = {
  mailto: `mailto:${profile.email}?subject=${encodeURIComponent('Project Inquiry')}&body=${encodeURIComponent('Hi Sharan,\n\n')}`,
  tel: `tel:${profile.phoneTel}`,
}

export const inquiryTemplates = [
  {
    label: 'Mobile App',
    subject: 'Mobile App Project Inquiry',
    body: 'Hi Sharan,\n\nI need a mobile app built. Here are the details:\n\n',
  },
  {
    label: 'Web Platform',
    subject: 'Web Platform Project Inquiry',
    body: 'Hi Sharan,\n\nI need a web platform. Here are the details:\n\n',
  },
  {
    label: 'Healthcare Tech',
    subject: 'Healthcare Tech Project Inquiry',
    body: 'Hi Sharan,\n\nI have a healthcare-related project. Here are the details:\n\n',
  },
  {
    label: 'LMS / Ed-Tech',
    subject: 'LMS Project Inquiry',
    body: 'Hi Sharan,\n\nI need LMS or ed-tech development help. Here are the details:\n\n',
  },
]

export function getInquiryMailto(template) {
  return `mailto:${profile.email}?subject=${encodeURIComponent(template.subject)}&body=${encodeURIComponent(template.body)}`
}

export const techStack = [
  {
    category: 'Mobile',
    skills: ['React Native', 'Android', 'Expo', 'Play Store'],
  },
  {
    category: 'Backend',
    skills: ['Laravel', 'PHP', 'Node.js', 'REST APIs', 'Java'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'Smarty', 'Bootstrap', 'TypeScript'],
  },
  {
    category: 'Database & Cloud',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'AWS'],
  },
  {
    category: 'Domains',
    skills: ['Health-Tech', 'Ed-Tech / LMS', 'Payments & UPI', 'Admin Dashboards'],
  },
]

export const process = [
  {
    step: '01',
    title: 'Discovery Call',
    description: 'Understand your product idea, business goals, users, and timeline. Free initial conversation.',
  },
  {
    step: '02',
    title: 'Scope & Plan',
    description: 'Define features, tech stack, milestones, and deliverables — clear scope before development starts.',
  },
  {
    step: '03',
    title: 'Build & Iterate',
    description: 'Agile development with regular updates, demos, and feedback loops until the product is production-ready.',
  },
  {
    step: '04',
    title: 'Launch & Support',
    description: 'Deployment to Play Store, web servers, or LMS — plus handoff documentation and post-launch support.',
  },
]

export const faqs = [
  {
    q: 'What type of projects do you take on?',
    a: 'Mobile apps (React Native), web platforms, LMS modules, healthcare systems, REST APIs, and full-stack product builds — from MVP to production.',
  },
  {
    q: 'Do you work remotely with clients outside Bengaluru?',
    a: 'Yes. I work remotely with clients across India and internationally. Calls, WhatsApp, and video meetings work well for collaboration.',
  },
  {
    q: 'Are you available for freelance while working full-time?',
    a: 'Yes — I am open for freelance projects, contract work, and part-time consulting alongside my role at Entrar. Reach out to discuss timing.',
  },
  {
    q: 'Which industries have you worked in?',
    a: 'Healthcare (Luniq Health — clinic apps, membership cards, home care) and Education (Entrar LMS — cafe, infirmary, forms, report cards, ID cards).',
  },
  {
    q: 'How do we get started?',
    a: 'Email, call, or WhatsApp me with a brief about your project. I will reply within 24 hours and we can schedule a discovery call.',
  },
  {
    q: 'Can you maintain or extend an existing codebase?',
    a: 'Absolutely. I work on existing Laravel, PHP, React Native, and LMS codebases — bug fixes, new features, API integrations, and performance improvements.',
  },
]

export const marqueeItems = [
  'React Native',
  'Laravel',
  'PHP',
  'REST APIs',
  'Health-Tech',
  'LMS Platforms',
  'Bengaluru',
  'Open for Freelance',
  'Mobile & Web',
  'Full Stack Developer',
  'Play Store Apps',
  'Enterprise SaaS',
]

export const highlights = [
  { value: '3+', label: 'Live Products Shipped' },
  { value: '2+', label: 'Years Professional Experience' },
  { value: '2', label: 'Industry Domains' },
  { value: '∞', label: 'Open to Collaborate' },
]

export const services = [
  {
    title: 'Mobile App Development',
    description:
      'Cross-platform apps with React Native — from UI to Play Store deployment. Proven with Luniq Clinic and Luniq Care Card.',
    tags: ['React Native', 'Android', 'iOS', 'Play Store'],
  },
  {
    title: 'Web & LMS Platforms',
    description:
      'School management systems, admin dashboards, and enterprise web modules — cafe, infirmary, forms, report cards, and more.',
    tags: ['PHP', 'Smarty', 'Laravel', 'Bootstrap'],
  },
  {
    title: 'RESTful API Development',
    description:
      'Secure, scalable APIs that power mobile and web clients — authentication, business logic, and third-party integrations.',
    tags: ['REST APIs', 'Laravel', 'PHP', 'PostgreSQL'],
  },
  {
    title: 'Healthcare Platforms',
    description:
      'End-to-end health-tech — clinic ops, membership cards, appointments, payments (UPI/cards), and home healthcare booking.',
    tags: ['Health-Tech', 'Laravel', 'React Native', 'UPI'],
  },
  {
    title: 'Full Stack Product Build',
    description:
      'Solo or team delivery from idea to production — architecture, frontend, backend, APIs, and deployment.',
    tags: ['Architecture', 'End-to-End', 'Scalable Systems'],
  },
  {
    title: 'Backend & Dashboard Systems',
    description:
      'Admin panels, analytics dashboards, role management, and operational tools for business teams.',
    tags: ['Laravel', 'MySQL', 'PostgreSQL', 'Charts'],
  },
]

export const whyWorkWithMe = [
  'Shipped live apps on Google Play Store and production LMS modules used by schools',
  'Experience across React Native, Laravel, PHP, and REST APIs — mobile and web',
  'Strong in health-tech and education domains with real business workflows',
  'Freelance-ready with professional full-time experience at Entrar since Dec 2023',
  'MCA in progress — continuously upgrading skills in software engineering',
]

export const branches = [
  {
    id: 'about',
    type: 'about',
    label: 'Philosophy',
    title: 'Full stack, end to end',
    summary:
      'I help startups and businesses ship production software — mobile apps, web platforms, and RESTful APIs for healthcare and education.',
    detail:
      'Freelance at Luniq Health (React Native + Laravel health apps). Full-time at Entrar (School LMS with PHP, Smarty, REST APIs). I take ownership from architecture to deployment and focus on clean, scalable systems clients can rely on.',
    tags: ['React Native', 'Laravel', 'PHP', 'Smarty', 'REST APIs', 'Mobile & Web'],
    side: 'left',
  },
  {
    id: 'luniq-clinic',
    type: 'project',
    label: 'Luniq Health · Freelance',
    title: 'Luniq Clinic',
    status: 'Live',
    summary:
      'Clinic operations app — secure login, patient visits, appointments, claims, and live dashboard for healthcare providers.',
    features: [
      'Secure clinic login and profile management',
      'Patient visits — card lookup, doctor selection, services, document upload',
      'Appointments — today\'s schedule and pending confirmations',
      'Claims — submit visits and track approval status',
      'Dashboard with live clinic statistics and notifications',
      'Manage doctors, services, hours, and clinic setup',
    ],
    tags: ['React Native', 'Laravel', 'REST APIs'],
    link: 'https://play.google.com/store/search?q=luniq+clinic',
    linkLabel: 'View on Play Store',
    side: 'right',
  },
  {
    id: 'luniq-care-card',
    type: 'project',
    label: 'Luniq Health · Freelance',
    title: 'Luniq Care Card',
    status: 'Live',
    summary:
      'Official membership app for Luniq Health — purchase plans, pay securely, manage family coverage, and access partner clinics.',
    features: [
      'Membership plans — Single, Couple, and Family coverage',
      'Buy or renew with UPI, cards, or net banking',
      'Instant digital Luniq Care Card after payment',
      'Family member management on Couple & Family plans',
      'Find partner clinics, book appointments, view visit history',
      'Upload and view health reports; secure account & billing',
    ],
    tags: ['React Native', 'Laravel', 'Payments', 'UPI'],
    link: 'https://card.luniqhealth.com',
    linkLabel: 'card.luniqhealth.com',
    side: 'left',
  },
  {
    id: 'luniq-care-taker',
    type: 'project',
    label: 'Luniq Health · Freelance',
    title: 'Luniq Health Care Taker',
    status: 'In Progress',
    summary:
      'Home healthcare platform — enabling people at home to book nurses, medicines, medical devices, ambulances, and more.',
    features: [
      'Book home nursing and care services',
      'Order medicines and medical devices',
      'Ambulance booking and emergency care access',
      'Built for at-home healthcare delivery',
    ],
    tags: ['React Native', 'Laravel', 'Health-Tech'],
    side: 'right',
  },
  {
    id: 'entrar-lms',
    type: 'project',
    label: 'Entrar · Full-time',
    title: 'School Management System (LMS)',
    status: 'Live',
    summary:
      'Professional full-stack development on Entrar\'s LMS — building modules across web and mobile for schools at scale.',
    features: [
      'Cafe module — school cafeteria management',
      'Infirmary — student health and medical records',
      'Entrar Forms — dynamic form builder and submissions',
      'Report cards and ID card generation',
      'RESTful APIs powering mobile and web applications',
    ],
    tags: ['PHP', 'Smarty', 'REST APIs', 'Mobile & Web'],
    side: 'left',
  },
  {
    id: 'exp-luniq',
    type: 'experience',
    label: 'Experience',
    title: 'Luniq Health',
    summary: 'Freelance Full Stack Developer',
    detail:
      'Building Luniq Clinic, Luniq Care Card, and Luniq Health Care Taker — React Native frontends with Laravel backends, from architecture through production deployment.',
    metric: '3 Products',
    tags: ['React Native', 'Laravel'],
    side: 'right',
  },
  {
    id: 'exp-entrar',
    type: 'experience',
    label: 'Experience',
    title: 'Entrar',
    summary: 'Full Stack Developer · Dec 2023 — Present',
    detail:
      'Working professionally on the School Management System (LMS) — PHP and Smarty frontend, PHP backend, RESTful APIs, and cross-platform mobile and web applications.',
    metric: 'LMS Platform',
    tags: ['PHP', 'Smarty', 'REST APIs'],
    side: 'left',
  },
  {
    id: 'edu-bca',
    type: 'education',
    label: 'Education',
    title: 'BCA — Bachelor of Computer Applications',
    status: 'Completed',
    summary: 'Sri Bhagawan Mahaveer Jain First Grade College (SBMJFGC) · KGF',
    detail:
      'Completed Bachelor of Computer Applications in 2022 — foundation in programming, software development, and computer science fundamentals.',
    metric: '2022',
    tags: ['Computer Applications', 'KGF'],
    side: 'right',
  },
  {
    id: 'edu-mca',
    type: 'education',
    label: 'Education',
    title: 'MCA — Master of Computer Applications',
    status: 'In Progress',
    summary: 'Manipal University Jaipur · Online',
    detail:
      'Pursuing Master of Computer Applications through Manipal University Jaipur\'s online program — deepening software engineering, architecture, and advanced computing.',
    metric: 'In Progress',
    tags: ['Computer Applications', 'Online Learning'],
    side: 'left',
  },
  {
    id: 'cert-jspiders',
    type: 'education',
    label: 'Certification',
    title: 'Full Stack Java Developer',
    status: 'Completed',
    summary: 'J Spiders · Marathahalli, Bengaluru',
    detail:
      'Intensive full stack Java developer certification — backend development, enterprise patterns, and end-to-end application building.',
    tags: ['Java', 'Full Stack', 'J Spiders'],
    side: 'right',
  },
  {
    id: 'cert-roman',
    type: 'education',
    label: 'Certification',
    title: 'C#, C++ & RESTful APIs',
    status: 'Completed',
    summary: 'Roman Technologies · KGF',
    detail:
      'Certified in C#, C++, and RESTful API development — object-oriented programming, backend services, and API design.',
    tags: ['C#', 'C++', 'REST APIs', 'Roman Technologies'],
    side: 'left',
  },
]

export const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#stack', label: 'Skills' },
  { href: '#tree', label: 'Journey' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

export const socialLinks = [
  { href: profile.linkedin, label: 'LinkedIn' },
  { href: profile.github, label: 'GitHub' },
]
