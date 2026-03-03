"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TerminalModal({ isOpen, onClose }: TerminalModalProps) {
  const [history, setHistory] = useState<{ command: string; output: React.ReactNode }[]>([]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      
      const now = new Date();
      const loginTime = now.toLocaleDateString("en-US", { month: "numeric", day: "numeric", year: "numeric" }) + ", " + now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true });

      setHistory([
        { 
          command: "", 
          output: (
            <div className="flex flex-col gap-1 mb-4 text-[#d3d7cf]">
              <div>Welcome to Ubuntu 22.04.3 LTS (GNU/Linux 5.15.0-91-generic x86_64)</div>
              <div>* Documentation:  https://help.ubuntu.com</div>
              <div>* Management:     https://landscape.canonical.com</div>
              <div>* Support:        https://ubuntu.com/advantage</div>
              <div className="text-blue-300 mt-1">Last login: {loginTime} on tty1</div>
              <div>Type 'help' for available commands.</div>
            </div>
          )
        }
      ]);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    const args = trimmed.split(" ");
    const baseCmd = args[0].toLowerCase();
    
    let output: React.ReactNode = "";

    switch (baseCmd) {
      case "help":
        output = (
          <div className="flex flex-col gap-1 mb-2">
            <span className="text-[#d3d7cf]">GNU bash, version 5.1.16(1)-release (x86_64-pc-linux-gnu)</span>
            <span className="text-[#d3d7cf]">These shell commands are defined internally. Type 'help' to see this list.</span>
            <div className="grid grid-cols-2 mt-2">
              <span className="text-blue-300">ls</span>
              <span className="text-blue-300">pwd</span>
              <span className="text-blue-300">whoami</span>
              <span className="text-blue-300">echo</span>
              <span className="text-blue-300">clear</span>
              <span className="text-blue-300">date</span>
              <span className="text-blue-300">contact</span>
              <span className="text-blue-300">exit</span>
            </div>
          </div>
        );
        break;
      case "ls":
        output = (
          <div className="flex gap-4 text-blue-400 font-bold mb-2">
            <span>projects/</span>
            <span>resume.pdf</span>
            <span>contact.txt</span>
            <span>about.md</span>
          </div>
        );
        break;
      case "pwd":
        output = <div className="mb-2">/home/aditya</div>;
        break;
      case "whoami":
        output = <div className="mb-2">aditya</div>;
        break;
      case "echo":
        output = <div className="mb-2">{args.slice(1).join(" ")}</div>;
        break;
      case "date":
        output = <div className="mb-2">{new Date().toString()}</div>;
        break;
      case "contact":
        output = <div className="mb-2"><a href="mailto:adityagup1a@gmail.com" className="hover:underline text-blue-300">adityagup1a@gmail.com</a></div>;
        break;
      case "clear":
        setHistory([]);
        return;
      case "exit":
        onClose();
        return;
      case "":
        output = "";
        break;
      default:
        output = <div className="mb-2 text-[#d3d7cf]">{baseCmd}: command not found</div>;
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
      setInput("");
    } else if (e.key === "c" && e.ctrlKey) {
      e.preventDefault();
      setHistory((prev) => [...prev, { command: input + "^C", output: "" }]);
      setInput("");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-3xl bg-[#0F0F0F] rounded-xl shadow-2xl overflow-hidden flex flex-col h-[500px] border border-zinc-800"
          >
            {/* Ubuntu Terminal Header */}
            <div className="bg-[#1C1C1E] border-b border-[#282828] px-4 py-3 flex items-center justify-between">
              <div className="flex-1"></div>
              <div className="flex-1 text-center text-[13px] text-zinc-400 font-mono tracking-tight font-medium flex items-center justify-center gap-2">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                aditya@portfolio:~
              </div>
              <div className="flex-1 flex justify-end gap-2">
                {/* Window controls styling for a subtle dark mode feel, mimicking the reference */}
              </div>
            </div>

            {/* Terminal Body */}
            <div 
              className="flex-1 p-4 sm:p-5 font-mono text-[14px] leading-relaxed overflow-y-auto text-[#d3d7cf] cursor-text bg-[#0F0F0F]" 
              onClick={() => inputRef.current?.focus()}
            >
              {history.map((entry, i) => (
                <div key={i} className="">
                  {entry.command !== "" || i > 0 ? (
                     <div className="flex items-start flex-wrap gap-x-2">
                       <span className="text-[#8ae234] font-bold shrink-0">aditya@portfolio<span className="text-white">:</span><span className="text-[#729fcf]">~</span><span className="text-white">$</span></span>
                       <span className="text-white break-all">{entry.command}</span>
                     </div>
                  ) : null}
                  <div className="text-[#d3d7cf] ml-0">{entry.output}</div>
                </div>
              ))}
              
              <div className="flex items-center gap-2 mt-0">
                <span className="text-[#8ae234] font-bold shrink-0">aditya@portfolio<span className="text-white">:</span><span className="text-[#729fcf]">~</span><span className="text-white">$</span></span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0 p-0 shadow-none focus:outline-none"
                  autoFocus
                  spellCheck={false}
                  autoComplete="off"
                />
              </div>
              <div ref={bottomRef} className="h-4" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
