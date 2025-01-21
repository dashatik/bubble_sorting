import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
    return (
        <div className="h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white flex flex-col justify-center items-center space-y-6">
            {/* Name and Tagline */}
            <motion.h1
                className="text-5xl font-bold"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Dasha Tikho
            </motion.h1>
            <motion.p
                className="text-2xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                Developer | Creator | Problem-Solver
            </motion.p>

            {/* Animated Emoji */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="text-6xl"
            >
                🤖
            </motion.div>

            {/* Call-to-Actions */}
            <motion.div
                className="space-x-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
            >
                <button className="px-6 py-3 bg-white text-blue-500 rounded-lg shadow-lg hover:bg-gray-100 transition">
                    Contact Me
                </button>
                <button className="px-6 py-3 bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition">
                    Download Resume
                </button>
            </motion.div>
        </div>
    );
};

export default Header;
