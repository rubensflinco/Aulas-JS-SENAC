const aluno = "Rubens Flinco";
const escola = "SENAC";

document.write("Olá aluno " + aluno + " da escola " + escola);


document.write("<br><br>");


var s = 15;
var addIncomodam = ", incomodam ";
for (i = 1; i <= s; i++) {

    if (i == 1)
        document.write(i + " elefante incomoda muita gente<br>");
        if (i > 1) {
            var resto = i%2;

            if (resto == 0) {
                var addIncomodam = addIncomodam+", incomodam ";
                document.write(i + " elefantes incomodam"+addIncomodam+", incomodam muito mais<br>");
            } else {
                document.write(i + " elefantes incomodam muita gente<br>");
            }

        }


}