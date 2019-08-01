//Area dos botoes numericos

$(document).on("click","#vl1",function(){
  var vl1 = $("#tela").val("#tela");
  $("#tela").val("1");
});

$(document).on("click","#vl2",function(){
  var vl2 = $("#tela").val();
  $("#tela").val("2");
});

$(document).on("click","#vl3",function(){
  var vl3 = $("#tela").val();
  $("#tela").val("3");
});

$(document).on("click","#vl4",function(){
  var vl4 = $("#tela").val();
  $("#tela").val("4");
});

$(document).on("click","#vl5",function(){
  var vl5 = $("#tela").val();
  $("#tela").val("5");
});

$(document).on("click","#vl6",function(){
  var vl6 = $("#tela").val();
  $("#tela").val("6");
});

$(document).on("click","#vl7",function(){
  var vl7 = $("#tela").val();
  $("#tela").val("7");
});

$(document).on("click","#vl8",function(){
  var vl8 = $("#tela").val();
  $("#tela").val("8");
});

$(document).on("click","#vl9",function(){
  var vl9 = $("#tela").val();
  $("#tela").val("9");
});

$(document).on("click","#vl0",function(){
  var vl0 = $("#tela").val();
  $("#tela").val("0");
});

$(document).on("click","#btnsomar",function(){
  var soma = $("#tela").val();
  $("#tela").val("+");
});

$(document).on("click","#vl1",function(){
  var vl1 = $("#tela").val();
  $("#tela").val("1");
});


//Area dos botoes de ação

/*function somar(){
  var vl1 = $('vl1').val;
  var vl2 = $('vl2').val;
  var soma = $('btnsomar').val;
  var tela = $('tela').val;

  if(soma == 1){
    vl2
  }
}*/

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
  var vl1 = $("#tela").val();
  $("#tela").val("0");
}); 