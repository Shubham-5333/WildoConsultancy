export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  benefits: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  image: string;
  rating: number;
  comment: string;
  date: string;
}

export interface JobOpportunityItem {
  id: string;
  title: string;
  category: string;
  location: string;
  type: string;
  experience: string;
  description: string;
}

export interface LocalSeoCluster {
  id: string;
  keyword: string;
  heading: string;
  content: string;
  badge: string;
}

export const COMPANY_INFO = {
  name: "Wildo Job Consultancy",
  tagline: "Your Local Career Partner in Thamarassery & Kozhikode",
  phone: "+91 85903 00976",
  phoneRaw: "+918590300976",
  telLink: "tel:+918590300976",
  whatsappNumber: "918590300976",
  whatsappBaseUrl: "https://wa.me/918590300976",
  defaultWhatsAppMessage: "Hello Wildo Job Consultancy, I am looking for job opportunities in Thamarassery. Could you please provide more information?",
  location: {
    town: "Thamarassery",
    district: "Kozhikode",
    state: "Kerala",
    country: "India",
    displayAddress: "Thamarassery, Kozhikode, Kerala, India - 673573",
  },
  businessHours: {
    weekdays: "Monday – Saturday: 9:00 AM – 5:00 PM",
    sunday: "Sunday: Closed (WhatsApp inquiries answered next business day)",
  },
  establishedNote: "Local Recruitment & Career Consultation Service in Malabar Region",
};

export const TRUST_INDICATORS = [
  {
    title: "Local Career Guidance",
    description: "In-depth understanding of job markets across Thamarassery, Calicut, and Wayanad region.",
    icon: "Compass",
  },
  {
    title: "Personalized Job Assistance",
    description: "Dedicated profile review and role recommendations tailored to your qualifications.",
    icon: "UserCheck",
  },
  {
    title: "Easy WhatsApp Communication",
    description: "Direct, fast responses and regular updates without complicated application portals.",
    icon: "MessageCircle",
  },
  {
    title: "Support for Job Seekers",
    description: "Ethical, candidate-centered consultation from freshers to experienced professionals.",
    icon: "HeartHandshake",
  },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "job-search",
    title: "Job Search Assistance",
    description: "Targeted help for candidates to identify open vacancies that match their education, skills, and preferred locations in Thamarassery and Kozhikode.",
    iconName: "Search",
    benefits: [
      "Access to regional job openings",
      "Freshers and experienced profiles",
      "Role-matching consultation",
    ],
  },
  {
    id: "career-guidance",
    title: "Career Guidance",
    description: "One-on-one career counseling to evaluate strengths, clarify professional pathways, and guide candidates toward sustainable career growth.",
    iconName: "Compass",
    benefits: [
      "Career pathway roadmap",
      "Skill-gap advisory",
      "Clarity on industry demand",
    ],
  },
  {
    id: "recruitment-assistance",
    title: "Recruitment Assistance",
    description: "Supporting local businesses and enterprises with candidate screening and sourcing reliable talent suited for their specific operational needs.",
    iconName: "Briefcase",
    benefits: [
      "Talent shortlisting",
      "Pre-screened applicants",
      "Fast local hiring process",
    ],
  },
  {
    id: "employment-guidance",
    title: "Employment Opportunity Guidance",
    description: "Clear explanations of workplace expectations, required qualifications, remuneration standards, and job responsibilities before applying.",
    iconName: "FileCheck",
    benefits: [
      "Transparency on job profiles",
      "Preparation before employer calls",
      "Realistic career expectations",
    ],
  },
  {
    id: "candidate-employer",
    title: "Candidate-Employer Connections",
    description: "Bridging the gap between active job seekers in Thamarassery and verified employers in Kozhikode, Wayanad, and across Northern Kerala.",
    iconName: "Network",
    benefits: [
      "Direct employer introductions",
      "Structured communication",
      "Prompt interview scheduling",
    ],
  },
  {
    id: "local-job-support",
    title: "Local Job Opportunity Support",
    description: "Dedicated assistance for candidates seeking opportunities close to home in Thamarassery town, minimizing lengthy commutes and relocation challenges.",
    iconName: "MapPin",
    benefits: [
      "Hyper-local vacancies",
      "Travel-friendly work options",
      "Community-rooted support",
    ],
  },
];

export const SEO_KEYWORD_CLUSTERS: LocalSeoCluster[] = [
  {
    id: "cluster-1",
    keyword: "Job Consultancy in Thamarassery",
    heading: "Premier Job Consultancy in Thamarassery for Aspiring Professionals",
    content: "Looking for a reliable Job Consultancy in Thamarassery? Wildo Job Consultancy helps job seekers explore employment opportunities and find guidance suited to their career goals. Whether you are a fresh graduate entering the employment market or an experienced professional seeking career progression, our Thamarassery office provides personalized advisory to align your qualifications with genuine regional vacancies.",
    badge: "Thamarassery Career Hub",
  },
  {
    id: "cluster-2",
    keyword: "Best Job Consultancy in Thamarassery",
    heading: "Trusted Career Guidance & Candidate-Focused Support",
    content: "When searching for the Best Job Consultancy in Thamarassery, candidates prioritize responsiveness, transparent guidance, and honest vacancy information. Wildo Job Consultancy emphasizes ethical recruitment practices, ensuring applicants understand job specifications, compensation expectations, and realistic prospects before taking their next career steps.",
    badge: "Ethical & Transparent",
  },
  {
    id: "cluster-3",
    keyword: "Job Placement Agency Thamarassery",
    heading: "Facilitating Local Career Transitions in Thamarassery",
    content: "As a responsive Job Placement Agency Thamarassery job seekers rely upon, Wildo Job Consultancy connects applicants directly with businesses actively seeking motivated team members. We simplify the candidate submission process and provide clear feedback on profile compatibility.",
    badge: "Placement Support",
  },
  {
    id: "cluster-4",
    keyword: "Recruitment Agency in Thamarassery",
    heading: "Connecting Local Businesses with Dedicated Talent",
    content: "For regional enterprises seeking dependable staffing, partnering with a professional Recruitment Agency in Thamarassery reduces hiring turnaround times. Wildo Job Consultancy assists local enterprises in identifying candidates whose skills and cultural fit meet business requirements.",
    badge: "Employer Sourcing",
  },
  {
    id: "cluster-5",
    keyword: "Job Consultancy in Calicut & Kozhikode",
    heading: "Expanding Opportunities: Job Consultancy in Kozhikode & Calicut",
    content: "If you are searching for a Job Consultancy in Kozhikode or Job Consultancy in Calicut, our proximity to the greater district allows candidates in Thamarassery to seamlessly tap into expanding commercial and corporate openings across Calicut city and neighboring business corridors.",
    badge: "Kozhikode District Network",
  },
  {
    id: "cluster-6",
    keyword: "Employment Agency Thamarassery",
    heading: "Structured Employment Guidance for All Career Stages",
    content: "Wildo Job Consultancy functions as an accessible Employment Agency Thamarassery residents can turn to for resume presentation tips, interview readiness, and insights into local commercial hiring trends.",
    badge: "Employment Advisory",
  },
  {
    id: "cluster-7",
    keyword: "Jobs in Thamarassery & Job Opportunities in Kozhikode",
    heading: "Discover High-Potential Jobs in Thamarassery and Kozhikode",
    content: "Finding genuine Jobs in Thamarassery and promising Job opportunities in Kozhikode begins with having the right local connection. Wildo Job Consultancy monitors regional hiring demand across retail, administration, technical services, and sales to keep candidates informed about viable options.",
    badge: "Active Opportunities",
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    stepNumber: "01",
    title: "Contact Wildo Job Consultancy",
    description: "Reach out instantly through our dedicated WhatsApp button or telephone call. Tell us about your current status and what kind of position you are looking for.",
    icon: "PhoneCall",
  },
  {
    stepNumber: "02",
    title: "Share Career Interests & Details",
    description: "Send your resume, educational background, key skills, and preferred work locations around Thamarassery or Kozhikode.",
    icon: "FileSpreadsheet",
  },
  {
    stepNumber: "03",
    title: "Discuss Suitable Opportunities",
    description: "Our consultancy team reviews matching vacancies, explains requirements and compensation details, and guides you through next steps with prospective employers.",
    icon: "UserCheck",
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Rahul K.",
    role: "Accounts & Office Executive",
    location: "Thamarassery",
    image: "/images/testimonial-rahul.jpg",
    rating: 5,
    comment: "Connecting with Wildo Job Consultancy over WhatsApp made my job search completely stress-free. They clearly explained the role requirements and helped me find an accounting opening right in the Thamarassery area.",
    date: "Recent Candidate",
  },
  {
    id: "test-2",
    name: "Anjali Nair",
    role: "Customer Relationship Associate",
    location: "Kozhikode",
    image: "/images/testimonial-anjali.jpg",
    rating: 5,
    comment: "The team provided sincere advice about opportunities in Calicut. Their quick response on WhatsApp and realistic guidance regarding interview expectations helped me secure a wonderful position.",
    date: "Recent Candidate",
  },
  {
    id: "test-3",
    name: "Mohammed Shafi",
    role: "Sales & Marketing Coordinator",
    location: "Kozhikode District",
    image: "/images/testimonial-mohammed.jpg",
    rating: 5,
    comment: "Wildo Job Consultancy understands the local job market in Malabar very well. They don't make exaggerated claims—just honest, dependable coordination with genuine employers.",
    date: "Recent Candidate",
  },
];

export const SAMPLE_JOB_OPPORTUNITIES: JobOpportunityItem[] = [
  {
    id: "job-1",
    title: "Retail Sales Executive / Showroom Staff",
    category: "Sales & Retail",
    location: "Thamarassery Town",
    type: "Full-Time",
    experience: "0 - 2 Years (Freshers Welcome)",
    description: "Customer service, inventory display management, and assisting retail customers with product inquiries.",
  },
  {
    id: "job-2",
    title: "Accounts Assistant / Tally Operator",
    category: "Finance & Accounts",
    location: "Thamarassery / Calicut",
    type: "Full-Time",
    experience: "1 - 3 Years (B.Com / M.Com / Tally)",
    description: "Handling day-to-day billing, ledger entries, bank reconciliation, and basic GST filing documentation.",
  },
  {
    id: "job-3",
    title: "Front Desk & Office Administrator",
    category: "Administration",
    location: "Kozhikode District",
    type: "Full-Time",
    experience: "1+ Years",
    description: "Managing visitor greetings, phone communications, appointment schedules, and office documentation.",
  },
  {
    id: "job-4",
    title: "Field Marketing & Client Relations",
    category: "Marketing",
    location: "Thamarassery & Wayanad Highway",
    type: "Full-Time",
    experience: "0 - 3 Years",
    description: "Promoting business services, maintaining regular client interactions, and gathering regional customer feedback.",
  },
  {
    id: "job-5",
    title: "Customer Support & Tele-calling Executive",
    category: "Customer Support",
    location: "Kozhikode / Calicut",
    type: "Full-Time / Shift",
    experience: "0 - 2 Years (Good Malayalam & English)",
    description: "Inbound customer service, responding to customer queries, order tracking, and maintaining communication logs.",
  },
  {
    id: "job-6",
    title: "Delivery & Logistics Coordinator",
    category: "Operations",
    location: "Thamarassery Hub",
    type: "Full-Time",
    experience: "Experienced or Freshers with Driving License",
    description: "Route coordination, dispatch management, and supporting regional delivery schedules.",
  },
];
