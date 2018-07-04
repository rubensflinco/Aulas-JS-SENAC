// Rodrigo, Amanda, Carlos
const aluno = "Rodrigo Beijamin";
const alunoS = aluno.split(" ");
const alunoC = alunoS[0];
const alunoU = alunoC.charAt(alunoC.length-1);

var boasVindas;

if (alunoU == "a"){
boasVindas = "Bem vinda";
}else
if (alunoU == "o"){
boasVindas = "Bem vindo";
}else
boasVindas = "Bem vindo(a)";

document.write(boasVindas + " " + aluno +".");