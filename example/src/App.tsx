import * as React from 'react';
import { StyleSheet, View, Text, Button, findNodeHandle } from 'react-native';
import { present } from 'react-native-ios-translation';

const text = 'Everything you can imagine is real.';

export default function App() {
  const ref = React.useRef<Text>(null);

  React.useEffect(() => {
    present({
      text,
      node: findNodeHandle(ref.current),
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>English: </Text>
      <Text ref={ref}>{text}</Text>
      <Button title="Translate" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
