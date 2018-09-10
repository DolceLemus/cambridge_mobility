var expresion = '\b[A-Z]{1,2}[0-9][A-Z0-9]? [0-9][ABD-HJLNP-UW-Z]{2}\b';

function validarCodigoPostal()
{
  var input = document.getElementById("codigo").value;
  console.log(parseInt(input))
  if(expresion == true)
  {
    console.log("codigo valido");
  }
  else{
    console.log("codigo invalido");
   }
}