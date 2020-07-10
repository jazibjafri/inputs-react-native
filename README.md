# Inputs React Native
Inputs for react native with easy built-in validations.

## Installation

```
npm install inputs-react-native
```

## Basic Usage
```js
import TextInput from 'inputs-react-native'

const Component = () => {
  <>
      <TextInput validators={['basic', 'email']} />
  </>
}

```

And that's it! Your text input is now complete with email validation.

<img src="img/example-1.png" width="250">

## All Accepted Props

In addition to all props accepted by `TextInput` from `react-native`, following props are accepted:

Property name | Type | Values | Default | Description
--- | --- | --- | --- | --- |
`onChangeText` | optional | `(val: string, error: boolean) => void` | `undefined` | returns input text and error status
`validators` | optional | `Array<'basic' \| 'email \| 'password' \| 'phone'>` | `[]` | validations to apply.
`validateOn` | optional | `start-editing`, `end-editing`, `never` | `end-editing` | when to run validation
`errorMessage` | optional | `any` | (separate defaults for each validation type) | custom error message to display when validation fails
`errorViewStyles` | optional | `ViewStyle` | (some basic styles) | styles for view component of error message
`errorTextStyles` | optional | `TextStyle` | (some basic styles) | styles for text component of error message

All other props are passed down to react-native's `TextInput`

## Example

```js
import React from 'react';
import { StyleSheet } from 'react-native';
import TextInput from 'inputs-react-native';

const Input = () => {
  <>
      <TextInput
          validators={['basic', 'email']}
          validateOn="start-editing"
          errorMessage="Invalid email format"
          errorViewStyles={styles.errorViewStyles}
          errorTextStyles={styles.errorTextStyles}
      />  
  </>
}

const styles = StyleSheet.create({
  errorTextStyles: {
    color: 'red',
  },
  errorViewStyles: {
    borderColor: 'red',
    borderWidth: 2,
  },
});
```
<img src="img/example-2.png" width="250">

## License

[MIT](https://github.com/JazibJafri/inputs-react-native/blob/master/LICENSE)
