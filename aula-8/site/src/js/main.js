function styleDivTudo(divStyle) {
    $(divStyle).css('background', 'blue');
    $(divStyle).css('width', '100px');
    $(divStyle).css('box-shadow', '0 4px 8px 0 rgba(0, 0, 0, 0.25), 0 6px 10px 0 rgba(0, 0, 0, 0.25)');
    $(divStyle).css('border', 'solid 10px green');
}





$("a").click(function () {
    $("#resultado").html("OK: Clicou.");
});
$("a").dblclick(function () {
    $("#resultado").html("OK: Clicou 2 vezes.");
});
$("input").blur(function () {
    var v = $(this).val();
    if(v == ""){
        $(this).css({"border-color": "red"});
        $(this).focus();
        $("#resultado").html("ERRO: Prenche essa MERDAAAAA.");
    }else{
        $("#resultado").html("OK: "+v);
        $(this).css({"border-color": "green"});
    }
});
$("input").focus(function () {
    $("#resultado").html("OK: Focou.");
});
$("select").change(function () {
    $("#resultado").html("OK: Selecinou.");
});
$("div #btn1").hover(function () {
    $("#resultado").html("OK: Passou.");
});