# React Native Accessible Selectable

> Helpers to build accessible selectable components like checkboxes or radio buttons in React Native

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

1.	Open up `android/app/src/main/java/[...]/MainActivity.java`

    - Add `import me.kuehle.RNAccessibleSelectablePackage;` to the imports at the top of the file
    - Add `new RNAccessibleSelectablePackage()` to the list returned by the `getPackages()` method

2. 	Append the following lines to `android/settings.gradle`:

    ```gradle
    include ':react-native-accessible-selectable'
    project(':react-native-accessible-selectable').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-accessible-selectable/android')
    ```

3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:

    ```gradle
    compile project(':react-native-accessible-selectable')
    ```

## Usage

```js
import RNAccessibleSelectable from 'react-native-accessible-selectable';

// TODO: What to do with the module?
RNAccessibleSelectable;
```
