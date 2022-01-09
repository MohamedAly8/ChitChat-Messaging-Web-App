import firebase from "firebase/app";
import "firebase/auth";


export const auth = firebase.initializeApp({


        apiKey: "AIzaSyCDK1aRetwt5llwJaHUWF_b3D_7UqfMpnA",   
        authDomain: "chitchat-8e316.firebaseapp.com",    
        projectId: "chitchat-8e316",  
        storageBucket: "chitchat-8e316.appspot.com",
        messagingSenderId: "408635541360",
        appId: "1:408635541360:web:39311ab6973d75aa4cb1b5"
      
  
}).auth();

