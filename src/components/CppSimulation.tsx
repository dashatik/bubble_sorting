import React, { useState, useEffect } from 'react';

const CppSimulation: React.FC = () => {
    const [array, setArray] = useState<number[]>([5, 3, 8, 6, 2]);
    const [sortedArray, setSortedArray] = useState<number[] | null>(null);
    const [loading, setLoading] = useState(false);
    const [wasmModule, setWasmModule] = useState<any>(null);

    useEffect(() => {
        const loadWasm = async () => {
            try {
                console.log('Loading WebAssembly module...');
                const Module = await fetch('/wasm/sorting.js')
                    .then((response) => response.text())
                    .then((jsCode) => {
                        const script = document.createElement('script');
                        script.textContent = jsCode;
                        document.body.appendChild(script);
                        return (window as any).Module({
                            locateFile: (path: string) => `/wasm/${path}`,
                        });
                    });

                console.log('WebAssembly module loaded:', Module);
                setWasmModule(Module);
            } catch (error) {
                console.error('Failed to load WebAssembly module:', error);
            }
        };

        loadWasm();
    }, []);

    const startSorting = () => {
        if (!wasmModule) {
            console.error('WebAssembly module is not loaded yet');
            return;
        }
        setLoading(true);

        try {
            console.log('Calling bubbleSort with array:', array);
            // Call the WebAssembly function
            const sorted = wasmModule.ccall('bubbleSort', 'array', ['array'], [array]);

            console.log('Sorted array from WebAssembly:', sorted);
            setSortedArray(sorted);
        } catch (err) {
            console.error('Error during sorting:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold mb-4">C++ Sorting Simulation</h3>
            <p className="mb-4">Original Array: {array.join(', ')}</p>
            {sortedArray ? (
                <p className="text-green-600 font-bold mb-4">
                    Sorted Array: {sortedArray.join(', ')}
                </p>
            ) : null}
            <button
                onClick={startSorting}
                disabled={loading || !wasmModule}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
            >
                {loading ? 'Sorting...' : 'Start Sorting'}
            </button>
        </div>
    );
};

export default CppSimulation;
