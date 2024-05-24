let adicionais = 0
let entrega = 0
let lanche = 0

function totalPagar() {
    let total = 0
    calcularAdicionais()
    calcularLanche()
    calcularEntrega()
    total = lanche + adicionais + entrega
    inserirTotal(total)
}

function calcularAdicionais() {
    adicionais = 0
    let selecionados
    selecionados = document.querySelectorAll("input[name='adicionais']")
    let qtd = selecionados.length
    for (i = 0; i < qtd; i++) {
        if (selecionados[i].checked) {
            adicionais += Number(selecionados[i].value)
            //adicionais = adicionais + Number([selecionados])
        }
    }
}

function calcularLanche() {
    const lancheSelecionado = document.getElementById("combos")
    lanche = Number(lancheSelecionado.value)
}

function calcularEntrega() {
    const viagemEntrega = document.getElementById("viagem")
    if (viagemEntrega.checked) {
        entrega = 5.55
    } else {
        entrega = 0
    }
}

function inserirTotal(total) {
    const inputTotal = document.getElementById("pagamento")
    inputTotal.value = "R$" + total.toFixed(2)
}

function resumoPedido() {
    document.getElementById(
        "resumopedido"
    ).value = `O total é ${total}, adicionais: ${adicionais}, entrega: ${entrega}`
}
