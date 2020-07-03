declare type ValidatorResult = {
    result: boolean;
    reason: string;
};
export declare const validators: {
    email: (value: string) => ValidatorResult;
    basic: (value: string) => ValidatorResult;
    phone: (value: string) => ValidatorResult;
    password: (value: string) => ValidatorResult;
};
export declare type Validators = keyof typeof validators;
export {};
