// mudar a cor do quadrado de tempo em tempo
setInterval(function () {
    var random = Math.floor(Math.random() * 100) + 900;
    $(".quadrado").animate({backgroundColor: "#"+random}, 3000);
}, 5000);

// add campo
var qtnCampos = 1;

function addCampo(obj) {
    qtnCampos++;
    $(obj).append('<input id="formUser_nome_'+qtnCampos+'" placeholder="Nome '+qtnCampos+'" class="form-group form-control" type="text"> <input id="formUser_email_'+qtnCampos+'" placeholder="E-mail '+qtnCampos+'" class="form-group form-control" type="text"><br><br>');
}

// colocar campo na tela
function printCampos(obj) {
    var i = 0;
    $(obj).html("");
    while (i < qtnCampos) {
        i++;
        $(obj).append("<br> Nome: "+ $('#formUser_nome_'+i).val() + " E-mail: "+ $('#formUser_email_'+i).val());
    }

    $(obj).append('<br><br><button class="btn btn-info btn-circulo" onclick="PrintElem(\'camposRetorno\');"><i class="fa fa-print"></i></button>');
}