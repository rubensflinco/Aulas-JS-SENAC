function submitFormPedido(){
    var numero = $("#numero").val();
    var nome = $("#nome").val();
    var quantidade = $("#quantidade").val();

    if (quantidade < 1){quantidade = 1;}
    var i;
    var htmlFor = "";
    for (i = 1; i <= quantidade; i++) {
        if (i <= 5) {
            htmlFor += ' <br><div class="panel panel-default panel-body"> <label>Tipo do Ovo '+i+'</label> <input readonly value="'+$("#tipoOvo"+i).val()+'"> <br> <br> <label>Peso do Ovo '+i+'</label> <input readonly value="'+$("#pesoOvo"+i).val()+'"> <br> <br> <label>Crocante ou liso do Ovo '+i+'</label> <input readonly value="'+$("#texturaOvo"+i).val()+'"> <br> <br> <label>Recheado do Ovo '+i+'</label> <input readonly value="'+$("#recheadoOvo"+i).val()+'"> <br> <br> <label>Sabor da casca do Ovo '+i+'</label> <input readonly value="'+$("#saborCascaOvo"+i).val()+'"> <br> <br> <label>Sabor do recheio do Ovo '+i+'</label> <input readonly value="'+$("#saborRecheioOvo"+i).val()+'"> </div>';
        }
    }
    
    var html = '<!-- Teamplate --><!DOCTYPE html><html lang="pt-br"><head> <meta charset="UTF-8"> <meta name="author" content="Rubens Flinco"> <meta name="description" content="Pastas das aulas que estou tendo de JavaScript no SENAC."> <title>Aula 3</title> <link rel="shortcut icon" href="src/img/icon.png"> <link rel="stylesheet" type="text/css" href="src/css/bootstrap.css"> <link rel="stylesheet" type="text/css" href="src/css/main.css"> <script type="text/javascript" src="src/js/jquery.js"></script> <body> <div class="container"> <form method="POST" action="javascript:submitFormPedido();" class="fundo_sombra animated s1 pulse"> <center><a href="javascript:window.print();" class="btn btn-primary"><h1>Imprimir pedido</h1></a></center> <br> <br> <label>Numero do pedido</label> <input readonly value="'+numero+'"> <br> <br> <label>Nome do cliente</label> <input readonly value="'+nome+'"> <br> <br> <label>Quantidade de ovos</label> <input readonly value="'+quantidade+'"> <span id="forQuantidadePrint">'+htmlFor+'</span> </form> </div> </body> <script type="text/javascript" src="src/js/main.js"></script></html>';

    document.write(html);

};