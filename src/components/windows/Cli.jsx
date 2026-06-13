
import Terminal from "react-console-emulator";
import Mainwindow from "./Mainwindow";

const commands = {
  about: {
    description: "About me",
    fn: () => `
Hi — I'm Hania Kanwal 👋

Full Stack Developer
BS Software Engineering (3rd Year)

I build modern web applications using:
• React.js
• Node.js
• Express.js
• MongoDB

Interested in AI-powered applications,
REST APIs, and scalable web solutions.
`
  },

  skills: {
    description: "My skills",
    fn: () => `
Skills:

• Full Stack Development
• React.js
• JavaScript (ES6+)
• Node.js
• Express.js
• MongoDB
• REST API Development
• JWT Authentication
• Tailwind CSS
• AI Integration (MediaPipe)
• Git & GitHub
`
  },

  tech: {
    description: "Technologies I use",
    fn: () => `
Tech Stack

Frontend:
- React.js
- HTML5
- CSS3
- JavaScript
- Tailwind CSS

Backend:
- Node.js
- Express.js

Database:
- MongoDB
- Mongoose

Tools:
- Git
- GitHub
- VS Code
- ImageKit
- Render
- Vercel
`
  },

  projects: {
    description: "Featured projects",
    fn: () => `
Projects

1. MoodTunes
   AI-powered mood-based music player
   React + Node + MongoDB + MediaPipe

2. Postra
   Full Stack social media platform
   JWT + ImageKit + MongoDB

3. Productivity Dashboard
   Task Manager + Pomodoro + Weather
`
  },

  education: {
    description: "Education",
    fn: () => `
BS Software Engineering

University of Azad Jammu & Kashmir

2023 - 2027
Currently in 3rd Year
`
  },

  resume: {
    description: "Professional summary",
    fn: () => `
Full Stack Developer with hands-on
experience building and deploying
production-ready web applications.

Core Stack:
React.js
Node.js
Express.js
MongoDB
REST APIs
JWT Authentication
`
  },

  contact: {
    description: "Contact information",
    fn: () => `
Contact

Email:
haniakanwal239@gmail.com

GitHub:
https://github.com/Haniaakanwal

LinkedIn:
https://linkedin.com/in/your-linkedin

Portfolio:
https://your-portfolio-link.com
`
  },

  echo: {
    description: "Echo text",
    usage: "echo <text>",
    fn: (...args) => args.join(" ")
  }
};

const Cli = ({ windowName, setWindowsState }) => {
  return (
    <Mainwindow
      windowName={windowName}
      setWindowsState={setWindowsState}
    >
      <div className="h-full w-full bg-black border rounded-md p-2">
        <Terminal
          commands={commands}
          welcomeMessage={`
Welcome to Hania Kanwal's Portfolio 💻

Full Stack Developer
React • Node.js • MongoDB • AI

Type "help" to see all available commands.
`}
          promptLabel={"hania@fullstack:~$"}
          promptLabelStyle={{
            color: "#ff79c6"
          }}
          style={{
            background: "transparent",
            color: "#00ff9f",
            fontSize: "14px",
            borderRadius: "5px",
            marginBottom: "40px",
            overflow: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none"
          }}
        />
      </div>
    </Mainwindow>
  );
};

export default Cli;

