import React from 'react'
import { Rnd } from 'react-rnd'

const Mainwindow = ({ children , width='50vw', height='60vh', windowName, setWindowsState }) => {

  return (
    <Rnd default={{width: width, height: height , x: 200, y: 200 }}>
      
      <div className="h-full w-full bg-white/50  text-black rounded-md overflow-hidden flex flex-col">

        <div className="h-8 border-b flex items-center gap-3 px-2">
          <div className="flex gap-1">
            <div onClick={() => setWindowsState(state => ({ ...state, [windowName]: false }))} className="h-4 w-4  rounded-full bg-red-500 cursor-pointer" ></div>
            <div className="h-4 w-4 rounded-full bg-yellow-400"></div>
            <div className="h-4 w-4 rounded-full bg-green-500"></div>
          </div>

          <p className="text-sm">haniakanwal - zsh</p>
        </div>

      <div className="flex-1 overflow-auto p-4 bg-white/10 ">
  {children}
</div>

      </div>

    </Rnd>
  )
}

export default Mainwindow