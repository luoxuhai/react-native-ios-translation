# react-native-ios-translation

**A React Native library that calls iOS's built-in translation feature.**

<img src="./screenshot.jpeg" width="320px" />

## Installation

```sh
npm install react-native-ios-translation
```

## Usage

```js
import { present } from 'react-native-ios-translation';

try {
  await present({
    text: 'Everything you can imagine is real.'
  });
} catch (error) {
  console.error(error);
}
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
