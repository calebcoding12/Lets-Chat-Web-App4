const firebaseConfig = {
    apiKey: "AIzaSyCPU9ufm5Qgl3RFll57USlFlnR22jMipeQ",
    authDomain: "lets-chat-web-app-f2ad1.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-f2ad1-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-f2ad1",
    storageBucket: "lets-chat-web-app-f2ad1.appspot.com",
    messagingSenderId: "698602588009",
    appId: "1:698602588009:web:ebd5793f7c0681a81a1ff8"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row = "<div class='room_name' id=" + Room_names + "onclick='redirect(this.id)'>#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirect(name){
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}