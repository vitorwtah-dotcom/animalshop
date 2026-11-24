

const logout = document.getElementById("logout")
logout.addEventListener("click", async () => {
    await fetch("/api/logout", {method: "POST"})
    window.location.href = "/login.html"
})

const grafico = document.getElementById("grafico")
function carregarGraficos() {
    grafico.src = "/api/graficos"
}
carregarGraficos();

const botao = document.getElementById("gerarPdf")
botao.addEventListener("click", async () => {
    try {
        const resposta = await fetch("/api/pdf")
        if (resposta.status === 401) {
            window.location.href = "/login.html"
        }
        if (!resposta.ok) {
            const erro = await resposta.json();
            throw new Error(erro.erro)
        }
        const arquivo = await resposta.blob()
        const url = URL.createObjectURL(arquivo)
        const link = document.createElement("a");
        link.href = url;
        link.download = "relatorio-petshop.pdf";
        document.body.appendChild(link)
        link.click()
        link.remove()
        setTimeout(() => URL.revokeObjectURL(url), 1000)
    } catch(erro) {
        console.log(erro)
    }
})