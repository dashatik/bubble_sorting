declare module 'react-syntax-highlighter' {
    import * as React from 'react';

    export class Light extends React.Component<any> {}
    export class Prism extends React.Component<any> {}
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/cpp' {
    const cpp: any;
    export default cpp;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs' {
    const styles: any;
    export const docco: any;
    export default styles;
}
