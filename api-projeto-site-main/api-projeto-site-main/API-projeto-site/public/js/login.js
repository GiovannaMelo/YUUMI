function entrar() {
    function aguardar() {
        btn_entrar.disabled = true;
        img_aguarde.style.visibility = 'visible';
        div_erro.style.visibility = 'hidden';
    }

    function finalizar_aguardar(resposta) {
        btn_entrar.disabled = false;
        img_aguarde.style.visibility = 'hidden';
        div_erro.style.visibility = 'visible';
        div_erro.innerHTML = resposta;
    }
    aguardar();
    var formulario = new URLSearchParams(new FormData(form_login));
    fetch("/usuarios/autenticar", {
        method: "POST",
        body: formulario
    }).then(resposta => {

        if (resposta.ok) {

            resposta.json().then(json => {

                sessionStorage.login_usuario_meuapp = json.login;
                sessionStorage.nome_usuario_meuapp = json.nome;
                sessionStorage.id_usuario_meuapp = json.id;
                sessionStorage.sexo_usuario_meuapp = json.sexo;
                sessionStorage.paleta_usuario_meuapp = json.fkPaleta;
                window.location.href = 'publicacoes.html';

                if (json.id == 5) {
                    window.location.href = 'dashboard.html';
                }
            });
        } else {

            console.log('Erro de login!');

            resposta.text().then(texto => {
                console.error(texto);
                finalizar_aguardar(texto);
            });
        }
    });

    return false;
}

function aguardar() {
    btn_entrar.disabled = true;
    img_aguarde.style.visibility = 'visible';
    div_erro.style.visibility = 'hidden';
}

function finalizar_aguardar(resposta) {
    btn_entrar.disabled = false;
    img_aguarde.style.visibility = 'hidden';
    div_erro.style.visibility = 'visible';
    div_erro.innerHTML = resposta;
}