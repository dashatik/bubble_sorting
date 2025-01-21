This project is a dynamic and interactive single-page resume built using React, Tailwind CSS, and WebAssembly. It incorporates animations, C++-based simulations, and cutting-edge web technologies to create an engaging and memorable user experience.

Key Features

Interactive UI:

Built with React and Tailwind CSS for a responsive, modern design.

Animated transitions and effects to enhance visual appeal.

C++ Simulation:

A sorting algorithm implemented in C++ and compiled to WebAssembly.

Users can trigger the simulation and view results directly on the page.

WebAssembly Integration:

Dynamically loads WebAssembly modules for optimal performance.

Uses Emscripten to compile C++ code into WebAssembly and JavaScript glue code.

Custom Styling:

Tailwind CSS used for rapid and consistent styling.

Custom fonts and themes applied for a professional look.

Project Structure

root/
├── public/
│   ├── wasm/
│   │   ├── sorting.js       # WebAssembly JavaScript glue code
│   │   ├── sorting.wasm     # WebAssembly binary file
│   │   └── sorting.cpp      # C++ source code
├── src/
│   ├── components/
│   │   └── CppSimulation.tsx  # React component for C++ simulation
│   ├── App.tsx              # Main application component
│   └── index.tsx            # React entry point
├── README.md                # Project overview and documentation
├── tailwind.config.js       # Tailwind CSS configuration
└── package.json             # Project dependencies and scripts

Setup Instructions

Prerequisites

Ensure you have the following installed:

Node.js and npm

Emscripten SDK

Steps

Clone the repository:

git clone <repository_url>
cd <repository_name>

Install dependencies:

npm install

Compile the WebAssembly module:

emcc public/wasm/sorting.cpp -o public/wasm/sorting.js \
    -s MODULARIZE=1 -s ALLOW_MEMORY_GROWTH=1 \
    -s EXPORTED_RUNTIME_METHODS="['ccall', 'cwrap']" --bind

Start the development server:

npm start

Open the application in your browser at http://localhost:3000.

How It Works

C++ Sorting Simulation

C++ Implementation: The bubbleSort function sorts an array using the Bubble Sort algorithm.

Compilation: The C++ code is compiled into WebAssembly using Emscripten.

Integration: The React component dynamically loads the WebAssembly module and invokes the sorting function.

React Integration

The CppSimulation component handles user interaction and dynamically invokes the WebAssembly function.

Tailwind CSS is used for styling the component, providing a clean and modern look.

WebAssembly Loading

The WebAssembly module is loaded dynamically using the fetch API.

The glue code (sorting.js) initializes the WebAssembly module and exposes functions for React to call.

Technologies Used

React: Frontend framework for building dynamic user interfaces.

Tailwind CSS: Utility-first CSS framework for fast and responsive styling.

WebAssembly: High-performance binary format for running C++ code in the browser.

Emscripten: Compiler toolchain for converting C++ code to WebAssembly.

Future Enhancements

Add more C++ simulations, such as pathfinding algorithms or mathematical visualizations.

Implement a dark mode toggle for better accessibility.

Optimize WebAssembly performance for larger datasets.

Add a PDF export feature for the resume.

Acknowledgments

This project is inspired by the goal of creating a unique and interactive resume experience that highlights technical skills in modern web development and C++ programming.