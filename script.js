var valorTotal = document.getElementById('valorTotal');
var r = document.getElementById('r');

function gerar_pedido(){
   var hamburger = document.getElementById('hamburger');
   var opcao1 = hamburger.options[hamburger.selectedIndex];

   var batata = document.getElementById('batata');
   var opcao2 = batata.options[batata.selectedIndex];

   var salgado = document.getElementById('salgado');
   var opcao3 = salgado.options[salgado.selectedIndex];

   var bebida = document.getElementById('bebida');
   var opcao4 = bebida.options[bebida.selectedIndex];

  
   r.innerHTML = opcao1.text + " - " +  opcao2.text + " - " +  opcao3.text + " - " + opcao4.text;
   valorTotal.innerHTML = Number(hamburger.value) + Number(batata.value) + Number(salgado.value) + Number(bebida.value);
   r.innerHTML = nome.value;
}
