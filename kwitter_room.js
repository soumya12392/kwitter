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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
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