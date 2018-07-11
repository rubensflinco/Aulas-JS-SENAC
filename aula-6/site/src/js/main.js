// variaveis
var token = "1545345526556";

// função para dar ação pro botão.
function actionButton(modo, id_user, nome){


    if (modo == 1){ // Modo de REMOÇÃO de usuario
        pergunta = confirm("Deseja mesmo deletar o usuario "+nome+" ?")
        if(pergunta==true)
        window.location=("API/user/deletar?token="+token+"&id_user="+id_user+"&nome="+nome);
    }else
    if(modo == 2){ // Modo de EDIÇÃO de usuario
        pergunta = confirm("Deseja mesmo editar o usuario "+nome+" ?")
        if(pergunta==true)
        window.location=("API/user/editar?token="+token+"&id_user="+id_user+"&nome="+nome);
    }else
    if(modo == 3){ // Modo de IMPRESÃO de pagina
        pergunta = confirm("Deseja mesmo imprimir os dados do usuario "+nome+" ?")
        if(pergunta==true)
        PrintElem("user_"+id_user);
    }else{
    alert("ERRO: modo de função invalido ou não enviado como parametro.");
    return("ERRO: modo de função invalido ou não enviado como parametro.");
    }

}

// função para executar form de cor no texto
function actionFormColor() {
    var cor = $("#form_cor").val();
    var nome = $("#form_nome").val();
    
    $("#form_result").html("<span style='color: "+cor+";'>"+nome+"</span>");

}

// função para calculadora
function calculadora(v1,s,v2) {
    var resultMenor = $("#resultMenor").val();
    var resultMenorCor = $("#resultMenorCor").val();
    var resultMaior = $("#resultMaior").val();
    var resultMaiorCor = $("#resultMaiorCor").val();
    v1 = parseFloat(v1);
    v2 = parseFloat(v2);

    if (s == "+"){cal = v1+v2;}else
    if (s == "-"){cal = v1-v2;}else
    if (s == "*"){cal = v1*v2;}else
    if (s == "/"){cal = v1/v2;}else
    if (s == "%"){cal = v1%v2;}else{
        $("#cal_result").html("ERRO: calculadora não achou um simbolo valido.");
    }

    if (cal < resultMenor){
        $("#cal_result").html("<span style='color: "+resultMenorCor+"'>RETORNO: "+v1+s+v2+" = "+cal+"</span>");
    }else
    if (cal > resultMaior){
        $("#cal_result").html("<span style='color: "+resultMaiorCor+"'>RETORNO: "+v1+s+v2+" = "+cal+"</span>");
    }else{
    $("#cal_result").html("RETORNO: "+v1+s+v2+" = "+cal);
    }
}

// função com o banco de dados dos usuarios
function bancoUsuarios() {
    var users = {
            "1": {
                "id":"1",
                "nome":"Felipe",
                "email":"felipe@gmail.com"
            },
            "2": {
                "id":"2",
                "nome":"Rubens",
                "email":"rubens@planetsweb.com.br"
            },
            "3": {
                "id":"3",
                "nome":"Lucas",
                "email":"lucas@gmail.com"
            },
     }

     return(users);
}

// função de impresão por ID
function PrintElem(elem)
{
    var mywindow = window.open('', 'PRINT', 'height=500,width=700');

    mywindow.document.write('<html><head><title>' + document.title  + '</title>');
    mywindow.document.write('</head><body >');
    mywindow.document.write('<h1>' + document.title  + '</h1>');
    mywindow.document.write(document.getElementById(elem).innerHTML);
    mywindow.document.write('</body></html>');

    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/

    mywindow.print();
    mywindow.close();

    return true;
}