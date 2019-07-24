import * as firebase from 'firebase';

export const environment = {
  production: true,

  firebaseConfig : {
    apiKey: 'AIzaSyDG477fr0OkEG9OdUrz-QLCS5IVPwYJkYQ',
    authDomain: 'delight-b1bce.firebaseapp.com',
    databaseURL: 'https://delight-b1bce.firebaseio.com',
    projectId: 'delight-b1bce',
    storageBucket: 'delight-b1bce.appspot.com',
    messagingSenderId: '1004159480475',
    appId: '1:1004159480475:web:22da72d744c2759b'
  }
  /*
   * For easier debugging in development mode, you can import the following file
   * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
   *
   * This import should be commented out in production mode because it will have a negative impact
   * on performance if an error is thrown.
   */
  // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
  // <!-- The core Firebase JS SDK is always required and must be listed first -->
  // <script src="https://www.gstatic.com/firebasejs/6.2.4/firebase-app.js"></script>

  // <!-- TODO: Add SDKs for Firebase products that you want to use
  //      https://firebase.google.com/docs/web/setup#config-web-app -->
  // <script>
    // Your web app's Firebase configuration
    // Initialize Firebase
  // </script>
};
firebase.initializeApp(environment.firebaseConfig);
