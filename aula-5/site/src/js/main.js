//  função para executar lista de nomes digitados
function listNomesDigitados() {

var nomes = new Array();
var qnt = 1;
var c = prompt("Iniciar?");
var html = "";

while ((c.toLowerCase() == "sim") || (c.toLowerCase() == "yes") || (c.toLowerCase() == "s") || (c.toLowerCase() == "y")) {
    nomes[qnt] = prompt("Nome");
    c = prompt("Coninuar?");
    qnt++;
}

qnt--;

for (i = 1; i <= qnt; i++) {
var resto = i%2;
if (resto == 0) {
    html += ("<span class='par'>"+i + " - " + nomes[i] + "</span><br>");
} else {
    html += ("<span class='impar'>"+i + " - " + nomes[i] + "</span><br>");
}
    
}

$("#retorno").html(html);

}

// função para carregar pagina
function loadPage() {
    $("#loadPageCompleted").html("Pagina carregada !!!");
}

function clickButton() {
    $("#retorno").html("Clickouuu !!!!!!");
}

function digitAlert(v) {
    $("#retorno").html("Digitou: "+v);
    
}

function passouMouse() {
    $("#retorno").html("Passou !!!!");
}

function calculadora(v1,s,v2) {
    v1 = parseFloat(v1);
    v2 = parseFloat(v2);

    if (s == "+"){cal = v1+v2;}else
    if (s == "-"){cal = v1-v2;}else
    if (s == "*"){cal = v1*v2;}else
    if (s == "/"){cal = v1/v2;}else
    if (s == "%"){cal = v1%v2;}else{
        $("#retorno").html("ERRO: calculadora não achou um simbolo valido.");
    }
    $("#retorno").html("Resultado da calculadora: "+cal);
}