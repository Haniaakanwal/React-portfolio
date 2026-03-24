import Terminal from 'react-console-emulator'
import Mainwindow from './Mainwindow'

const commands = {

  about: {
    description: 'About me',
    fn: () => `
Hi — I'm Hania 👋
A Frontend Developer currently in 3rd year of Software Engineering.

I build interactive web applications, dashboards,
and modern UI-focused projects using React and JavaScript.
`
  },

  skills: {
    description: 'My skills',
    fn: () => `
Skills:

• Frontend Development
• React.js
• JavaScript (ES6)
• Responsive Design
• UI/UX Design
• API Integration
• Problem Solving
`
  },

  tech: {
    description: 'Technologies I use',
    fn: () => `
Tech Stack:

React.js
JavaScript
Tailwind CSS
HTML5
CSS3
Git & GitHub
`
  },

  projects: {
    description: 'Featured projects',
    fn: () => `
Projects:

1. Productivity Dashboard
   → Task manager + planner + pomodoro + weather

2. Weather App
   → Real-time weather using Open-Meteo API

3. React Image Gallery
   → Dynamic gallery with filters & pagination (Tailwind + API)
`
  },

  contact: {
    description: 'Contact info',
    fn: () => `
Contact:

GitHub: https://github.com/Haniaakanwal
Email: Haniakanwal239@gmail.com
`
  },

  echo: {
    description: 'Echo text',
    usage: 'echo <text>',
    fn: (...args) => args.join(' ')
  }

}

const Cli = ({ windowName, setWindowsState }) => {
  return (
    <Mainwindow windowName={windowName} setWindowsState={setWindowsState}>
      <div className="h-full w-full bg-black border rounded-md p-2 ">
        <Terminal 
          commands={commands}
          welcomeMessage={`
Welcome to Hania CLI Portfolio 💻

Type "help" to see available commands.
`}
          promptLabel={'hania@portfolio:~$'}
          promptLabelStyle={{ color: '#ff79c6' }}
          style={{
            background: 'transparent',
            color: '#00ff9f',
            fontSize: '14px',
            borderRadius: '5px',
            marginBottom: '40px',
            overflow: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        />
      </div>
    </Mainwindow>
  )
}

export default Cli