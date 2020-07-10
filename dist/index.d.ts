import * as React from 'react';
import { TextInputProps, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { Validators } from './validators';
export interface ReactNativeInput extends TextInputProps {
    onChangeText: (val?: string, err?: boolean) => void;
    validators?: Validators[];
    errorViewStyles?: StyleProp<ViewStyle>;
    errorTextStyles?: StyleProp<TextStyle>;
    errorMessage?: string;
    validateOn?: 'start-editing' | 'end-editing' | 'never';
}
declare const Input: React.FC<ReactNativeInput>;
export default Input;
