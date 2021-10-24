var firebaseConfig = {
    apiKey: "AIzaSyCnLXQpElS-Rbkdoa_kCr3YEAeAkuFmWFY",
    authDomain: "practice--c-94.firebaseapp.com",
    databaseURL: "https://practice--c-94-default-rtdb.firebaseio.com",
    projectId: "practice--c-94",
    storageBucket: "practice--c-94.appspot.com",
    messagingSenderId: "28121803440",
    appId: "1:28121803440:web:371133ad666a11835e2975",
    measurementId: "G-26PLMECPYL"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }