//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAaCOUHL9WBmcbYk3t6T_G92BVjketyudY",
      authDomain: "kwitter-b1a77.firebaseapp.com",
      databaseURL: "https://kwitter-b1a77-default-rtdb.firebaseio.com",
      projectId: "kwitter-b1a77",
      storageBucket: "kwitter-b1a77.appspot.com",
      messagingSenderId: "953873030043",
      appId: "1:953873030043:web:730c5f5e0edf59d6341f3e"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

var room_name = localStorage.getItem("room_name");
var user_name = localStorage.getItem("user_name");

function getData() {firebase.database().ref("/" + room_name).on('value', function(snapshot) {document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) {var childKey  = childSnapshot.key; var childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
      //Start code

      //End code
} });  }); }

getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function send() {
      var msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}