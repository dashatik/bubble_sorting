Features:
Interactive UI with animations using React and Tailwind CSS.
C++ sorting simulation compiled to WebAssembly.
Dynamically loads WebAssembly for optimal performance.
Project Structure:
bash
Copy
Edit
root/
├── public/wasm/       # WebAssembly files (sorting.js, sorting.wasm, sorting.cpp)
├── src/components/    # React components
├── tailwind.config.js # Tailwind CSS configuration
└── package.json       # Dependencies and scripts
Setup Instructions:
Clone the repository and install dependencies:

bash
Copy
Edit
git clone <repository_url>
cd <repository>
npm install
Compile WebAssembly:

bash
Copy
Edit
emcc public/wasm/sorting.cpp -o public/wasm/sorting.js \
    -s MODULARIZE=1 -s ALLOW_MEMORY_GROWTH=1 \
    -s EXPORTED_RUNTIME_METHODS="['ccall', 'cwrap']" --bind
Start the development server:

bash
Copy
Edit
npm start
Access the app at http://localhost:3000.

How It Works:
C++: Implements a Bubble Sort algorithm.
WebAssembly: Dynamically loaded to execute sorting.
React: Integrates the WebAssembly function into the app.
Future Enhancements:
Add more C++ simulations.
Implement dark mode.
Optimize for larger datasets.
Add PDF export for the resume.
