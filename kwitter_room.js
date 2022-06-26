const firebaseConfig = {
    apiKey: "AIzaSyCdg9mLCMk0AsZIIU95VlGA-ko7LUQNb8k",
    authDomain: "kwitterprojectdatabase.firebaseapp.com",
    databaseURL: "https://kwitterprojectdatabase-default-rtdb.firebaseio.com",
    projectId: "kwitterprojectdatabase",
    storageBucket: "kwitterprojectdatabase.appspot.com",
    messagingSenderId: "220844124123",
    appId: "1:220844124123:web:3e9f8d96bf9cf4aaa6a9fe"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML = "Welcome " + user_name  + "!"

function addRoom(){
    room_name = document.getElementById("room_name").value 
    firebase.database().ref("/").child(room_name).update({
      purpose : "Adding room name"
    })
    localStorage.setItem("room_name", room_name)
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log(Room_names)
       row = "<div class= 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div>"
       document.getElementById("output").innerHTML += row
      //End code
      });});}
getData();

function redirectToRoomName(name){
localStorage.setItem("room_name", name)
window.location = "kwitter_page.html"
}

function logout(){
  localStorage.removeItem("user_name")
  localStorage.removeItem("room_name")
  window.location = "kwitter.html"
}


