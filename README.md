Hi Team U-Con!

Here's the sample project I showed in class. I started the project by following some of the [React Native tutorials](https://facebook.github.io/react-native/docs/getting-started).

# Running the Project
Assuming the dependencies are installed, the following steps should run the project on an Android Studio emulator:

1. git clone https://github.com/jj-moore/ucon-draft.git
2. cd ucon-draft
3. npm install
4. Start the Android Studio device emulator
5. npx react-native run-android

I find that if I don't have the emulator running before I run the project, I get errors.
npm install only has to be run the first time. The node_modules are .gitignore'd and running npm install reinstalls them.

# Project Updates
The main file is the App.js file. This is the file that starts the user interface. Technically, you could put the entire interface in this file, but typically you create components that are used in the App.js file. The components are the tags you use in the render() function.

There are some built-in components (i.e. View, Button). I created a components folder for custom components. All custom components extend the Component class and once you export the custom component, you can import it into App.js (or another component class) and use it.

Besides editing the App.js folder and adding the custom components, the only other change I made was adding the images folder for the U-Con logo.

# Security Alert
If you see a warning about a security alert in GitHub, it's due to a dependency of the React Native CLI. I spent some time this morning trying to update it, but the latest version of React Native relies on an older version of the CLI and I haven't figured out how to update the CLI without violating the dependencies of React Native.
