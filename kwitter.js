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

function adduser() {
    username = document.getElementById("username").value;
    localStorage.setItem("username", username);
    window.location = "kwitter_room.html";
}
