var login_usuario;
var nome_usuario;
var usuario;
var paleta_usuario;
var paleta;
var sexo_usuario;
var img_mulher = 'img/perfil.jpg';
var img_homem = 'img/perfil2.jpg';
var img;
verificar_autenticacao();

function redirecionar_login() {
    window.location.href = 'login.html';
}

function verificar_autenticacao() {
    login_usuario = sessionStorage.login_usuario_meuapp;
    nome_usuario = sessionStorage.nome_usuario_meuapp;
    paleta_usuario = sessionStorage.paleta_usuario_meuapp;
    sexo_usuario = sessionStorage.sexo_usuario_meuapp;
    if (login_usuario == undefined) {
        redirecionar_login();
    } else {
        b_usuario.innerHTML = nome_usuario;

        if (paleta_usuario == 1) {
            paleta = 'Verão';
        } else if (paleta_usuario == 2) {
            paleta = 'Primavera';
        } else if (paleta_usuario == 3) {
            paleta = 'Outono';
        } else if (paleta_usuario == 4) {
            paleta = 'Inverno';
        }
        if (sexo_usuario == 1) {
            img = img_mulher;
            div_img.innerHTML += `<img src="${img}" style="width:100px;" class="profile-image">`;
        } else if (sexo_usuario == 2) {
            img = img_homem;
            div_img.innerHTML += `<img src="${img}" style="width:100px;" class="profile-image">`;
        }
        span_paleta.innerHTML = `${paleta}`;

        validar_sessao();
    }

}

function logoff() {
    finalizar_sessao();
    sessionStorage.clear();
    redirecionar_login();
}

function validar_sessao() {
    fetch(`/usuarios/sessao/${login_usuario}`, { cache: 'no-store' })
        .then(resposta => {
            if (resposta.ok) {
                resposta.text().then(texto => {
                    console.log('Sessão :) ', texto);
                });
            } else {
                console.error('Sessão :.( ');
                logoff();
            }
        });
}

function finalizar_sessao() {
    fetch(`/usuarios/sair/${login_usuario}`, { cache: 'no-store' });
}