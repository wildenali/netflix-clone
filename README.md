# NETFLIX Clone

## [https://netflix-clone-wilden.web.app](https://netflix-clone-wilden.web.app)

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# Create React Project

- `$ npx create-react-app .`
- Bersihin file2 dan program2 yg tidak terpakai

# Setup Firebase Project

1. Create Project in Firebase with name `netflix-clone-wilden`
2. Install firebase-tools `$ npm install -g firebase-tools`
3. Login to firebase `$ firebase login`

# Setup TMDb API Key

1. Go to [https://www.themoviedb.org/](https://www.themoviedb.org/)
2. Click Join TMDb
3. Sign up for an account (Fill the form)
4. Sign in
5. Click user icon
6. Click Settings
7. Click API on Settings page
8. ##### Request an API Key

- To generate a new API key, click here.

9. Choose Developer
10. Scroll down and click Accept
11. Change Type of Use to<br/>
    `Website`
12. Fill the all form
13. Get the, and save the API Key

##### API Key (v3 auth)

`728b1c73524e7e482910e452b355872b`

# Install Axios

`$ npm i axios`

# Setup for Trainer Movie Pop-ups

1. Install React Youtube<br/>
   `$ npm i react-youtube`
2. Install Movie Trailer<br/>
   `$ npm i movie-trailer`

# Deploy to Firebase

1. Install firebase tools `$ npm install -g firebase-tools`
2. Firebase Init `$ firebase init`

- Are you ready to procees? `Jawab Y`
- Pilih Hosting: Configure and deploy Firebase Hosting sites
- What do you want to use as your public directory? `(awalnya public ganti jadi build)`
- Configure as a single-page app (rewrite all urls to /index.html)? (y/N) , `jawab YES aja`
- `$ npm run build`
- `$ firebase deploy`
- Cara cepat `$ npm run build && firebase deploy`
