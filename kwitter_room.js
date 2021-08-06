//ADD YOUR FIREBASE LINKS HERE
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

var user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      var room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) {var childKey  = childSnapshot.key;
      var Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      var row = "<div class='room_name' id='" + Room_names + "' onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      window.location = "index.html";
}