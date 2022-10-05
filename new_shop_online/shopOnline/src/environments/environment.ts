// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080',
  firebaseConfig: {
    apiKey: 'AIzaSyDPVsOQthj0fVaVbWBsd9wxp9Ww1_dIJxo',
    authDomain: 'truongtxshop.firebaseapp.com',
    databaseURL: 'https://truongtxshop-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'truongtxshop',
    storageBucket: 'truongtxshop.appspot.com',
    messagingSenderId: '642542932817',
    appId: '1:642542932817:web:4a6d482bba9e5177843970',
    measurementId: 'G-02SDRTXE69',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
