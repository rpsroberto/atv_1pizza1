function fazerPedido() {
    // Capturando o nome do cliente
    const nomeCliente = document.querySelector(".input-text input").value.trim();
    
    // Verificando se o nome foi preenchido
    if (!nomeCliente) {
        alert("Por favor, preencha o nome antes de fazer o pedido.");
        return;
    }

    // Capturando o tamanho escolhido
    const tamanhoSelecionado = document.querySelector("input[name='tamanho']:checked");
    if (!tamanhoSelecionado) {
        alert("Por favor, selecione o tamanho da pizza.");
        return;
    }

    let precoPizza;
    switch (tamanhoSelecionado.value) {
        case "Pequena":
            precoPizza = 25;
            break;
        case "Média":
            precoPizza = 35;
            break;
        case "Grande":
            precoPizza = 50;
            break;
        default:
            precoPizza = 0;
    }

    // Capturando os adicionais selecionados
    const adicionaisSelecionados = document.querySelectorAll("input[name='adicionais']:checked");
    const custoAdicionais = adicionaisSelecionados.length * 5;

    // Calculando o valor total
    const valorTotal = precoPizza + custoAdicionais;

    // Atualizando o valor total no HTML
    const valorTotalElemento = document.querySelector("#total h2 strong");
    valorTotalElemento.textContent = valorTotal.toFixed(2);

    // Exibindo mensagem de sucesso
    alert(`Pedido realizado com sucesso!\n\nCliente: ${nomeCliente}\nTotal: R$ ${valorTotal.toFixed(2)}`);
}
