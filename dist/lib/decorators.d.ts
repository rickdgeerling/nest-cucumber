export declare const Suite: (name?: string) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
export declare const Given: (pattern: string | RegExp) => MethodDecorator;
export declare const And: (pattern: string | RegExp) => MethodDecorator;
export declare const When: (pattern: string | RegExp) => MethodDecorator;
export declare const Then: (pattern: string | RegExp) => MethodDecorator;
export declare const BeforeAll: () => (target: any, method: any) => void;
export declare const Before: (tagExpression?: string) => (target: any, method: any) => void;
export declare const AfterAll: () => (target: any, method: any) => void;
export declare const After: (tagExpression?: string) => (target: any, method: any) => void;
export declare const BeforeStep: () => (target: any, method: any) => void;
export declare const AfterStep: () => (target: any, method: any) => void;
export declare const InjectWorld: () => (target: object, key: string | symbol, index?: number) => void;
