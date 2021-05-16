function calculadora(event) {
    event.preventDefault();

    let valorInformado = document.getElementById("investimento").value;

    // valor no formato de moeda BR
    let valorFormatado = valorInformado.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });

    // RN4 - 30 pessoas visualizam o anúncio original (não compartilhado) a cada R$ 1,00 investido.
    let numeroPessoasVisualizam = parseInt(valorInformado) * 30;

    // RN1 - a cada 100 pessoas que visualizam o anúncio 12 clicam nele.
    let numeroPessoasClicam = parseInt(numeroPessoasVisualizam / 100) * 12;

    // RN2 - a cada 20 pessoas que clicam no anúncio 3 compartilham nas redes sociais.
    let numeroPessoasCompartilham = parseInt(numeroPessoasClicam / 20) * 3;

    // RN5 - o mesmo anúncio é compartilhado no máximo 4 vezes em sequência
    if (numeroPessoasCompartilham > 4) {
        numeroPessoasCompartilham = 4;
    }

    // RN3 - cada compartilhamento nas redes sociais gera 40 novas visualizações.
    let numeroNovasVisualizacoes = numeroPessoasCompartilham * 40;

    let dataInicial = document.getElementById("data-inicio").value;
    let dataFinal = document.getElementById("data-fim").value;
    let totalDias = calcularData(dataInicial, dataFinal);

    //Tratamento se caso o investimento for apenas de um dia
    if(totalDias === 0){
        totalDias = 1
    }
    //Tratamento de erro para campos vazios

    if (valorInformado === "") {
        alert("Digite o valor do Investimento");
    } else if (dataInicial === "") {
        alert("Digite a data de início do anúncio");
    } else if (dataFinal === "") {
        alert("Digite a data de término do anúncio");
    } else {
        document.getElementById("relatorio").innerHTML += `
      <h4>Relatório:</h4>
      <ul class="relatorio">
        <li><strong>Total Investido:</strong> ${
            (totalDias * valorFormatado).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
            })
        }</li>
        <li><strong>Total de Visualizações:</strong> ${
            numeroPessoasVisualizam * totalDias
        }</li>
        <li><strong>Total de Cliques:</strong> ${
            numeroPessoasClicam * totalDias
        }</li>
        <li><strong>Total de Compartilhamentos:</strong> ${
            numeroPessoasCompartilham * totalDias
        }</li>
      </ul>
      `;
    }
}

function calcularData(dataInicial, dataFinal) {
    /*gera um objeto do tipo Date com valor do input*/
    let date1 = new Date(dataInicial);
    let date2 = new Date(dataFinal);

    /*Subtrai a segunda data em milisegundos pela primeira e usa função abs para retornar o valor absoluto*/
    let timeDiff = Math.abs(date2.getTime() - date1.getTime());

    /*agora ele divide o valor da diferença das datas em milisegundos pela quantidade de milisegundos em um dia e usa ceil para 
      retorna o menor número inteiro*/
    let totalDias = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return totalDias;
    0;
}
