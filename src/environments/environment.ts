// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// <>となっている部分は、自分のapiKeyを入力
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyC_6ZHJjS0ofojt9rz6EUVsgY1REqqIqeI",
    authDomain: "angular-hosting-fd147.firebaseapp.com",
    databaseURL: "https://angular-hosting-fd147-default-rtdb.firebaseio.com",
    projectId: "angular-hosting-fd147",
    storageBucket: "angular-hosting-fd147.appspot.com",
    messagingSenderId: "670937178787",
    appId: "1:670937178787:web:4086d0c80bc85369cf9516",
    measurementId: "G-QQ1F7N19BN"
  }
}


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
