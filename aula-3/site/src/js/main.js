$("body").hide().fadeIn(1000);

setInterval(function () {
    $("input").addClass("form-control");
    $("select").addClass("form-control");
}, 10);

// função para colocar um numero de pedido

var random = Math.floor((Math.random() * 9999) + 10);
$("#numero").val(random);

// função de forQuantidade
function forQuantidade(quantidadeOvos) {
    if (quantidadeOvos < 1){quantidadeOvos = 1;}
    var i;
    var html = "";
    for (i = 1; i <= quantidadeOvos; i++) {
        if (i <= 5) {
            html += '<br><div class="panel panel-default panel-body"><label>Tipo do Ovo '+i+'</label><select id="tipoOvo'+i+'"> <option value="inteiro">Inteiro</option> <option value="meio">Meio</option></select><br><br><label>Peso do Ovo '+i+'</label><select id="pesoOvo'+i+'"> <option>100g</option> <option>200g</option> <option>300g</option></select> <br> <br> <label>Crocante ou liso Ovo ' + i + '</label> <select id="texturaOvo' + i + '"> <option>Crocante</option> <option>Liso</option> </select> <br> <br> <label>Recheado Ovo ' + i + '</label> <select id="recheadoOvo' + i + '"> <option value="sim">Sim</option> <option value="nao">Não</option> </select> <br> <br> <label>Sabor da casca Ovo ' + i + '</label> <select id="saborCascaOvo' + i + '"> <option>Chocolate ao leite</option> <option>Chocolate meio amargo</option> <option>Chocolate branco</option> </select> <span id="saborDiv' + i + '"><script>$("#recheadoOvo' + i + '").ready(function(){var o=\' <br> <br> <label>Sabor do recheio Ovo ' + i + '</label> <select id="saborRecheioOvo' + i + '"> <option>Chocolate</option> <option>Morango</option> <option>Nutella</option> </select>\';$("#recheadoOvo' + i + '").change(function(){var a=$(this).val();"sim"==a?$("#saborDiv' + i + '").html(o):"nao"==a&&$("#saborDiv' + i + '").html(" ")}),$("#saborDiv' + i + '").html(o)});</script> </span> </div>';
        }
    }
    $("#forQuantidade").html(html);
}
