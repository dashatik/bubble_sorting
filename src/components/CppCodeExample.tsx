import React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import cpp from 'react-syntax-highlighter/dist/esm/languages/hljs/cpp';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CppCodeExample: React.FC = () => {
    const codeString = `
        #include <iostream>
        using namespace std;

        int main() {
            cout << "Hello from C++!" << endl;
            return 0;
        }
    `;

    return (
        <div className="p-5 bg-gray-800 text-white rounded-lg">
            <h3 className="text-lg font-bold mb-2">C++ Code Example</h3>
            <SyntaxHighlighter language="cpp" style={docco} customStyle={{ background: '#f1f1f1' }}>
                {codeString}
            </SyntaxHighlighter>
        </div>
    );
};

export default CppCodeExample;

