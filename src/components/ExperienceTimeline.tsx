import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        year: '2023',
        title: 'Senior Developer at Tech Corp',
        description: 'Led a team of 10 developers to build a scalable e-commerce platform.',
        icon: '/icons/techcorp.svg',
    },
    {
        year: '2021',
        title: 'Software Engineer at CodeBase',
        description: 'Developed critical backend APIs and optimized database performance by 30%.',
        icon: '/icons/codebase.svg',
    },
    {
        year: '2019',
        title: 'Junior Developer at DevStart',
        description: 'Worked on front-end projects using React and TypeScript.',
        icon: '/icons/devstart.svg',
    },
];

const ExperienceTimeline: React.FC = () => {
    return (
        <div className="py-16 bg-white">
            <h2 className="text-3xl font-bold text-center mb-10">Experience</h2>
            <div className="relative max-w-4xl mx-auto">
                {/* Timeline Line */}
                <div className="absolute w-1 bg-blue-500 left-1/2 transform -translate-x-1/2 h-full"></div>

                {/* Timeline Items */}
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        className={`mb-10 flex items-center ${
                            index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
                        }`}
                        initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Timeline Content */}
                        <div
                            className={`bg-gray-100 p-6 rounded-lg shadow-lg max-w-sm ${
                                index % 2 === 0
                                    ? 'ml-10 text-right'
                                    : 'mr-10 text-left'
                            }`}
                        >
                            <h3 className="text-xl font-bold">{exp.title}</h3>
                            <p className="text-gray-600 mt-2">{exp.description}</p>
                            <span className="text-sm text-gray-500">{exp.year}</span>
                        </div>

                        {/* Icon */}
                        <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center text-white shadow-lg">
                            <img src={exp.icon} alt={exp.title} className="w-10 h-10" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ExperienceTimeline;
