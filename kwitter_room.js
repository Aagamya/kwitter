
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCBaxIxh2K51txinY2wYMn2hXoWlksN47c",
      authDomain: "chat-app-8a78c.firebaseapp.com",
      databaseURL: "https://chat-app-8a78c-default-rtdb.firebaseio.com",
      projectId: "chat-app-8a78c",
      storageBucket: "chat-app-8a78c.appspot.com",
      messagingSenderId: "959178507207",
      appId: "1:959178507207:web:89fcbc3a76f34bc5760fe2",
      measurementId: "G-DTP538T29H"
    };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
