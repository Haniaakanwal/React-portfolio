import Markdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import React, { useEffect,useState } from 'react'
import Mainwindow from './Mainwindow';

export const Note = ({ windowName, setWindowsState }) => {
        const [ markdown, setMarkdown ] = useState(null)
    
        useEffect(() => {
            fetch("../public/note.txt")
                .then(res => res.text())
                .then(text => setMarkdown(text))
        }, [])
    
  return (
    <Mainwindow  windowName={windowName} setWindowsState={setWindowsState}>
  <div className="note-window h-full w-full p-2 bg-black rounded-md overflow-hidden overflow-y-auto">
                { markdown ? <SyntaxHighlighter language='JavaScript' style={atelierDuneDark} >{markdown}</SyntaxHighlighter> : <p>Loading...</p> }
            </div>
    </Mainwindow>
  )
}
