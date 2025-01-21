import React from 'react';
import Header from './components/Header';
import SkillsSection from './components/SkillsSection';
import ExperienceTimeline from './components/ExperienceTimeline';
import CppSimulation from './components/CppSimulation';

const App: React.FC = () => {
    return (
        <div>
            {/* Hero Section */}
            <Header />

            {/* Skills Section */}
            <SkillsSection />

            {/* Experience Timeline */}
            <ExperienceTimeline />

            {/* C++ Simulation */}
            <div className="py-16 bg-white">
                <h2 className="text-3xl font-bold text-center mb-10">Interactive Simulation</h2>
                <CppSimulation />
            </div>
        </div>
    );
};

export default App;
