import { StyleSheet } from 'react-native';

const colors = {
    black: '#000000',
    white: '#FFFFFF',
    red: '#FF0000',
};

export const styles = StyleSheet.create({
    defaultInput: {
        borderWidth: 2,
        borderColor: colors.black,
        paddingVertical: 0,
        fontSize: 15,
    },
    defaultError: {
        borderColor: colors.red,
        alignItems: 'center',
        marginBottom: 2,
        paddingHorizontal: 5,
    },
    defaultErrorText: {
        color: colors.red,
        fontSize: 12,
    },
});
