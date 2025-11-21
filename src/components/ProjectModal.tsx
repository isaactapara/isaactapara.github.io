import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, ChevronLeft, ChevronRight, Code, Target, Lightbulb } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!project) return null;

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    return (
        <AnimatePresence>
            {project && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
                    >
                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white dark:bg-dark-800 w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl relative my-8"
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                {/* Image Gallery Section */}
                                <div className="relative h-64 lg:h-auto bg-gray-900 flex items-center justify-center overflow-hidden group">
                                    {project.images.length > 0 ? (
                                        <>
                                            <motion.img
                                                key={currentImageIndex}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.3 }}
                                                src={project.images[currentImageIndex]}
                                                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                                                className="w-full h-full object-cover"
                                            />

                                            {/* Navigation Buttons */}
                                            {project.images.length > 1 && (
                                                <>
                                                    <button
                                                        onClick={prevImage}
                                                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                                    >
                                                        <ChevronLeft size={24} />
                                                    </button>
                                                    <button
                                                        onClick={nextImage}
                                                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                                    >
                                                        <ChevronRight size={24} />
                                                    </button>

                                                    {/* Dots */}
                                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                                                        {project.images.map((_, idx) => (
                                                            <div
                                                                key={idx}
                                                                className={`w-2 h-2 rounded-full transition-colors ${idx === currentImageIndex ? 'bg-white' : 'bg-white/50'
                                                                    }`}
                                                            />
                                                        ))}
                                                    </div>
                                                </>
                                            )}
                                        </>
                                    ) : (
                                        <div className="text-gray-500 flex flex-col items-center">
                                            <Code size={48} className="mb-2" />
                                            <span>No images available</span>
                                        </div>
                                    )}
                                </div>

                                {/* Content Section */}
                                <div className="p-8 max-h-[80vh] overflow-y-auto custom-scrollbar">
                                    <div className="mb-6">
                                        <h2 className="text-3xl font-bold text-dark-900 dark:text-white mb-2 font-mono">
                                            {project.title}
                                        </h2>
                                        <p className="text-primary-600 dark:text-primary-400 font-medium mb-4">
                                            {project.category.toUpperCase()}
                                        </p>
                                        <p className="text-dark-600 dark:text-dark-300 leading-relaxed">
                                            {project.longDescription}
                                        </p>
                                    </div>

                                    {/* Links */}
                                    <div className="flex space-x-4 mb-8">
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-2 px-4 py-2 bg-dark-900 dark:bg-white text-white dark:text-dark-900 rounded-lg hover:opacity-90 transition-opacity font-medium"
                                        >
                                            <Github size={20} />
                                            <span>View Code</span>
                                        </a>
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center space-x-2 px-4 py-2 border border-dark-200 dark:border-dark-700 text-dark-900 dark:text-white rounded-lg hover:bg-dark-50 dark:hover:bg-dark-700 transition-colors font-medium"
                                            >
                                                <ExternalLink size={20} />
                                                <span>Live Demo</span>
                                            </a>
                                        )}
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="mb-8">
                                        <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-3 flex items-center">
                                            <Code size={20} className="mr-2 text-primary-500" />
                                            Technologies
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Challenges & Solutions */}
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-3 flex items-center">
                                                <Target size={20} className="mr-2 text-red-500" />
                                                Key Challenges
                                            </h3>
                                            <ul className="space-y-2">
                                                {project.challenges.map((challenge, idx) => (
                                                    <li key={idx} className="flex items-start text-dark-600 dark:text-dark-300 text-sm">
                                                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0" />
                                                        {challenge}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-3 flex items-center">
                                                <Lightbulb size={20} className="mr-2 text-yellow-500" />
                                                Solutions Implemented
                                            </h3>
                                            <ul className="space-y-2">
                                                {project.solutions.map((solution, idx) => (
                                                    <li key={idx} className="flex items-start text-dark-600 dark:text-dark-300 text-sm">
                                                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-yellow-500 rounded-full flex-shrink-0" />
                                                        {solution}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
