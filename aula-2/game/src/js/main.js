var pp=0;
var pm=0;

$("#o_pedra").click(function(){

    $("#resultado").html(jogoMaquina("<i class='fa fa-stop'></i> Pedra"));

});

$("#o_papel").click(function(){

    $("#resultado").html(jogoMaquina("<i class='fa fa-paper-plane'></i> Papel"));

});

$("#o_tesoura").click(function(){

    $("#resultado").html(jogoMaquina("<i class='fa fa-scissors'></i> Tesoura"));

});


function jogoMaquina(jp){

    var randonNumber = Math.floor((Math.random() * 3));
    var arrayJogos = [
        "<i class='fa fa-stop'></i> Pedra",
        "<i class='fa fa-paper-plane'></i> Papel",
        "<i class='fa fa-scissors'></i> Tesoura"
    ];
    var htmlIcon = '<div class="animated bounce"><i class="fa fa-user"></i> - <i class="fa fa-android"></i></div>';
    var jm = arrayJogos[randonNumber];
    var retorno;

    if (jp == jm){
        retorno = htmlIcon + "<div class='animated s1 bounce'><span>"+jp+"</span> - <span>"+jm+"</span> <br><br> EMPATE !!!</div>";
    }else
    if ( ((jp.includes("Pedra")) && (jm.includes("Tesoura"))) || ((jp.includes("Papel")) && (jm.includes("Pedra"))) || ((jp.includes("Tesoura")) && (jm.includes("Papel"))) ){
        retorno = htmlIcon + "<div class='animated s1 bounce'><span>"+jp+"</span> - <span>"+jm+"</span> <br><br> GANHOU !!!</div>";
        pp=pp+1;
        $("#pp").html(pp);
    }else
    if ( ((jp.includes("Pedra")) && (jm.includes("Papel"))) || ((jp.includes("Papel")) && (jm.includes("Tesoura"))) || ((jp.includes("Tesoura")) && (jm.includes("Pedra"))) ){
        retorno = htmlIcon + "<div class='animated s1 bounce'><span>"+jp+"</span> - <span>"+jm+"</span> <br><br> PERDEU !!!</div>";
        pm=pm+1;
        $("#pm").html(pm);
    }else{
        retorno = htmlIcon + "<div class='animated s1 bounce'><span>Erro: não esperava cara, sorry ;-;</span></div>";
    }
    
    return(retorno);

}