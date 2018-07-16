// mudar a cor do quadrado de tempo em tempo
setInterval(function () {
    var random = Math.floor(Math.random() * 100) + 900;
    $(".quadrado").animate({backgroundColor: "#"+random}, 3000);
}, 5000);