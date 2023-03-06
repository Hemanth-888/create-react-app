import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  // Your Firebase configuration goes here
  const firebaseConfig = {
  apiKey: "AIzaSyCf1DcJN1Z7akUtYLEaiqczHm8OluyIGjg",
  authDomain: "reactproject-b4f06.firebaseapp.com",
  projectId: "reactproject-b4f06",
  storageBucket: "reactproject-b4f06.appspot.com",
  messagingSenderId: "56328302875",
  appId: "1:56328302875:web:253fb7ba81f922e271a3be",
  measurementId: "G-DG20W1S601"
};
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
