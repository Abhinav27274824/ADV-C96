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

room_name = localStorage.getItem("room_name")
    user_name = localStorage.getItem("user_name")

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send(){
      msg = document.getElementById("msg").value 
      firebase.database().ref(room_name).push({
        name : user_name, 
        message : msg,
        like : 0
      })
      document.getElementById("msg").value = ""
    }

    function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location = "kwitter.html"
    }
    

