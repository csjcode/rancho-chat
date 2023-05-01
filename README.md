# rancho-chat
React Native Chat App with Crypto, Mapping

This is an early-stage ongoing app, representing less than 2 months work -- but I prioritized another app now so have made this public for naybody to look at and contribute.

* You are welcome to add revisions, PRs or additional feedback including ideas. 
* I do plan to pick this up again, just right now my plate is full!

It's a working app. You can use the code and install/start up with Expo. 

You may need to fork or port it to your own app. But the code does work as of May 1 2023. I just tried it! I've used it both on my phone with the Expo app and Android Studio.

REQUIREMENTS: You will have to add your own Firebase database (it's free, signup with Google, but you need to create an API key). I will add more info about that soon witht he schema, or you can infer it from the SDK in the code. 

It's uses React Native and Expo and includes Redux RTK for state management, Typescript, many other mobile Expo libraries. 

I started with some Whatsapp-style Chat functionality, but then did a lot of additional refactoring and added a "Tricks" page to experiment with React Native sensors and functionality.

* There is a Mapping component with customized pins by location. 
* There is a very basic crypto api call to get some crypto prices. I've done more complex crypto dashboards before but just wanted to get something in there, while I explored various ideas, so what is there for that part is extremely limited so far.
* There is Light/Dark theme switching
* Redux RTK state management and form validation
* Jest unit tests and snapshot tests

This was created as a white-label, generic app for usage in other future Web3 projects and parts were also in with a React native course I took - I combined my interests, and then refactored the code substantially to Typescript (from original Javascript).

Ideas for improvements:

1. Add Solana Pay, web3.js  or other Wallets and ability to add products. I've already done this for Web (see my public repos) but have not done it yet for this React Native app. 
2. Add ability to use coupons and mint coupons.
3. Add more mapping and map related functionality.
4. Refactor the Typescript and styles.
5. Improve the styling - it's pretty basic.
6. Build out the crypto quote functionality, perhaps add NFTs.


README TODO: Add Firebase schema and key/.env example with sample data here
