import { NativeModules, Platform } from 'react-native';

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
  node?: number | null;
}

export function present(options: IOptions): Promise<number> {
  return RNTranslation.present(options);
}
