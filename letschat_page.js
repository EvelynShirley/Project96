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
    room_name=localStorage.getItem("room_name");

    function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
        name: user_name,
        message:msg,
        like:0
      });
      document.getElementById("msg").value="";
    }
    
    function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
  }
  
 