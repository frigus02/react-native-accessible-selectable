# React Native Accessible Selectable

[![npm](https://img.shields.io/npm/v/react-native-accessible-selectable.svg)](https://www.npmjs.com/package/react-native-accessible-selectable)

> Helpers to build accessible selectable components like checkboxes or radio buttons in React Native

**The Problem:**

On double tap VoiceOver will read the content of the focused element. When you try to build a custom checkbox and make it accessible, you probably want to add `selected` to the `accessibilityTraits`, depending on whether the checkbox is currently checked or not. This works well on focus. VoiceOver will announce the state of your component. But on double tap it will first read the old state and then the new one. This can be quite confusing for users.

The underlying problem is, that the decision to change the state from "not selected" to "selected" (or vice versa) is done in JavaScript and runs asynchronously after the tap. So VoiceOver will start to read before the state has changed.

**The Solution:**

This library solves this problem by toggling the "selected" state natively. All you need to do to use it, is to wrap your component in a call to `makeSelectable`. The downside is, that you cannot cancel the toggle anymore. Your component will now have the same restriction as the native [Switch](https://facebook.github.io/react-native/docs/switch.html) component.

This problem is inherent for VoiceOver. TalkBack does not have this issue because it does not read the currently focused element's content on double tap. However it also does not give any feedback when toggling between `radiobutton_checked` and `radiobutton_unchecked` state. This library implements the suggestion from the [React Native accessibility docs](http://facebook.github.io/react-native/docs/accessibility.html#sending-accessibility-events-android) and sends a manual click event to accounce this state change.

## Getting started

`$ npm install react-native-accessible-selectable --save`

### Mostly automatic installation

`$ react-native link react-native-accessible-selectable`

### Manual installation

#### iOS

1.  In Xcode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2.  Go to `node_modules` ➜ `react-native-accessible-selectable` and add `RNAccessibleSelectable.xcodeproj`
3.  In Xcode, in the project navigator, select your project. Add `libRNAccessibleSelectable.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4.  Run your project (`Cmd+R`)

#### Android

The library doesn't use any native code for Android.

## Usage

```js
import { TouchableNativeFeedback, TouchableOpacity } from "react-native";
import { makeSelectable } from "react-native-accessible-selectable";

const SelectableTouchable = makeSelectable(
    Platform.select({
        android: TouchableNativeFeedback,
        ios: TouchableOpacity
    })
);

type Props = {
    label: string,
    checked: boolean,
    onChange: () => void
};

class MyCheckBox extends React.PureComponent<Props> {
    render() {
        const { label, checked, onChange } = this.props;

        return (
            <SelectableTouchable
                accessibilityComponentType={
                    checked ? "radiobutton_checked" : "radiobutton_unchecked"
                }
                accessibilityTraits={
                    checked ? ["button", "selected"] : ["button"]
                }
                onPress={onChange}
            >
                <Text>{label}</Text>
                <Image source={checked ? checkboxChecked : checkboxUnchecked} />
            </SelectableTouchable>
        );
    }
}
```
