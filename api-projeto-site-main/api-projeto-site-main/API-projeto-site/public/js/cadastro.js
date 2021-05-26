var Form1 = document.getElementById("form1");
var Form2 = document.getElementById("form2");
var Form3 = document.getElementById("form3");

var next1 = document.getElementById("next1");
var next2 = document.getElementById("next2");
var back1 = document.getElementById("back1");
var back2 = document.getElementById("back2");

var progress = document.getElementById("progress");

next1.onclick = function() {
    form1.style.display = "none";
    form2.style.display = "block";
    progress.style.width = "280px";
}

back1.onclick = function() {
    form1.style.display = "block";
    form2.style.display = "none";
    progress.style.width = "140px";
}

next2.onclick = function() {
    form2.style.display = "none";
    form3.style.display = "block";
    progress.style.width = "400px";
}

back2.onclick = function() {
    form2.style.display = "block";
    form3.style.display = "none";
    progress.style.width = "280px";
}

function cadastrar() {
    aguardar();
    var formulario = new URLSearchParams(new FormData(form_cadastro));
    fetch("/usuarios/cadastrar", {
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
            finalizar_aguardar();
        }
    });

    return false;
}

function aguardar() {
    btn_entrar.disabled = true;
    img_aguarde.style.display = 'block';
    div_erro.style.display = 'none';
}

function finalizar_aguardar() {
    btn_entrar.disabled = false;
    img_aguarde.style.display = 'none';
    div_erro.style.display = 'block';
}