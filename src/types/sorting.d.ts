declare module '*.js' {
    interface SortingModule {
        cwrap: (
            funcName: string,
            returnType: string,
            argTypes: string[]
        ) => (...args: any[]) => any;
    }

    const SortingModuleFactory: () => Promise<SortingModule>;
    export default SortingModuleFactory;
}
