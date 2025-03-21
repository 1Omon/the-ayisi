// /lib/data.ts
export const personalInfo = {
    name: "Ayisi Solomon Annan",
    location: "Kumasi, Ghana",
    phone: "+233-555-284-923",
    email: "solomonannanayisi@gmail.com",
    links: {
      portfolio: "the-ayisi.vercel.app",
      github: "github.com/1Omon",
      linkedin: "linkedin.com/in/solomon-ayisi-b03b99212"
    },
    summary: "Innovative Full-Stack Engineer and Startup Founder with 4+ years of experience in designing, developing, and deploying scalable web applications. Proven ability to lead technical teams, build high-impact products, and drive business growth through technology. Passionate about solving real-world problems in healthcare, education, and e-commerce using Node.js, React, and AI-driven solutions."
  };
  
  export const skills = {
    frontend: ["React.js", "Next.js", "React Native", "Tailwind CSS", "UI/UX Design (Figma)"],
    backend: ["Node.js", "Express.js", "NestJS", "FastAPI", "Spring Boot"],
    languages: ["JavaScript", "TypeScript", "Python", "Java"],
    database: ["PostgreSQL", "MongoDB", "GraphQL", "REST"],
    devops: ["Docker", "Git"],
    other: ["Microservices Architecture", "System Design", "Agile", "Product Management"]
  };
  
  export const experience = [
    {
      position: "Founder",
      company: "XCUXION (formerly Technology Wrights)",
      period: "Feb 2022 – Present",
      location: "Ghana (Remote Possible)",
      achievements: [
        "Built a tech consultancy that successfully executed 50+ client projects in education, healthcare, and fintech.",
        "Designed and led techpreneurship training programs, mentoring 50+ aspiring founders and engineers.",
        "Developed a remote learning platform for startup incubation, integrating business strategy and product development."
      ]
    },
    {
      position: "System Designer & Engineer",
      company: "AlphaFind LLC",
      period: "Apr 2021 – Jul 2023",
      location: "Remote (Ghanaian-based Company)",
      achievements: [
        "Led the development of two major SaaS products in e-commerce and real estate.",
        "Designed and optimized a RESTful API for university admission tracking, serving 1,000+ active users.",
        "Spearheaded frontend architecture for tertiaryguide.com, boosting user engagement by 40%.",
        "Managed a 4-person development team, implementing Agile and CI/CD workflows."
      ]
    },
    {
      position: "Network Engineering Intern",
      company: "Vodafone Ghana",
      period: "Aug 2021 – Oct 2021",
      location: "Ghana",
      achievements: [
        "Installed and maintained enterprise network infrastructure, ensuring 99% uptime.",
        "Provided technical support to 50+ enterprise clients, achieving a 95% satisfaction rate."
      ]
    }
  ];
  
  export const projects = [
    {
      name: "DeyGo",
      role: "Backend Engineer",
      description: "Ride-Hailing Platform",
      details: [
        "Developed and maintained the backend architecture for DeyGo, a ride-hailing platform in Ghana.",
        "Built the admin portal for managing drivers, riders, and trip analytics."
      ],
      techStack: ["Node.js", "Express.js", "MongoDB", "Next.js"],
      image: "/deygo.jpg" // Placeholder
    },
    {
      name: "Preproom",
      role: "Backend Engineer",
      description: "Exam Simulation & Learning Platform",
      details: [
        "Engineered the backend system for Preproom, an app designed to help students ace their exams through simulation-based learning.",
        "Implemented a scalable API for managing tests, student progress tracking, and AI-driven learning recommendations."
      ],
      techStack: ["NestJS", "MongoDB", "GraphQL"],
      image: "/preproom.jpg" // Placeholder
    },
    {
      name: "VH-Consult",
      role: "Lead Engineer",
      description: "Healthcare Innovation",
      details: [
        "Architected a full-stack telehealth platform, improving healthcare accessibility in Africa.",
        "Developed real-time video consultation features using OpenCV and WebRTC."
      ],
      techStack: ["NestJS", "Next.js", "React Native", "PostgreSQL", "MongoDB", "GraphQL"],
      image: "/vh-consult.jpg" // Placeholder
    },
    {
      name: "Basic School Management System",
      role: "Lead Developer",
      description: "EdTech Solution",
      details: [
        "Developed a progressive web app (PWA) serving 10+ schools in Ghana.",
        "Automated administrative workflows and integrated payment processing."
      ],
      techStack: ["Next.js", "MongoDB", "GraphQL", "Paystack"],
      image: "/school-management.jpg" // Placeholder
    }
  ];
  
  export const education = [
    {
      institution: "Kwame Nkrumah University of Science & Technology (KNUST)",
      degree: "Bachelor of Science in Computer Science",
      honors: "First Class Honors",
      period: "Aug 2020 – Sep 2024",
      location: "Ghana",
      details: [
        "Thesis: \"Virtual Healthcare Delivery System: Telemedicine as a Complementary Healthcare Channel in Ghana\"",
        "Relevant Coursework: Software Engineering, Systems Analysis & Design, Data Structures, Entrepreneurship"
      ]
    }
  ];
  
  export const achievements = [
    "Founded XCUXION, training 100+ aspiring software engineers and entrepreneurs.",
    "Developed and launched 3 successful SaaS products from concept to deployment.",
    "Regular speaker and mentor for tech communities in Ghana."
  ];
  
  export const additionalInfo = [
    "Open to remote opportunities in Europe, USA, UAE, and Asia.",
    "Actively learning Cybersecurity to enhance DevSecOps skills.",
    "Passionate about AI for cybersecurity and real-time system defense."
  ];