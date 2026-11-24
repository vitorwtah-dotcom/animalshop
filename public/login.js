const formLogin = document.getElementById("formLogin")
formLogin.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value
    try {
        const resposta = await fetch("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({ email, senha})
        })
        const resultado = await resposta.json();
        if(!resposta.ok) {
            throw new Error(resultado.erro)
        }
        window.location.href = "/dashboard"
    } catch (erro) {
        alert(erro.message)
    }
})

fetch("/api/verificar").then(resposta => {  
    if (resposta.ok) {
        window.location.href= "/dashboard"
    }
}).catch(() => {});