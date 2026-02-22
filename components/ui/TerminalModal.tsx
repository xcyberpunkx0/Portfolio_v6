"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TerminalModal({ isOpen, onClose }: TerminalModalProps) {
  const [history, setHistory] = useState<{ command: string, output: React.ReactNode }[]>([
    { command: "", output: "Welcome to Aditya OS v1.0.0. Type 'help' to see available commands." }
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    let output: React.ReactNode = "";

    switch (trimmed) {
      case "help":
        output = (
          <div className="flex flex-col gap-1">
            <span>Available commands:</span>
            <span className="text-zinc-400">help    - Show this help message</span>
            <span className="text-zinc-400">about   - Read short bio</span>
            <span className="text-zinc-400">contact - Get contact info</span>
            <span className="text-zinc-400">clear   - Clear terminal history</span>
            <span className="text-zinc-400">exit    - Close terminal</span>
          </div>
        );
        break;
      case "about":
        output = "Software Engineer building scalable web & mobile apps.";
        break;
      case "contact":
        output = <a href="mailto:adityagup1a@gmail.com" className="text-blue-400 hover:underline">adityagup1a@gmail.com</a>;
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
        output = <span className="text-red-400">Command not found: {trimmed}</span>;
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
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
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl bg-[#0C0C0C] border border-zinc-800 rounded-xl shadow-2xl overflow-hidden flex flex-col h-[400px]"
          >
            {/* Window Header */}
            <div className="bg-zinc-900/50 border-b border-zinc-800 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-2">
                <button onClick={onClose} className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 text-center text-xs text-zinc-500 font-mono">
                guest@aditya: ~
              </div>
            </div>

            {/* Terminal Body */}
            <div className="flex-1 p-4 font-mono text-sm overflow-y-auto" onClick={() => inputRef.current?.focus()}>
              {history.map((entry, i) => (
                <div key={i} className="mb-2">
                  {entry.command && (
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-green-400">guest@aditya:~$</span>
                      <span className="text-white">{entry.command}</span>
                    </div>
                  )}
                  <div className="text-zinc-300 ml-0">{entry.output}</div>
                </div>
              ))}
              
              <div className="flex items-center gap-2 mt-2">
                <span className="text-green-400">guest@aditya:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0 p-0"
                  autoFocus
                  spellCheck={false}
                  autoComplete="off"
                />
              </div>
              <div ref={bottomRef} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
