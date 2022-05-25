var firebaseConfig = {
      apiKey: "AIzaSyATCZxKH0DXySj1gKyt_mZuKJngMeQfdb0",
      authDomain: "kwitter-console-test.firebaseapp.com",
      databaseURL: "https://kwitter-console-test-default-rtdb.firebaseio.com",
      projectId: "kwitter-console-test",
      storageBucket: "kwitter-console-test.appspot.com",
      messagingSenderId: "500027391195",
      appId: "1:500027391195:web:ec4fc6329212068a1360fe",
      measurementId: "G-J9K39DBBV3"
};
firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + username + "!";



function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("room_name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
            });
      });
}
getData();

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "addingroomname"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

