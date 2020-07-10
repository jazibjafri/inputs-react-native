Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactNative = require('react-native');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var colors = {
    black: '#000000',
    white: '#FFFFFF',
    red: '#FF0000',
};
var styles = reactNative.StyleSheet.create({
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

var INVALID_EMAIL_FORMAT = 'Invalid email format';
var VALIDATION_PASSED = 'Validation passed';
var FIELD_IS_REQUIRED = 'Field is required';
var INVALID_PHONE = 'Invalid phone';
var INVALID_PASSWORD = "Password must be atleast 8 characters long and contain:\n- 1 UPPERCASE letter\n- 1 lowercase letter \n- 1 number ";

/* eslint-disable no-useless-escape */
var basicValidator = function (value) {
    var result = value.length > 0;
    return {
        result: result,
        reason: result ? "Basic " + VALIDATION_PASSED : FIELD_IS_REQUIRED,
    };
};
var emailValidator = function (value) {
    var result = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
    return {
        result: result,
        reason: result ? "Email " + VALIDATION_PASSED : INVALID_EMAIL_FORMAT,
    };
};
var phoneValidator = function (value) {
    var result = /^[+]{0,1}[0-9]{8,}$/g.test(value);
    return {
        result: result,
        reason: result ? "Phone " + VALIDATION_PASSED : INVALID_PHONE,
    };
};
var passwordValidator = function (value) {
    var result = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/gm.test(value);
    return {
        result: result,
        reason: result ? "Password " + VALIDATION_PASSED : INVALID_PASSWORD,
    };
};
var validators = {
    email: emailValidator,
    basic: basicValidator,
    phone: phoneValidator,
    password: passwordValidator,
};

var Input = function (_a) {
    var style = _a.style, onChangeText = _a.onChangeText, value = _a.value, _b = _a.validators, validatorTypes = _b === void 0 ? [] : _b, errorViewStyles = _a.errorViewStyles, errorTextStyles = _a.errorTextStyles, errorMsg = _a.errorMessage, _c = _a.validateOn, validateOn = _c === void 0 ? 'end-editing' : _c, rest = __rest(_a, ["style", "onChangeText", "value", "validators", "errorViewStyles", "errorTextStyles", "errorMessage", "validateOn"]);
    var _d = React.useState(false), hasError = _d[0], setHasError = _d[1];
    var _e = React.useState(''), errorMessage = _e[0], setErrorMessage = _e[1];
    var validateInput = function (val) {
        if (validatorTypes.length > 0) {
            var validations = validatorTypes.map(function (type) {
                var currentValidator = validators[type];
                return currentValidator(val);
            });
            var result = validations.reduce(function (prev, cur) {
                /* return failed validation if any one validation fails */
                return {
                    result: prev.result && cur.result,
                    reason: !prev.result ? prev.reason : cur.reason,
                };
            });
            return result;
        }
        return {
            result: true,
            reason: 'All validations passed',
        };
    };
    var handleSuccess = function () {
        setHasError(false);
        setErrorMessage('');
    };
    var handleError = function (error) {
        setErrorMessage(error);
        setHasError(true);
    };
    var handleChange = function (val) {
        var validation = validateInput(val);
        if (validateOn == 'start-editing') {
            if (!validation.result) {
                handleError(validation.reason);
            }
            else {
                handleSuccess();
            }
        }
        if (onChangeText != undefined) {
            onChangeText(val, !validation.result);
        }
        return;
    };
    var handleBlur = function (evt) {
        if (validateOn == 'end-editing') {
            var validation = validateInput(evt.nativeEvent.text);
            if (validation.result) {
                handleSuccess();
            }
            else {
                handleError(validation.reason);
            }
        }
        return;
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(reactNative.TextInput, __assign({ onChangeText: handleChange, onEndEditing: handleBlur, value: value }, rest, { style: [styles.defaultInput, style] })),
        hasError && (React.createElement(reactNative.View, { style: [styles.defaultError, errorViewStyles] },
            React.createElement(reactNative.Text, { style: [styles.defaultErrorText, errorTextStyles] }, errorMsg || errorMessage)))));
};

exports.default = Input;
//# sourceMappingURL=index.js.map
