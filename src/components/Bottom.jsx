import React from "react";
import "./bottom.css";

const Bottom = ({ setWindowsState }) => {
  return (
    <div className="bg-white/50 p-1.5 rounded-md mb-0.5 inline-flex items-center gap-2 absolute bottom-0 left-1/2 -translate-x-1/2">
      <div className="icons cal"      onClick={() => {
          window.open("https://calendar.google.com/", "_blank");
        }}>
        <img src="/doc-icons/calender.svg" alt="" className=" p-1.5" />
      </div>

      <div
        onClick={() => {
          setWindowsState((state) => ({ ...state, github: true }));
        }}
        className="icons github"
      >
        <img src="/doc-icons/github.svg" alt="" className=" p-1.5" />
      </div>

      <div className="icons link"      onClick={() => {
          window.open("https://www.linkedin.com/in/haniakanwal", "_blank");
        }}>
        <img src="/doc-icons/link.svg" alt="" className=" p-1.5" />
      </div>

      <div className="icons mail"     onClick={() => {
          window.open("mailto:haniakanwal239@gmail.com", "_blank");
        }}>
        <img src="/doc-icons/mail.svg" alt="" className=" p-1.5" />
      </div>

      <div
        onClick={() => {
          setWindowsState((state) => ({ ...state, note: true }));
        }}
        className="icons note"
      >
        <img src="/doc-icons/note.svg" alt="" className=" p-1.5" />
      </div>

      <div
        onClick={() => {
          setWindowsState((state) => ({ ...state, resume: true }));
        }}
        className="icons pdf"
      >
        <img src="/doc-icons/pdf.svg" alt="" className=" p-1.5" />
      </div>


      <div
        onClick={() => {
          setWindowsState((state) => ({ ...state, spotify: true }));
        }}
        className="icons spotify"
      >
        <img src="/doc-icons/spotify.svg" alt="" className=" p-1.5" />
      </div>


      <div
        onClick={() => {
          setWindowsState((state) => ({ ...state, cli: true }));
        }}
        className="icons cli"
      >
        <img src="/doc-icons/cli.svg" alt="" className=" p-1.5" />
      </div>

    </div>
  );
};

export default Bottom;
