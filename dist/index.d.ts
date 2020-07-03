import * as React from 'react';
import { TextInputProps } from 'react-native';
import { Validators } from './validators';
export interface ReactNativeInput extends TextInputProps {
    validators: Validators[];
    onChangeText: (val: string) => void;
}
declare const Input: React.FC<ReactNativeInput>;
export default Input;
