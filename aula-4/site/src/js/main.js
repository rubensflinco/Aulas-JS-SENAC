// variaveis de notas
var nota2 = 5;
var nota5 = 5;
var nota10 = 5;
var nota20 = 10;
var nota50 = 5;
var nota100 = 10;
var notaTotal = 0;
notaTotal += nota2;
notaTotal += nota5;
notaTotal += nota10;
notaTotal += nota20;
notaTotal += nota50;
notaTotal += nota100;

// variavel de saldo
var saldoCaixa = 0;
saldoCaixa += nota2 * 2;
saldoCaixa += nota5 * 5;
saldoCaixa += nota10 * 10;
saldoCaixa += nota20 * 20;
saldoCaixa += nota50 * 50;
saldoCaixa += nota100 * 100;

// função para sacar dinheiro
function sacarDinDin(valorSaque) {

    // variaveis de quantidade de notas
    var quatNotas2 = 0;
    var quatNotas5 = 0;
    var quatNotas10 = 0;
    var quatNotas20 = 0;
    var quatNotas50 = 0;
    var quatNotas100 = 0;
    var quatNotasTotal = 0;

    // verifica se o user digitou o valor de saque
    if (valorSaque == null) {
        return ("ERRO: defina um valor para saque.");
    }

    // verifica se o caixa tem saldo para saque
    if (valorSaque > saldoCaixa) {
        return ("ERRO: o caixa não tem esse valor para saque.");
    }

    // verificar se o valor é menor que R$2.00
    var valorSaqueFor = valorSaque;
    if (valorSaque < 2) {
        return ("ERRO: o caixa não pode sacar um valor menor que R$ 2.00 .");
    } else {

        // whiles para contar notas e entregar a quantidade de notas certas
        while (valorSaqueFor >= 100) {
            valorSaqueFor -= 100;
            if (nota100 > 0) {
                nota100--;
                quatNotas100++;
                quatNotasTotal++;
            }
        }

        while (valorSaqueFor >= 50) {
            valorSaqueFor -= 50;
            if (nota50 > 0) {
                nota50--;
                quatNotas50++;
                quatNotasTotal++;
            }
        }

        while (valorSaqueFor >= 20) {
            valorSaqueFor -= 20;
            if (nota20 > 0) {
                nota20--;
                quatNotas20++;
                quatNotasTotal++;
            }
        }

        while (valorSaqueFor >= 10) {
            valorSaqueFor -= 10;
            if (nota10 > 0) {
                nota10--;
                quatNotas10++;
                quatNotasTotal++;
            }
        }

        while (valorSaqueFor >= 5) {
            valorSaqueFor -= 5;
            if (nota5 > 0) {
                nota5--;
                quatNotas5++;
                quatNotasTotal++;
            }
        }

        while (valorSaqueFor >= 2) {
            valorSaqueFor -= 2;
            if (nota2 > 0) {
                nota2--;
                quatNotas2++;
                quatNotasTotal++;
            }
        }

        while (valorSaqueFor >= 1) {
            return ("ERRO: não temos troco para R$ 1.00 .");
        }

    }

    // diminiu saldo do caixa pela quantidade de valor sacado
    saldoCaixa = saldoCaixa - valorSaque;

    // colocar valores de saque e caixa com centavos
    var valorSaqueMin = valorSaque.toFixed(2);
    var saldoCaixaMin = saldoCaixa.toFixed(2);

    // gerar JSON com as informações
    var retorno = {
        "valorSaque": valorSaqueMin,
        "valorCaixa": saldoCaixaMin,
        "quantidadeNotasUsadas": {
            "total": quatNotasTotal,
            "nota2": quatNotas2,
            "nota5": quatNotas5,
            "nota10": quatNotas10,
            "nota20": quatNotas20,
            "nota50": quatNotas50,
            "nota100": quatNotas100
        },
        "quantidadeNotasResta": {
            "total": notaTotal,
            "nota2": nota2,
            "nota5": nota5,
            "nota10": nota10,
            "nota20": nota20,
            "nota50": nota50,
            "nota100": nota100
        }
    }

    // retorna o JSON gerado com as informações
    return (retorno);

}
