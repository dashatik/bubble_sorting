import React from 'react';
import { motion } from 'framer-motion';
import CppCodeExample from './CppCodeExample';

const skills = [
    { name: 'React', icon: '/icons/react.svg', description: 'Build dynamic UIs' },
    { name: 'Node.js', icon: '/icons/nodejs.svg', description: 'Backend development' },
    { name: 'TypeScript', icon: '/icons/typescript.svg', description: 'Typed JavaScript' },
    { name: 'C++', icon: '/icons/cpp.svg', description: 'Performance-critical programming' },
    { name: 'Java', icon: '/icons/java.svg', description: 'Object-oriented programming' },
];

const SkillsSection: React.FC = () => {
    return (
        <div className="py-16 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-8">Skills & Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center text-center"
                    >
                        <img
                            src={skill.icon}
                            alt={skill.name}
                            className="h-16 w-16 mb-4"
                        />
                        <h3 className="text-xl font-semibold">{skill.name}</h3>
                        <p className="mt-2 text-gray-600">{skill.description}</p>
                    </motion.div>
                ))}
            </div>
            {/* C++ Demo Section */}
            <div className="mt-16">
                <h3 className="text-2xl font-bold text-center mb-6">
                    Interactive C++ Demo
                </h3>
                <CppCodeExample />
            </div>
        </div>
    );
};

export default SkillsSection;

