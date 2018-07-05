$("#tipoOvo").change(function () {
    var html = ' <br> <br> <label>Crocante ou liso Ovo 2</label> <select id="texturaOvo2"> <option>Crocante</option> <option>Liso</option> </select> <br> <br> <label>Recheado Ovo 2</label> <select id="recheadoOvo2"> <option value="sim">Sim</option> <option value="nao">Não</option> </select> <br> <br> <label>Sabor da casca Ovo 2</label> <select id="saborCascaOvo2"> <option>Chocolate ao leite</option> <option>Chocolate meo amargo</option> <option>Chocolate branco</option> </select> <span id="saborDiv2"><script>$("#recheadoOvo2").ready(function(){var o=\' <br> <br> <label>Sabor do recheio Ovo 2</label> <select id="saborRecheioOvo2"> <option>Chocolate</option> <option>Morango</option> <option>Nutella</option> </select>\';$("#recheadoOvo2").change(function(){var a=$(this).val();"sim"==a?$("#saborDiv2").html(o):"nao"==a&&$("#saborDiv2").html(" ")}),$("#saborDiv2").html(o)});</script> </span> ';
    var changeGet = $(this).val();

    if (changeGet == "inteiro") {
        $("#tipoOvo2Meio").html(" ");
    } else
        if (changeGet == "meio") {
            $("#tipoOvo2Meio").html(html);
        }
    
});

$("#tipoOvo2Meio").html(" ");