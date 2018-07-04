function submitForm() {

    var getNome = document.getElementById("nome").value;

    const aluno = getNome;
    const alunoS = aluno.split(" ");
    const alunoC = alunoS[0];
    const alunoU = alunoC.charAt(alunoC.length - 1);

    var boasVindas;

    if (alunoU == "a") {
        boasVindas = "Bem vinda";
    } else
        if (alunoU == "o") {
            boasVindas = "Bem vindo";
        } else
            boasVindas = "Bem vindo(a)";

    alert(boasVindas + " " + aluno + ".");

}

function submitFormIdade() {

    var getNome = document.getElementById("nome2").value.toLowerCase();
    var getIdade = document.getElementById("idade2").value.toLowerCase();
    var getNome2 = document.getElementById("nome3").value.toLowerCase();
    var getIdade2 = document.getElementById("idade3").value.toLowerCase();

    const aluno = getNome;

    var resultado1;

    if (getNome == getNome2)
        resultado1 = getNome + " é igual a " + getNome2;
    else
        resultado1 = getNome + " não é igual a " + getNome2;


    if (getIdade > 17)
        resultado1 = resultado1 + ", ele é maior de idade!!!";
    else
        resultado1 = resultado1 + ", ele é menor de idade!!!";

    alert(resultado1);

    var resultado2;

    if (getNome == getNome2)
        resultado2 = getNome + " é igual a " + getNome2;
    else
        resultado2 = getNome + " não é igual a " + getNome2;


    if (getIdade2 > 17)
        resultado2 = resultado2 + ", ele é maior de idade!!!";
    else
        resultado2 = resultado2 + ", ele é menor de idade!!!";

    alert(resultado2);

}