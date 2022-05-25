var firebaseConfig = {
      apiKey: "AIzaSyA1IJ5eAU4FTCfMLFWhXiLg74hdjS8RxyA",
      authDomain: "project-94-4a2f0.firebaseapp.com",
      databaseURL: "https://project-94-4a2f0-default-rtdb.firebaseio.com",
      projectId: "project-94-4a2f0",
      storageBucket: "project-94-4a2f0.appspot.com",
      messagingSenderId: "1014252725949",
      appId: "1:1014252725949:web:28a120b471ae73ad4379d4",
      measurementId: "G-041JTFHD8S"
    };

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();
function send() {
      msg = document.getElementById("msg").value
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}