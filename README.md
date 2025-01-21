**Features**

🌟 Interactive UI with animations using React and Tailwind CSS.
🚀 C++ Sorting Simulation compiled to WebAssembly.
📦 Dynamically loads WebAssembly for high performance and seamless integration.
Project Structure
bash
Copy
Edit
root/
├── public/wasm/       # WebAssembly files (sorting.js, sorting.wasm, sorting.cpp)
├── src/components/    # React components
├── tailwind.config.js # Tailwind CSS configuration
└── package.json       # Dependencies and scripts
Setup Instructions
1. **Clone the Repository**
bash
Copy
Edit
git clone <repository_url>
cd <repository>
2. **Install Dependencies**
bash
Copy
Edit
npm install
3. **Compile WebAssembly**
bash
Copy
Edit
emcc public/wasm/sorting.cpp -o public/wasm/sorting.js \
    -s MODULARIZE=1 -s ALLOW_MEMORY_GROWTH=1 \
    -s EXPORTED_RUNTIME_METHODS="['ccall', 'cwrap']" --bind
4. **Start the Development Server**
bash
Copy
Edit
npm start
5. **Access the App**
Open http://localhost:3000 in your browser.

**How It Works**
C++ Sorting Simulation:
Implements a Bubble Sort algorithm in C++.
Compiled to WebAssembly using Emscripten.
Dynamically loaded in the browser for real-time interaction.
React Integration:
Uses React for the frontend and integrates WebAssembly through ccall.
Tailwind CSS:
Provides consistent and responsive styling.

**Future Enhancements**
➕ Add more C++ simulations (e.g., pathfinding, mathematical visualizations).
🌙 Implement a dark mode toggle for accessibility.
📈 Optimize WebAssembly performance for larger datasets.
📝 Add a PDF export feature for the resume.
