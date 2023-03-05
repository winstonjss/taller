function botonConfirmar(){
    var x;
var r=confirm("¿Desea dejar la pagina?");
if (r==true)
  {
  x="You pressed OK!";
   location.href = '../biografia.html';
  }
else
  {
  x="You pressed Cancel!";
  location.href = '../index.html';
  }
}