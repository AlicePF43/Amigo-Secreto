let listaAmigos = [];

function adicionarAmigo() {
    console.log("adicionarAmigo chamado"); // Verifica se a função está sendo chamada
    const inputAmigo = document.getElementById("amigo");
    const nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    listaAmigos.push(nomeAmigo);
    console.log("Lista de amigos:", listaAmigos); // Verifica se o nome está sendo adicionado
    atualizarLista();
    inputAmigo.value = "";
}

function atualizarLista() {
    console.log("atualizarLista chamado"); // Verifica se a função está sendo chamada
    const ulListaAmigos = document.getElementById("listaAmigos");
    ulListaAmigos.innerHTML = "";

    listaAmigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        ulListaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    console.log("sortearAmigo chamado"); // Verifica se a função está sendo chamada
    if (listaAmigos.length === 0) {
        alert("A lista de amigos está vazia. Adicione alguns nomes primeiro.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceSorteado];

    const ulResultado = document.getElementById("resultado");
    ulResultado.innerHTML = `<li>O amigo sorteado é: ${amigoSorteado}</li>`;
}

