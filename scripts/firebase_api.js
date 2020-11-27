//TODO: Add SDKs for Firebase products that you want to use
//  https://firebase.google.com/docs/web/setup#available-libraries -->



var firebaseConfig = {
  apiKey: "AIzaSyA3Qlv-T2A_ox-vv95MT9xw13tuU3NVsAw",
  authDomain: "comp1800-team26.firebaseapp.com",
  databaseURL: "https://comp1800-team26.firebaseio.com",
  projectId: "comp1800-team26",
  storageBucket: "comp1800-team26.appspot.com",
  messagingSenderId: "921630965539",
  appId: "1:921630965539:web:d804705d0ad4095b489696",
  measurementId: "G-1DR37029JH"
};

/*Initialize Firebase*/

firebase.initializeApp(firebaseConfig);

// Create the Firestore database object
// Henceforce, any reference to the database can be made with "db"

const db = firebase.firestore();