# react-native-ios-translation

**A React Native library that calls iOS's built-in translation feature.**

<div align="center">
  <img src="./screenshot-iphone.jpeg" width="280px" />
  <img src="./screenshot-ipad.png" width="280px" />
</div>

## Installation

```sh
npm install react-native-ios-translation
```

## Usage

### Basic

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

### Advanced

```jsx
import { present } from 'react-native-ios-translation';

function App() {
  const ref = React.useRef<Text>(null);
  const text = 'Everything you can imagine is real.';

  const handlePresentTranslation = () => {
    present({
      text,
      targetViewNode: ref.current,
    });
  };

  return (
    <Text ref={ref} onPress={handlePresentTranslation}>
      {text}
    </Text>
  );
}
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

[MIT](./LICENSE)
