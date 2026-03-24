import React from 'react'
import Mainwindow from './Mainwindow'

const Pdf = ({ windowName, setWindowsState }) => {
  return (
    <Mainwindow  windowName={windowName} setWindowsState={setWindowsState}>
        <div className="resume h-full w-full overflow-auto">
          <embed src="../public/resume.pdf" type="" className='h-full w-full' />   
        </div>
       
    </Mainwindow>
  )
}

export default Pdf