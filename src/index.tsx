import { NativeModules, Platform, findNodeHandle } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-ios-translation' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const RNTranslation = NativeModules.RNTranslation
  ? NativeModules.RNTranslation
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

interface IOptions {
  text: string;
  targetViewNode?: React.Component<any, any> | React.ComponentClass<any> | null;
}

export function present(options: IOptions): Promise<number> {
  const { text, targetViewNode } = options;
  const node = targetViewNode ? findNodeHandle(targetViewNode) : undefined;

  return RNTranslation.present({
    text,
    node,
  });
}
