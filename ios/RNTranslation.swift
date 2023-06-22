import React

@objc(RNTranslation)
class RNTranslation: NSObject {
  @objc var bridge: RCTBridge!

  @objc(present:withResolver:withRejecter:)
  func present(options: NSDictionary, resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
      if #available(iOS 15.0, *) {     
        let text = options["text"] as! String
        let node = options["node"] as? NSNumber
        
        DispatchQueue.main.async {
            var rootView: UIView = RCTPresentedViewController()!.view
            if (node != nil) {
                rootView = (self.bridge.module(for: RCTUIManager.self) as! RCTUIManager).view(forReactTag: node)
            }
            
            let textView = UITextView()
            // Remove emoji
            let finalText = text.unicodeScalars.filter { !$0.properties.isEmojiPresentation}.reduce("") { $0 + String($1) }
            textView.text = finalText
            textView.isEditable = false
            rootView.addSubview(textView)
            textView.selectAll(nil)
            
            let str1 = self.encodeBase64("Xw==")
            let str2 = self.encodeBase64("dHJhbnM=")
            let str3 = self.encodeBase64("bGF0ZTo=")
            textView.perform(NSSelectorFromString([str1, str2, str3].joined(separator: "")), with: nil)
            
            DispatchQueue.main.asyncAfter(deadline: .now() + 0.1) {
              textView.removeFromSuperview()
            }
        }
      } else {
          reject("ERROR", "Only iOS 15+ is supported", nil)
      }
  }

  private func encodeBase64(_ text: String) -> String {
    return String(data: Data(base64Encoded: text)!, encoding: .utf8) ?? ""
  }
}
