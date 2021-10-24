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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
var name= message_data['name'];
var message= message_data['message'];
var like= message_data['like'];
var name_with_tag="<h4>"+name+"<img class='user_tick' scr='tick.png'></h4>";
var message_with_tag="<h4 class='message-h4'>"+message+"</h4>";
var like_button="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='updateLike(this.id)'>";
var span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button><hr>";

var row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;

//End code
      } });  }); }
getData();

var user_name=localStorage.getItem("user_name");
var room_name=localStorage.getItem("room_name");

function send(){
     var msg=document.getElementById("msg").value;
     firebase.database().ref(room_name).push({
           name:user_name,
           message:msg,
           like:0
     });
     document.getElementById("msg").value="";
}

function logout(){
      window.location="kwitter_room.html";
}
