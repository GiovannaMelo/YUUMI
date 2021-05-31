// Chamando formularios e botões
var Form1 = document.getElementById("form1");
var Form2 = document.getElementById("form2");
var Form3 = document.getElementById("form3");

var next1 = document.getElementById("next1");
var next2 = document.getElementById("next2");
var back1 = document.getElementById("back1");
var back2 = document.getElementById("back2");

// Chamando as váriaveis do fórmulario
var nome = document.getElementById('nome');
var sobrenome = document.getElementById('sobrenome');
var email = document.getElementById('email');
var login = document.getElementById('login');
var senha = document.getElementById('senha');

// chamando variaveis etapa 2

var coloracao = document.getElementById('coloracao');
var comportamentoPele = document.getElementById('comportamentoPele');
var cabelo = document.getElementById('cabelo');
var olhos = document.getElementById('olhos');


function cadastrar() {
    var idPaleta = 0;

    if (coloracao.value == 1 || comportamentoPele.value == 2) {
        if (cabelo.value == 1) {
            idPaleta = 3;
        } else if (cabelo.value == 2) {
            idPaleta = 4;
        } else if (cabelo.value == 3) {
            idPaleta = 3;
        } else if (cabelo.value == 4) {
            idPaleta = 3;
        } else if (cabelo.value == 5) {
            idPaleta = 4;
        }
    }
    if (coloracao.value == 2 || comportamentoPele.value == 1) {
        if (cabelo.value == 1) {
            idPaleta = 2;
        } else if (cabelo.value == 2) {
            idPaleta = 1;
        } else if (cabelo.value == 3) {
            idPaleta = 2;
        } else if (cabelo.value == 4) {
            idPaleta = 2;
        } else if (cabelo.value == 5) {
            idPaleta = 1;
        }
    }

    var formulario = new URLSearchParams(new FormData(form_cadastro));
    fetch(`/usuarios/cadastrar/${idPaleta}`, {
        method: "POST",
        body: formulario
    }).then(function(response) {

        if (response.ok) {

            window.location.href = 'login.html';

        } else {

            console.log('Erro de cadastro!');
            response.text().then(function(resposta) {
                div_erro.innerHTML = resposta;
            });
        }
    });

    return false;
}

function proximo() {

    if (nome.value == '' || nome == undefined) {
        nome.value = '';
        nome.placeholder = 'Digite um nome válido';
        setTimeout(() => {
            nome.style.color = 'black';
            nome.placeholder = 'Nome';
        }, 1500);
    }
    if (sobrenome.value == '' || sobrenome == undefined) {
        sobrenome.value = '';
        sobrenome.placeholder = 'Digite um sobrenome válido';
        setTimeout(() => {
            sobrenome.style.color = 'black';
            sobrenome.placeholder = 'Sobrenome';
        }, 1500);
    }
    if (!email.value.match(/^[^\s@]+@[^\s@]+$/) || email.value == '') {
        email.value = '';
        email.placeholder = 'Digite um e-mail válido';
        setTimeout(() => {
            email.parentElement.classList.remove('wrong-input');
            email.style.color = 'black';
            email.placeholder = 'E-mail';
        }, 1500);
    }
    if (login.value == '' || login == undefined) {
        login.value = '';
        login.placeholder = 'Digite um login válido';
        setTimeout(() => {
            login.style.color = 'black';
            login.placeholder = 'Login';
        }, 1500);
    }
    if (senha.length < 8 || senha.value == '' || senha == undefined) {
        senha.value = '';
        senha.placeholder = 'A senha deve conter no minímo 8 digitos!';
        setTimeout(() => {
            senha.style.color = 'black';
            senha.placeholder = 'Senha';
        }, 1500);
    } else {
        form1.style.display = "none";
        form2.style.display = "block";
        progress.style.width = "300px";
    }

}

function anterior() {
    form1.style.display = "block";
    form2.style.display = "none";
    progress.style.width = "140px";
}