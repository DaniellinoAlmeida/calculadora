// This is a JavaScript file
$(document).on("click","#btnsomar",function(){
  var valor1 = $("#valor1").val();
  var valor2 = $("#valor2").val();
  var result = parseFloat(valor1) + parseFloat(valor2);
  $("#resultado").val(result);
}); 

$(document).on("click","#btnsubtrair",function(){
  var valor1 = $("#valor1").val();
  var valor2 = $("#valor2").val();
  var result = parseFloat(valor1) - parseFloat(valor2);
  $("#resultado").val(result);
}); 

$(document).on("click","#btndividir",function(){
  var valor1 = $("#valor1").val();
  var valor2 = $("#valor2").val();
  var result = parseFloat(valor1) / parseFloat(valor2);
  $("#resultado").val(result);
}); 

$(document).on("click","#btnmultiplicar",function(){
  var valor1 = $("#valor1").val();
  var valor2 = $("#valor2").val();
  var result = parseFloat(valor1) * parseFloat(valor2);
  $("#resultado").val(result);
}); 

  $(document).on("click","#btnlimpar",function(){
  var valor1 = $("#valor1").val("");
  var valor2 = $("#valor2").val("");
  $("#resultado").val("");
}); 