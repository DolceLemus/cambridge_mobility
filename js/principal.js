$(document).ready(function(){
  $("#logout").click(function(){
   console.log("Boton logout clickeado");
   firebase.auth().signOut();
   // window.location.href = "../index.html";     //class display none jquery div 
   //$("#login-container").attr("style", "display:block");
   //$("#mapa-container").attr("style", "display:none");
   $("#login-container").show();
   $("#mapa-container").hide();

 });
//  $('.modal').modal();
//  $('.sidenav').sidenav();
 $('select').formSelect();
});

firebase.auth().onAuthStateChanged(function(user) {//callback
    if (user) {
      //console.log("Loggedin");
      //console.log(user);
      $("#foto-perfil").attr("src", user.photoURL);
      $("#nombre-perfil").text(user.displayName);
      $("#mapa-container").show();
      $("#login-container").hide();
    }else{
      console.log("desloguedo");
      //window.location="../index.html"; //block
      //$("#login-container").attr("style", "display:none");
      //$("#mapa-container").attr("style", "display:block");
      $("#login-container").hide();
      $("#mapa-container").show();

    }
   });
