export const portfolio = {
  name: "Joe Baarath S/O Sellathurai",
  title: "AI Engineer",
  contact: {
    email: "joebaarath@hotmail.com",
    phone: "+65 92328164",
    github: "https://github.com/joebaarath",
    linkedin: "https://www.linkedin.com/in/joebaarath/",
  },
  personalStatement: `
As an AI Engineer with strong programming and product management expertise, I design and deliver user-centric AI-driven solutions that bridge technical innovation with practical applications. My experience across corporate, startup, government, and academic settings allows me to integrate design thinking, software engineering, and statistical analysis to solve real-world problems through data-driven, empirical approaches.
  `,
  skills: {
    programming: ["Python", "TypeScript", "JavaScript", "C#", "Java", "Kotlin"],
    machineLearning: ["Scikit-learn", "PyTorch", "Pandas", "Matplotlib", "Seaborn"],
    databases: ["PostgreSQL", "MySQL", "MS SQL", "Oracle SQL"],
    productLeadership: ["Roadmapping", "Technical Scoping", "Stakeholder Alignment"],
    collaboration: ["Agile Delivery", "Cross-Functional Leadership", "Release Planning"],
  },
  experience: [
    {
      role: "Data Scientist | Product Manager",
      org: "Kinexcs",
      period: "Jun 2024 – Present",
      bullets: [
        "Directed Scrum and product delivery across AI-driven digital health products.",
        "Trained and fine-tuned deep learning models for wound complication classification.",
        "Led software pipeline design for clinical-trial AI workflows and EHR integrations.",
        "Improved computer-vision model accuracy (RMSE 8.3° → 3.7°).",
        "Conducted statistical analyses (RMSE, ICC, Bland-Altman) to guide development.",
        "Represented company in Japan to secure clinical pilots and partnerships.",
        "Mentored interns and FYP students aligning academic projects with roadmap."
      ],
    },
    {
      role: "Product Manager Intern",
      org: "GovTech Singapore",
      period: "May 2023 – Aug 2023",
      bullets: [
        "Built a sign-language-to-text computer-vision prototype to aid the deaf community.",
        "Managed data collection, model experimentation, and stakeholder engagement."
      ],
    },
    {
      role: "Software Developer Intern | Scrum Master",
      org: "Kinexcs",
      period: "Sep 2022 – Dec 2022",
      bullets: [
        "Developed native Android CV app with real-time feedback using Kotlin.",
        "Introduced Agile practices, leading three product teams through first sprints."
      ],
    },
    {
      role: "Development Associate",
      org: "Accenture",
      period: "Jul 2017 – Feb 2020",
      bullets: [
        "Built full-stack financial web apps using Angular and MS SQL for a sovereign fund.",
        "Integrated reconciliation pipelines, CI/CD, and JSON-based business logic."
      ],
    },
  ],
  education: [
    {
      school: "Singapore University of Technology and Design (SUTD)",
      degree: "Bachelor of Engineering (Computer Science and Design)",
      period: "Sep 2020 – May 2024",
      details: ["Track: Data Analytics", "Minor: Artificial Intelligence"],
    },
    {
      school: "Nanyang Polytechnic (School of IT)",
      degree: "Specialist Diploma in Information Systems Development",
      period: "Sep 2017 – Sep 2018",
      details: ["Scrum Master I (PSM I) Certified"],
    },
    {
      school: "Nanyang Polytechnic (School of IT)",
      degree: "Diploma in Business Enterprise IT",
      period: "Apr 2011 – Mar 2014",
    },
  ],
  projects: [
    {
      title: "VR Vehicle Inspection Simulator",
      context: "HTX Capstone Project",
      period: "Sep 2023 – May 2024",
      summary:
        "Led 7-member team to build a VR training simulator for security agents using Unity C# and custom haptic gloves, aligning with HTX operational needs.",
      github: "https://github.com/joebaarath/CapstoneVehicleInspection",
    },
    {
      title: "Fake News Challenge (FNC-I)",
      context: "AI Course Project",
      period: "Jan 2024 – May 2024",
      summary:
        "Developed stance-detection models (LSTM, biLSTM, GRU, CNN + Attention) for headline-body classification.",
      github: "https://github.com/joebaarath/ai_project2024.git",
    },
    {
      title: "HDB Resale Price Prediction",
      context: "Computational Data Science",
      period: "Jan 2023 – Apr 2023",
      summary:
        "Preprocessed HDB datasets and tested predictive models (XGBoost, LSTM) for price forecasting.",
      github: "https://github.com/joebaarath/50.038-CDS-Project",
    },
    {
      title: "COVID-19 Mortality Prediction",
      context: "Data Driven World Course",
      period: "Sep 2021 – Dec 2021",
      summary:
        "Implemented custom multiple-linear-regression model (Python) to analyze deaths vs economic impact.",
      github: "https://github.com/joebaarath/term3_dtp",
    },
  ],
};
