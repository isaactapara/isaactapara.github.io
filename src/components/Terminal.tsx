import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Terminal as TerminalIcon } from 'lucide-react';
import { projects } from '../data/projects';
import { skills } from '../data/skills';
import { profile } from '../data/resume';

interface TerminalProps {
    isOpen: boolean;
    onClose: () => void;
}

interface CommandHistory {
    command: string;
    output: React.ReactNode;
}

const Terminal: React.FC<TerminalProps> = ({ isOpen, onClose }) => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState<CommandHistory[]>([
        { command: 'init', output: 'Welcome to the interactive terminal. Type "help" to see available commands.' }
    ]);
    const inputRef = useRef<HTMLInputElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
        if (isOpen) {
            scrollToBottom();
        }
    }, [isOpen, history]);

    const scrollToBottom = () => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleCommand = (cmd: string) => {
        const trimmedCmd = cmd.trim().toLowerCase();
        let output: React.ReactNode = '';

        switch (trimmedCmd) {
            case 'help':
                output = (
                    <div className="space-y-1">
                        <p>Available commands:</p>
                        <div className="grid grid-cols-2 gap-2 max-w-md ml-4">
                            <span><span className="text-primary-400">about</span> - Who am I?</span>
                            <span><span className="text-primary-400">projects</span> - View my work</span>
                            <span><span className="text-primary-400">skills</span> - Technical arsenal</span>
                            <span><span className="text-primary-400">contact</span> - Get in touch</span>
                            <span><span className="text-primary-400">clear</span> - Clear terminal</span>
                            <span><span className="text-primary-400">exit</span> - Close terminal</span>
                        </div>
                    </div>
                );
                break;
            case 'about':
                output = (
                    <div className="max-w-2xl">
                        <p className="mb-2">User: <span className="text-accent-400">{profile.name}</span></p>
                        <p className="mb-2">Role: {profile.title}</p>
                        <p>I am a passionate Secure Software Engineer & Ethical Hacker dedicated to building robust, secure applications. I blend creative development with a security-first mindset.</p>
                    </div>
                );
                break;
            case 'projects':
                output = (
                    <div className="space-y-2">
                        <p>Featured Projects:</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            {projects.filter(p => p.featured).map(p => (
                                <li key={p.id}>
                                    <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                                        {p.title}
                                    </a>
                                    <span className="text-gray-400"> - {p.description.substring(0, 60)}...</span>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-2 text-gray-500 text-sm">Type 'open [project_name]' to view details (coming soon)</p>
                    </div>
                );
                break;
            case 'skills':
                output = (
                    <div>
                        <p>Top Skills:</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {skills.slice(0, 10).map(s => (
                                <span key={s.name} className="px-2 py-1 bg-gray-800 rounded text-sm text-primary-300">
                                    {s.name}
                                </span>
                            ))}
                        </div>
                    </div>
                );
                break;
            case 'contact':
                output = (
                    <div className="space-y-1">
                        <p>Email: <a href={`mailto:${profile.email}`} className="text-blue-400 hover:underline">{profile.email}</a></p>
                        <p>Phone: {profile.phone}</p>
                        <p>GitHub: <a href="https://github.com/isaactapara" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">github.com/isaactapara</a></p>
                    </div>
                );
                break;
            case 'clear':
                setHistory([]);
                return;
            case 'exit':
                onClose();
                return;
            case '':
                return;
            default:
                output = <span className="text-red-400">Command not found: {trimmedCmd}. Type 'help' for available commands.</span>;
        }

        setHistory(prev => [...prev, { command: cmd, output }]);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim()) {
            handleCommand(input);
            setInput('');
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                    />

                    {/* Terminal Window */}
                    <motion.div
                        initial={{ y: '-100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '-100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 left-0 right-0 h-[60vh] bg-gray-900 text-green-400 font-mono shadow-2xl z-50 border-b-2 border-primary-500 overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
                            <div className="flex items-center space-x-2">
                                <TerminalIcon size={16} className="text-primary-500" />
                                <span className="text-sm font-semibold text-gray-300">isaac@portfolio:~</span>
                            </div>
                            <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Content */}
                        <div
                            className="flex-1 p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent"
                            onClick={() => inputRef.current?.focus()}
                        >
                            <div className="space-y-2">
                                {history.map((item, index) => (
                                    <div key={index} className="space-y-1">
                                        <div className="flex items-center space-x-2 text-gray-400">
                                            <span className="text-primary-500">➜</span>
                                            <span className="text-blue-400">~</span>
                                            <span>{item.command}</span>
                                        </div>
                                        <div className="ml-6 text-gray-300 leading-relaxed">
                                            {item.output}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Input Line */}
                            <form onSubmit={handleSubmit} className="flex items-center space-x-2 mt-2 ml-0.5">
                                <span className="text-primary-500">➜</span>
                                <span className="text-blue-400">~</span>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    className="flex-1 bg-transparent border-none outline-none text-green-400 placeholder-gray-600"
                                    autoFocus
                                    spellCheck={false}
                                    autoComplete="off"
                                />
                            </form>
                            <div ref={bottomRef} />
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default Terminal;
