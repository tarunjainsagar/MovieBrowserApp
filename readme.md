Pre-requisites:

Install Expo:
```
npm install -g expo-cli
```

Download Expo application for android from playstore:
```
https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en&gl=US
```

Create an account on The Movie Database website (TMDB): https://developer.themoviedb.org/docs

Update credentials in the file: src/api/TheMovieDatabase.js
```
const TMDB_API_KEY = 'Your_Api_key';
const TMDB_ACCOUNT_ID = 'Your_Account_id';
```

Steps to run this application:

```
git clone https://github.com/tarunjainsagar/MovieBrowserApp.git
cd MovieBrowserApp
git checkout master
git pull
npm install
npm start run
```

Scan the QR code displayed on terminal using Expo Go application in android phone.
Enjoy!!!