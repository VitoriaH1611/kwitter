const firebaseConfig = {
    apiKey: "AIzaSyDte0QaeAktHx2oCOUP75FX9q9ls7x796Q",
    authDomain: "kwitter-10dd7.firebaseapp.com",
    databaseURL: "https://kwitter-10dd7-default-rtdb.firebaseio.com",
    projectId: "kwitter-10dd7",
    storageBucket: "kwitter-10dd7.appspot.com",
    messagingSenderId: "185133007313",
    appId: "1:185133007313:web:9fac9a5cad4ee1212f60f0"
  };

  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Bem-vindo(a) "  +  user_name  +  "!"


  function addRoom(){
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose : "adicionando nome da sala"
    });

    localStorage.setItem("room_name", room_name);
  }

  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log("Nome da Sala - " + Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;
 });
});

}

getData();

function redirectToRoomName(name){
    console.log(name)
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}