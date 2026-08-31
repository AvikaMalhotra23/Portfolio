export const personalDetails = {
  name: "Avika Malhotra",
  title: "Aspiring Software Engineer & Full-Stack Developer",
  tagline: "2nd-Year B.Tech Student at Lovely Professional University",
  phone: "7800762822",
  email: "malhotraavika23@gmail.com",
  linkedin: "https://www.linkedin.com/in/avikamalhotra23/",
  github: "https://github.com/AvikaMalhotra23/",
  location: "Lovely Professional University, Phagwara, Punjab / Kanpur, UP",
  photo: "/assets/avika_profile.jpg",
  summary: "Enthusiastic and results-driven 2nd-year B.Tech undergraduate at Lovely Professional University with strong fundamentals in Data Structures & Algorithms, modern web development, and digital systems. Proven capability in building full-stack applications, interactive learning tools, and hardware prototypes. Demonstrated analytical mindset through Deloitte Australia job simulations and continuous certifications across AI, C++, and Cloud Computing."
};

export const initialEducation = [
  {
    id: "lpu",
    institution: "Lovely Professional University (LPU)",
    degree: "B.Tech",
    year: "2nd Year (3rd Semester)",
    program: "Core",
    specialization: "Computer Science & Engineering",
    editable: true,
    isCurrent: true,
    highlights: [
      "Building a solid base in Data Structures, Algorithms, DBMS, and Object-Oriented Programming.",
      "Engaged in hands-on practical software development projects alongside hardware electronics coursework.",
      "Active participant in technical learning communities and simulation modules."
    ]
  },
  {
    id: "class12",
    institution: "Heritage International School",
    degree: "Class XII (Senior Secondary)",
    year: "2025",
    score: "90%",
    highlights: [
      "Achieved outstanding 90% score in Senior Secondary Board Examinations.",
      "Built strong foundational knowledge in Mathematics, Physics, and Computer Science."
    ]
  },
  {
    id: "class10",
    institution: "Mariampur Senior Secondary School",
    degree: "Class X (Secondary)",
    year: "2023",
    score: "93%",
    highlights: [
      "Secured 93% distinction in Secondary Board Examinations.",
      "Recognized for academic excellence and active participation in science exhibitions."
    ]
  }
];

export const skillCategories = [
  {
    category: "Programming Languages",
    icon: "Code",
    skills: [
      { name: "C++", level: "Advanced", icon: "Code2", description: "DSA, OOP, System Concepts" },
      { name: "Java", level: "Intermediate", icon: "Coffee", description: "OOP, Data Structures" },
      { name: "Python", level: "Intermediate", icon: "Terminal", description: "Scripting, Logic, AI Basics" },
      { name: "JavaScript", level: "Intermediate", icon: "FileCode", description: "ES6+, DOM, Web Logic" }
    ]
  },
  {
    category: "Web Development",
    icon: "Globe",
    skills: [
      { name: "HTML5", level: "Advanced", icon: "Layout", description: "Semantic Structure, Web Standards" },
      { name: "CSS3", level: "Advanced", icon: "Palette", description: "Flexbox, Grid, Glassmorphism, Responsive" },
      { name: "JavaScript (ES6+)", level: "Intermediate", icon: "Zap", description: "Async/Await, Fetch, DOM" },
      { name: "React", level: "Intermediate", icon: "Atom", description: "Components, Hooks, State Management" },
      { name: "Responsive Design", level: "Advanced", icon: "Smartphone", description: "Mobile-First Layouts, Cross-Browser" }
    ]
  },
  {
    category: "Database & Backend",
    icon: "Database",
    skills: [
      { name: "SQL", level: "Intermediate", icon: "Database", description: "Queries, Joins, Schema Design" },
      { name: "DBMS", level: "Intermediate", icon: "Server", description: "Relational Concepts, Normalization" },
      { name: "Firebase", level: "Intermediate", icon: "Flame", description: "Firestore, Authentication, Hosting" },
      { name: "REST APIs", level: "Intermediate", icon: "Network", description: "API Integration, HTTP Methods" },
      { name: "Authentication", level: "Intermediate", icon: "ShieldCheck", description: "User Auth, Role Security" }
    ]
  },
  {
    category: "Core Computer Science",
    icon: "Cpu",
    skills: [
      { name: "Data Structures & Algorithms", level: "Advanced", icon: "Binary", description: "Arrays, Trees, Graphs, Sorting, Dynamic Programming" },
      { name: "Problem Solving", level: "Advanced", icon: "BrainCircuit", description: "Algorithmic Thinking, Optimization" }
    ]
  },
  {
    category: "Tools & Platforms",
    icon: "Wrench",
    skills: [
      { name: "Git", level: "Intermediate", icon: "GitBranch", description: "Version Control, Branching" },
      { name: "GitHub", level: "Intermediate", icon: "Github", description: "Repositories, Collaboration" },
      { name: "VS Code", level: "Advanced", icon: "Laptop", description: "Extensions, Debugging, Environment Setup" }
    ]
  },
  {
    category: "AI / Machine Learning",
    icon: "Sparkles",
    skills: [
      { name: "AI/ML Tools & Technologies", level: "Intermediate", icon: "Bot", description: "AI Integration, Prompting, Tools" },
      { name: "Building with AI", level: "Intermediate", icon: "Cpu", description: "Saylor Certified AI Application Building" }
    ]
  }
];

export const projects = [
  {
    id: "homigo",
    title: "Homigo — Accommodation & Roommate Finder",
    category: "Web Development",
    typeTag: "Web Platform",
    image: "/assets/homigo_preview.png",
    shortDescription: "A web-based platform designed to simplify finding suitable accommodation and compatible roommates.",
    fullDescription: "Homigo is a centralized student and professional accommodation discovery web platform that simplifies roommate matching and housing search. The application allows users to browse verified living options based on personal preferences, budget, and location constraints, providing a streamlined visual search interface.",
    keyFocus: ["Accommodation Discovery", "Roommate Matching", "User-Friendly Interface", "Search & Filtering"],
    techStack: ["React", "JavaScript", "HTML5/CSS3", "Firebase", "REST APIs"],
    features: [
      "Interactive search & multi-parameter filter for living spaces",
      "Compatibility-based roommate profile card discovery",
      "Clean responsive dashboard layout with instant listing previews",
      "Centralized location and amenities information display"
    ]
  },
  {
    id: "dsagenie",
    title: "DSA Genie — Data Structures & Algorithms Learning Platform",
    category: "Learning Platform",
    typeTag: "EduTech App",
    image: "/assets/dsagenie_preview.png",
    shortDescription: "An interactive learning platform designed to help students understand and practice DSA concepts effectively.",
    fullDescription: "DSA Genie provides a structured learning environment tailored for Computer Science students preparing for algorithmic coding challenges. It breaks down complex Data Structures and Algorithms into digestible modules, complete with visual representations, sample code snippet executions, and structured practice paths.",
    keyFocus: ["DSA Concepts", "Algorithm Practice", "Problem Solving", "Interactive Learning"],
    techStack: ["C++", "JavaScript", "React", "CSS3", "Data Structures"],
    features: [
      "Structured topic roadmaps spanning Binary Trees, Graphs, Sorting, and Dynamic Programming",
      "Visual algorithm step-throughs to clarify complex pointers and recursions",
      "Curated practice problem set categorized by difficulty and company tags",
      "Interactive code playground interface for immediate problem solving"
    ]
  },
  {
    id: "bestnear",
    title: "Best Near — Nearby Places & Services Finder",
    category: "Web & Location",
    typeTag: "Location App",
    image: "/assets/bestnear_preview.png",
    shortDescription: "A location-focused application that helps users discover useful places and essential services nearby.",
    fullDescription: "Best Near streamlines location-based service discovery by aggregating relevant local information into a single intuitive interface. Users can seamlessly identify nearby essential services, dining options, emergency locations, and points of interest without sifting through fragmented web searches.",
    keyFocus: ["Location-Based Search", "Nearby Places", "Service Discovery", "User Experience"],
    techStack: ["JavaScript", "REST APIs", "HTML5", "CSS3", "Responsive UI"],
    features: [
      "Real-time location service identification and category grouping",
      "Interactive map pin visualizations with quick distance calculations",
      "Filter options for operating hours, ratings, and service types",
      "Mobile-optimized touch interface for quick navigation on the go"
    ]
  },
  {
    id: "campushelper",
    title: "Building Campus Helper App — Campus Assistance Platform",
    category: "Student Assistance",
    typeTag: "Campus Utility",
    image: "/assets/campus_helper_preview.png",
    shortDescription: "A student-focused application designed to make navigating and accessing campus-related information effortless.",
    fullDescription: "Building Campus Helper App is an all-in-one digital assistant created to help university students quickly locate campus buildings, academic halls, library resources, and administrative facilities. It eliminates navigation friction for new and existing students by digitizing campus resources into one convenient access portal.",
    keyFocus: ["Campus Navigation", "Student Assistance", "Building Information", "Campus Resources"],
    techStack: ["React", "JavaScript", "CSS3", "JSON Data", "Web App"],
    features: [
      "Comprehensive building and hall locator with step-by-step campus guidance",
      "Centralized directory for university departments, libraries, and food courts",
      "Timetable & event schedule integration for streamlined daily student navigation",
      "Search-as-you-type search bar for instant building reference"
    ]
  },
  {
    id: "evm",
    title: "Electronic Voting Machine — ECE Academic Project",
    category: "Hardware & ECE",
    typeTag: "Hardware Prototype",
    image: "/assets/evm_preview.png",
    shortDescription: "An electronic voting machine prototype developed to demonstrate digital electronic voting and tallying logic.",
    fullDescription: "Developed as a key ECE academic hardware project, this Electronic Voting Machine (EVM) prototype demonstrates a secure, tampered-proof electronic vote casting mechanism. The project implements hardware push button inputs, microcontroller vote processing logic, LED indicator states, and real-time LCD vote count tallying.",
    keyFocus: ["Digital Electronics", "Voting Logic", "Input Handling", "Vote Counting", "Hardware Implementation"],
    techStack: ["C/C++", "Microcontroller", "Digital Logic", "LCD Display", "Hardware Circuits"],
    features: [
      "Dedicated candidate input push buttons connected to micro-controller digital pins",
      "Anti-debounce logic to prevent accidental duplicate vote registers",
      "Real-time vote count accumulation and secret admin tally inspection display",
      "Low-cost, reliable embedded digital control circuit layout"
    ]
  }
];

export const certifications = [
  {
    id: "saylor-cpp",
    title: "CS107: C++ Programming",
    issuer: "Saylor Academy / Saylor University",
    date: "July 11, 2026",
    certId: "5701638281AM",
    image: "/assets/cert_saylor_cpp.png",
    verifyUrl: "https://learn.saylor.org/pluginfile.php/1/tool_certificate/issues/1783763927/5701638281AM.pdf",
    description: "Comprehensive certification covering C++ syntax, object-oriented programming, memory management, pointers, and data structures."
  },
  {
    id: "simplilearn-cloud",
    title: "Introduction to Cloud Computing",
    issuer: "Simplilearn SkillUp",
    date: "July 1, 2026",
    certCode: "10417368",
    image: "/assets/cert_simplilearn_cloud.png",
    verifyUrl: "https://lms.simplilearn.com/courses/3971/Introduction-to-Cloud-Computing/certificate/download-skillup",
    description: "Foundational training in cloud architecture, deployment models (IaaS, PaaS, SaaS), virtualization, and cloud security basics."
  },
  {
    id: "saylor-ai",
    title: "CS205: Building with Artificial Intelligence",
    issuer: "Saylor Academy / Saylor University",
    date: "February 3, 2026",
    certId: "836348629AM",
    grade: "84.12%",
    image: "/assets/cert_saylor_ai.png",
    description: "Applied artificial intelligence coursework covering AI application development, model fundamentals, and practical building workflows."
  },
  {
    id: "infosys-ai",
    title: "Introduction to Artificial Intelligence",
    issuer: "Infosys Springboard",
    date: "March 5, 2026",
    image: "/assets/cert_infosys_ai.png",
    verifyUrl: "https://verify.onwingspan.com",
    description: "Official completion certificate covering core AI concepts, neural network fundamentals, intelligent agents, and industry AI applications."
  },
  {
    id: "wns-cdp",
    title: "Career Development Program (CDP)",
    issuer: "WNS Care Foundation",
    date: "2026",
    image: null,
    description: "Professional development and career readiness training program covering corporate soft skills, digital literacy, and leadership."
  },
  {
    id: "deloitte-tech",
    title: "Technology Job Simulation",
    issuer: "Deloitte Australia | Forage",
    date: "June 2026",
    image: null,
    description: "Completed practical technology simulation involving real-world-style software engineering tasks, development concepts, and technical analysis."
  },
  {
    id: "deloitte-analytics",
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte Australia | Forage",
    date: "June 2026",
    image: null,
    description: "Simulated business data analysis and insight generation project, practicing data interpretation, analytical thinking, and client communication."
  }
];

export const additionalHighlights = [
  {
    title: "Technical Learning",
    description: "Actively developing proficiency across programming languages, relational databases, web development, and core computer science concepts.",
    icon: "BookOpen"
  },
  {
    title: "Project-Based Learning",
    description: "Successfully applied classroom concepts to practical real-world applications spanning software development and hardware digital electronics.",
    icon: "Layers"
  },
  {
    title: "Problem Solving",
    description: "Consistently strengthening algorithmic thinking through daily Data Structures & Algorithms practice and competitive programming problems.",
    icon: "Target"
  },
  {
    title: "Cross-Domain Exposure",
    description: "Gained valuable multidisciplinary experience working across full-stack software development, business data analytics, and embedded digital electronics.",
    icon: "Cpu"
  },
  {
    title: "Continuous Development",
    description: "Proactively exploring modern software frameworks, cloud environments, and AI tools through hands-on project creation and specialized certifications.",
    icon: "TrendingUp"
  },
  {
    title: "Professional Exposure",
    description: "Participated in industry-oriented simulations (Deloitte Australia) to gain firsthand understanding of corporate software development and analytics workflows.",
    icon: "Briefcase"
  }
];

export const languages = [
  { name: "English", proficiency: "Professional / Fluent" },
  { name: "Hindi", proficiency: "Native / Fluent" }
];

export const interests = [
  { name: "Coding", icon: "Code" },
  { name: "Travelling", icon: "Compass" },
  { name: "Exploring Technology", icon: "Cpu" }
];
