import React from 'react'
import Mainwindow from './Mainwindow.jsx'
const Spotify = ({ windowName, setWindowsState }) => {
  return (
    <Mainwindow width='20vw' windowName={windowName} setWindowsState={setWindowsState}>
        <div>
  <iframe data-testid="embed-iframe" className=' w-full' src="https://open.spotify.com/embed/playlist/37i9dQZEVXbNy9tB5elXf1?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      
    </Mainwindow>
  )
}

export default Spotify