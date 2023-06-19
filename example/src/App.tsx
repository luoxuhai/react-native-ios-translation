import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  findNodeHandle,
  PlatformColor,
} from 'react-native';
import { present } from 'react-native-ios-translation';

const text = 'Everything you can imagine is real.';

export default function App() {
  const ref = React.useRef<Text>(null);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>English: </Text>
      <Text style={styles.text} ref={ref}>
        {text}
      </Text>
      <Button
        title="Translate"
        onPress={() => {
          present({
            text,
            node: findNodeHandle(ref.current),
          });
        }}
      />
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
  text: {
    color: PlatformColor('label'),
  },
});
