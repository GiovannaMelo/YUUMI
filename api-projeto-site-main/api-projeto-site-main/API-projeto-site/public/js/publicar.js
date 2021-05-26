function publicar() {
    console.log("entrei!")
    aguardar();
    var formulario = new URLSearchParams(new FormData(form_publicar));
    var idUsuario = sessionStorage.id_usuario_meuapp;
    fetch(`/publicacoes/publicar/${idUsuario}`, {
        method: "POST",
        body: formulario
    }).then(resposta => {

        if (resposta.ok) {
            obterPublicacoes();

            finalizarAguardar();
        } else {
            console.log('Erro ao publicar!');
            resposta.text().then(texto => {
                console.error(texto);
                finalizarAguardar(texto);
            });
        }
    });

    return false;
}

function atualizarFeed(publicacoes) {
    var feed = document.getElementById("feed_container");
    feed.innerHTML = "";
    for (let i = 0; i < publicacoes.length; i++) {
        var publicacao = publicacoes[i];

        var divPublicacao = document.createElement("div")
        var divNome = document.createElement("div")
        var divDescricao = document.createElement("div")

        divNome.innerHTML = `${publicacao.nome}:`;
        divDescricao.innerHTML = publicacao.descricao;

        divPublicacao.className = "publicacao"
        divNome.className = "nome";
        divDescricao.className = "descricao";

        divPublicacao.appendChild(divNome);
        divPublicacao.appendChild(divDescricao);

        feed.appendChild(divPublicacao);
    }
}

function obterPublicacoes() {
    aguardar();
    fetch("/publicacoes")
        .then(resposta => {
            if (resposta.ok) {
                resposta.json().then(function(resposta) {
                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                    atualizarFeed(resposta);

                    finalizarAguardar();
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
                finalizarAguardar("Nenhum resultado encontrado ou erro na API");
            }
        })
        .catch(function(error) {
            console.error(`Erro na obtenção das publicações: ${error.message}`);
        });
}

function obterPublicacoesPorUsuario(idUsuario) {
    fetch(`/publicacoes/${idUsuario}`)
        .then(resposta => {
            if (resposta.ok) {
                resposta.json().then(function(resposta) {
                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                    // alert(JSON.stringify(resposta))
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        .catch(function(error) {
            console.error(`Erro na obtenção das publicações do usuário: ${error.message}`);
        });
}

function aguardar() {
    btn_publicar.disabled = true;
    img_aguarde.style.visibility = 'visible';
    div_erro.style.visibility = 'hidden';
}

function finalizarAguardar(resposta) {
    btn_publicar.disabled = false;
    img_aguarde.style.visibility = 'hidden';
    if (resposta) {
        div_erro.style.visibility = 'visible';
        div_erro.innerHTML = resposta;
    }
}