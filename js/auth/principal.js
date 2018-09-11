$(document).ready(function(){
  $("#logout").click(function(){
   console.log("Boton logout clickeado");
   firebase.auth().signOut();
   // window.location.href = "../index.html";     //class display none jquery div 
   $("#first-view").attr("style", "display:block");
   $("#second-view").attr("style", "display:none");

  });


// firebase.auth().onAuthStateChanged(function(user) {//callback
//     if (user) {
//       //console.log("Loggedin");
//       //console.log(user);
//       $("#foto-perfil").attr("src", user.photoURL);
//       $("#nombre-perfil").text(user.displayName);
//     }else{
//       console.log("desloguedo");
//       //window.location="../index.html"; //block
//       $("#first-view").attr("style", "display:none");
//       $("#second-view").attr("style", "display:block");

//     }
//    });
  });