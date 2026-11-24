const formAtendimento = document.getElementById("formAtendimento")

formAtendimento.addEventListener("submit", async (e) => {
    e.preventDefault();
    const tutor = document.getElementById("tutor").value.trim();
    const pet = document.getElementById("pet").value.trim();
    const especie = document.getElementById("especie").value
    const servico = document.getElementById("servico").value.trim()
    const valor = document.getElementById("valor").value
    const data = document.getElementById("data").value

    const dados = {"tutor": tutor, "pet": pet, "especie": especie, "servico": servico, "valor": Number(valor), "data": data }
    try {
        const resposta = await fetch("/api/atendimento", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(dados)
        })
        const resultado = await resposta.json();
        if (!resposta.ok) {
            throw new Error(resultado.erro)
        }
        alert(resultado.mensagem)
        formAtendimento.reset();
    } catch(erro) {
        console.log(erro)
        alert(erro.message)
    }
    
})