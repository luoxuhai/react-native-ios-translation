#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(RNTranslation, NSObject)

RCT_EXTERN_METHOD(present:(NSDictionary *) options
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)

+ (BOOL)requiresMainQueueSetup
{
  return NO;
}

@end
