var firebaseConfig = {
    apiKey: "AIzaSyBPGDtdpG1BkqtFiozhKVoLGRAoQaFgV3A",
    authDomain: "chatapp-73ce5.firebaseapp.com",
    databaseURL: "https://chatapp-73ce5-default-rtdb.firebaseio.com",
    projectId: "chatapp-73ce5",
    storageBucket: "chatapp-73ce5.appspot.com",
    messagingSenderId: "489772515907",
    appId: "1:489772515907:web:d736ebddf47112328bcaf6",
    measurementId: "G-Z8EHFF02LL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("Username");
  document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

  function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
purpose:"adding room name"
      });

      localStorage.setItem("room_name",room_name);

      window.location="letschat_page.html";
  }

  function getData(){
    firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
        Room_names = childKey;
        row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
        document.getElementById("output").innerHTML+=row;
    });
});
  }

  getData();

  function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="letschat_page.html";
  }

  function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
  }