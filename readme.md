# Luke Misinfo App (test)

## Troubleshoot build errors and crashes
- [_Troubleshooting link_](https://docs.expo.dev/build-reference/troubleshooting/)

### Key notes:

1. Run `npx expo-doctor` to determine that the versions of Expo SDK dependencies in your project are compatible with your Expo SDK version.

3. You can build the production bundle locally by running `npx expo export` to bypass all of the other build steps so you can see this error much more quickly.
	- [expo link](https://docs.expo.dev/build-reference/troubleshooting/#verify-that-your-javascript-bundles-locally)
	
4. Verify that your project builds and runs locally
	- You can verify that your project builds on your local machine with the `npx expo run:android` and `npx expo run:ios` commands, with variant/configuration flags set to release to most faithfully reproduce what executes on EAS Build. For more information, see [Android build process](https://docs.expo.dev/build-reference/android-builds/) and [iOS build process](https://docs.expo.dev/build-reference/ios-builds/).
	
```
# Locally compile and run the Android app in release mode
npx expo run:android --variant release

# Locally compile and run the iOS app in release mode
npx expo run:ios --configuration Release
	
```

5. You can alternatively run a local build with `eas build --local` — this command will run a series of steps that is as close as it can be to what runs remotely on the hosted EAS Build service. It will copy your project to a temporary directory and make any necessary changes there. [Learn how to set this up and use it for debugging](https://docs.expo.dev/build-reference/local-builds/#using-local-builds-for-debugging).

