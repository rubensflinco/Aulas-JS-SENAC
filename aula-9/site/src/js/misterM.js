// função para desaparecer objetos de diferentes modos
function misterM(objId, modo, tempo) {
    
    if(modo == "hide"){
        $(objId).hide(tempo);
    }else
    if(modo == "show"){
        $(objId).show(tempo);
    }else
    if(modo == "toggle"){
        $(objId).toggle(tempo);
    }else
    if(modo == "fadeIn"){
        $(objId).fadeIn(tempo);
    }else
    if(modo == "fadeOut"){
        $(objId).fadeOut(tempo);
    }else
    if(modo == "slideUp"){
        $(objId).slideUp(tempo);
    }else
    if(modo == "slideDown"){
        $(objId).slideDown(tempo);
    }else
    if(modo == "slideToggle"){
        $(objId).slideToggle(tempo);
    }else
    console.log("ERRO: modo não encontrado !");
    
}