//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyC0Fo-2GzK0yynJdFicqczDaT08fO8riSo",
      authDomain: "kwitter-4ef8e.firebaseapp.com",
      databaseURL: "https://kwitter-4ef8e-default-rtdb.firebaseio.com",
      projectId: "kwitter-4ef8e",
      storageBucket: "kwitter-4ef8e.appspot.com",
      messagingSenderId: "828106039332",
      appId: "1:828106039332:web:77d56ba4da779af9e1f8b1"
    };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
