// função para dar a action do formulario 

function actionFormSacarDinDin(){
    var valor = parseInt($("#valor").val());
    var retorno = sacarDinDin(valor);
    $("#retorno").html(JSON.stringify(retorno));
}