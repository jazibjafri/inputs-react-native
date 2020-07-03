import * as React from 'react';
import { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TextInputProps,
    NativeSyntheticEvent,
    TextInputEndEditingEventData,
} from 'react-native';
import { styles } from './styles';
import { validators, Validators } from './validators';

export interface ReactNativeInput extends TextInputProps {
    validators: Validators[];
    onChangeText: (val: string) => void;
}

const Input: React.FC<ReactNativeInput> = ({
    style,
    onChangeText,
    value,
    validators: validatorTypes,
    ...rest
}) => {
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const validateInput = (val: string) => {
        const validations = validatorTypes.map(type => {
            const currentValidator = validators[type];
            return currentValidator(val);
        });
        const result = validations.reduce((prev, cur) => {
            /* return failed validation if any one validation fails */
            return {
                result: prev.result && cur.result,
                reason: !prev.result ? prev.reason : cur.reason,
            };
        });
        return result;
    };
    const handleSuccess = (val: string) => {
        setHasError(false);
        setErrorMessage('');
        onChangeText(val);
    };
    const handleError = (error: string) => {
        setErrorMessage(error);
        setHasError(true);
    };
    const handleChange = (val: string) => {
        const validation = validateInput(val);
        handleSuccess(val);
        if (!validation.result) {
            handleError(validation.reason);
        }
        return;
    };
    const handleBlur = (evt: NativeSyntheticEvent<TextInputEndEditingEventData>) => {
        const validation = validateInput(evt.nativeEvent.text);
        if (validation.result) {
            handleSuccess(evt.nativeEvent.text);
        } else {
            handleError(validation.reason);
        }
    };

    return (
        <>
            <TextInput
                onChangeText={handleChange}
                onEndEditing={handleBlur}
                value={value}
                {...rest}
                style={[styles.defaultInput, style]}
            />
            {hasError && (
                <View style={styles.defaultError}>
                    <Text style={styles.defaultErrorText}>{errorMessage}</Text>
                </View>
            )}
        </>
    );
};

export default Input;
