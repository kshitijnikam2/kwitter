//ADD YOUR FIREBASE LINKS HERE
  var firebaseConfig = {
    apiKey: "AIzaSyBU6mTVx5uOtf-6BuFunxqKvO85yZ2paak",
    authDomain: "kwitter-21bc5.firebaseapp.com",
    databaseURL: "https://kwitter-21bc5-default-rtdb.firebaseio.com",
    projectId: "kwitter-21bc5",
    storageBucket: "kwitter-21bc5.appspot.com",
    messagingSenderId: "318970092769",
    appId: "1:318970092769:web:20034aeaae1da516c2eba0"
  };

firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("username");
document.getElementById("username").innerHTML = "Welcome " + username + "!";

//functions START

function addRoom()
{
      roomname = document.getElementById("roomname").value;
      firebase.database().ref("/").child(roomname).update(
            {purpose : "adding room name"
      });
      localStorage.setItem("roomname", roomname);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("roomname: " + Room_names);
                  row = "<div class = 'roomname'  id= "+ Room_names +" onclick = 'redirectToRoomName(this.id)'>#"+ Room_names +" </div> <hr>";
                  document.getElementById("output").innerHTML += row;
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log("name");
      localStorage.setItem("roomname", name);
      window.location = "kwitter_page.html";
}
function logout() 
{
      localStorage.removeItem("username");      
      localStorage.removeItem("roomname"); 
      window.location = "index.html";    
}