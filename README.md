# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

## Local build

```bash
$ npx expo prebuild

# Visit https://docs.expo.dev/develop/development-builds/create-a-build/
# or https://docs.expo.dev/build-reference/apk/
$ npx expo install expo-dev-client

# Add error handling - import "expo-dev-client"; in ./app/_layout.tsx
# Create eas.json file in root directory (where applicable)

$ eas build --profile development --platform android

> Would you like to automatially create an EAS project for @2gbeh/plateaumed-phc? ... yes
> Generate a new Android Keystore?  ... yes

# 🤖 Open this link on your Android devices (or scan the QR code) to install the app:
# https://expo.dev/accounts/2gbeh/projects/plateaumed-phc/builds/4485e7f8-90e1-4b31-b060-e94784dd7d9a

> Install and run the Android build on an emulator? ... no
```

```json
// ./eas.json
{
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal"
    },
    "production": {}
  }
}
```

## Working with SVGs

```bash
$ npx expo install react-native-svg
$ npx expo install react-native-svg-transformer
```

```js
// Create/update ./metro.config.js
const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const { transformer, resolver } = config;

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer/expo")
  };
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...resolver.sourceExts, "svg"]
  };

  return config;
})();
```

```ts
// Create/update ./declarations.d.ts
declare module "*.svg" {
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}

// Export all svgs from a single file ./constants/ICON.ts
export { default as BellIcon } from "../assets/icons/bell.svg";
```
