import Bottom from "./components/Bottom"
import Nav from "./components/Nav"
import Cli from "./components/windows/Cli"
import Github from "./components/windows/Github"
import Spotify from "./components/windows/Spotify"
import {Note} from './components/windows/Note'
import Pdf from './components/windows/Pdf'
import { useState } from 'react'
import Clock from "./Clock"

function App() {


  const [windowsState, setWindowsState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false
  })
  
  return (
<div className="main h-screen w-screen overflow-hidden absolute" >
  <Nav/>
<Clock/>
<Bottom  windowsState={windowsState} setWindowsState={setWindowsState}/>

    { windowsState.github && <Github windowName="github" setWindowsState={setWindowsState} />}
      { windowsState.note && <Note windowName="note" setWindowsState={setWindowsState} />}
      { windowsState.resume && <Pdf windowName="resume" setWindowsState={setWindowsState} />}
      { windowsState.spotify && <Spotify windowName="spotify" setWindowsState={setWindowsState} />}
      { windowsState.cli && <Cli windowName="cli" setWindowsState={setWindowsState} />}

</div>
  )
}

export default App
