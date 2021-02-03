USING the apps


Mobile App


To run any React Native application on your computer you need to have Node.js, Java SE development kit (JDK), and an iOS or android emulator. 
To run the app, you must have the iOS simulator with XCode or the Android emulator with Android Studio.


As always you can refer to here https://reactnative.dev/docs/environment-setup for more detailed instructions. Please refer to the React Native CLI Quickstart tab.


Download/clone source code from Github: StopTheSpread


MacOS
Navigate to the root folder
cd to ios folder
run pod install (must have CocoaPods installed)
In the root folder, run npx react-native run-ios --simulator="iPhone 12 Pro Max" for iOS simulator or npx react-native run-android for Android simulator
**To run on different ios device, change value of --simulator flag

no bundle error? => https://www.youtube.com/watch?v=eCs2GsWNkoo&ab_channel=ChanYouvita
Using npx react-native bundle --entry-file index.js --platform ios --dev false --bundle-output ios/main.jsbundle --assets-dest ios


Windows
You can install Node and JDK using Chocolatey a package manager for windows. Download it and run it as administrator and enter the following command
choco install -y nodejs.install openjdk8
Make sure your Node is version 10 or newer and JDK is version 8 or newer
Download and install Android studio and follow the react naive docs React Native CLI Quickstart tab to properly configure your android emulator.


Start your android emulator
Navigate to the folder and run command prompt there or run command prompt and navigate to the folder containing the source code.
Run the following commands:
npx react-native  start
Then open a new command prompt and navigate to this folder again and run the below command


npx react-native   run android


If the above commands don’t work try this command instead
npm run android


You may encounter more issues in which case please use stack overflow and google to resolve them as this document is not an exhaustive list of all the issues that can occur when trying to install react native. Assuming you got this far the app should be building and should automatically launch on your emulator. If that is not the case then click on the metro server console (it has a fancy symbol in blue) and press r to reload the app.


Then now the app should be running on your device and you can start using it.


Running the app:
First exit the app and go into the emulator’s settings. Click on apps & notifications > App permissions > Location. Scroll down to stsNew and flip on the switch. Then go back to your home screen, pull up the app drawer then click on stsNew and run it.


Web app:
To view our website click on here. It’s just a template at the moment the contact tracing code resides on Heroku and runs automatically at least once a day then shuts down because we’re using the Free tier; if the worker is down refresh the website, once that is up the worker should refresh as well. To access the dashboard and see the console logs the contact tracing program outputs go here and create an account using the debra.parcheta@ucdenver.edu email. You should be invited to the project. Click on this link to access the logs. Scan the logs for a [worker,1]. If it is shut down or crashed you can restart it by clicking on the more button in the top right and selecting restart all dynos. It will take a while then the program will run again. The program outputs to the log whenever a person reports they’ve tested positive.


Database:
To access the database login to google under the following
Email: contacttracingcu@gmail.com
Password: cudenver2020                                                     


And go to here: https://console.firebase.google.com/u/1/project/sts0-76694/database/sts0-76694/data