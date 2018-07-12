// variaveis
var varNumberBig = 1;
var varIntervalo = 0;
var varIntervaloSTOP = false;

// Função de loop alert
function loopAlert() {
    alert('Loop!!');
}

// Função de loopNumberBig
function loopNumberBig() {
    varNumberBig++;
    colorHEX = "#0"+String(varNumberBig).substring(0, 2);
    $("#loopNumberBigRetorno").html('<span style="font-size: '+varNumberBig+'px;color: '+colorHEX+'">'+varNumberBig+'</span>');
}

function intervalo(modo, funcao, tempo) {
    if (modo == true){
        if (varIntervaloSTOP == true){return;}
        varIntervalo = setInterval(funcao, tempo);
        varIntervaloSTOP = true;
    }else{
        clearInterval(varIntervalo);
        varIntervaloSTOP = false;
    }
}