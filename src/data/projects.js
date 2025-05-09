// This file contains all your project information
// To add a new project, copy an existing project object and modify its details
// Each project should have the following properties:
// - id: A unique number for the project
// - title: The name of your project
// - description: A brief description of what the project does
// - techStack: An array of technologies used
// - githubLink: Link to the GitHub repository
// - demoLink: Link to live demo (if available)
// - image: Path to project image (optional)

export const projects = [
  {
    id: 1,
    title: "Realtime ChatApp",
    description: "A simple and functional chat application enabling real-time conversations.",
    techStack: ["Next.js", "Supabase", "Zustand", "Tailwind CSS"],

    githubLink: "https://github.com/HoriyaDev/realtime-chatapp",
    demoLink: "https://realtime-chatapp-delta.vercel.app/login",
    image: "/images/01.png" // Fixed path
  },
  {
    id: 2,
    title: "GitHub Search App",
    description: "A React app for searching GitHub users and repositories with real-time updates and a clean, user-friendly interface.",
    techStack: ["React.js", "Tailwind CSS", "TanStack Query"],
    githubLink: "https://github.com/HoriyaDev/github-search-app",
    demoLink: "https://github-search-app-bice.vercel.app/",
    image: "/images/02.png" // Fixed path
  },
  // {
  //   id: 3,
  //   title: "Customer Churn Prediction",
  //   description: "Machine learning model for churn prediction in the telecommunications industry.",
  //   techStack: ["Python","Random Forest Classifier","Hyperparameter tuning","Cross Validation"],
  //   githubLink: "https://github.com/Shivanshu2407/Customer-Churn-Analysis/tree/main",
  //   demoLink: "https://shivanshu2407-customer-churn-analysis-srcapp-b4z2jc.streamlit.app/",
  //   image: "/images/Churn.png" // Fixed path
  // },
  // {
  //   id: 4,
  //   title: "Employee Retention Analytics",
  //   description: "Predicting employee attrition using machine learning to improve workforce retention.",
  //   techStack: ["Human Resource Analytics","Classification","Neural Network","Deep Learning"],
  //   githubLink: "https://github.com/Shivanshu2407/Employe-Attrition-Project/tree/main",
  //   // demoLink: "https://shivanshu2407-customer-churn-analysis-srcapp-b4z2jc.streamlit.app/",
  //   image: "/images/Emp Attr.png" // Fixed path
  // }
];

// Social media and contact links
export const socialLinks = {
  linkedin: "hhttps://www.linkedin.com/in/horiya-arif-04198032a/",
  github: "https://github.com/HoriyaDev",
  email: "horiyaarif13@gmail.com"
}; 