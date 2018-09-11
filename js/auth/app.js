document.getElementById("login").addEventListener("click", function () {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function (result) {

  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
});

firebase.auth().onAuthStateChanged(function (user) {//callback
  if (user) {
    console.log(user);
    //window.location = "views/principal.html";
    $("#second-view").attr("style", "display:block");
    $("#first-view").attr("style", "display:none");

    //console.log("loguedo");
    //con sole.log(user);
  } else {
    console.log("desloguedo");
    $("#first-view").attr("style", "display:none");
    $("#second-view").attr("style", "display:block");
  }
});


