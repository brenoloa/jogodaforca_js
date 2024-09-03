let palavra_secreta = "ELEFANTE";
let palavra_mostrada = "_ _ _ _ _ _ _ _";
let quantidade_erros = 0;
let max_erros = 6;  // limite pra dar gameover

document.getElementById("palavra").innerHTML = palavra_mostrada;

function TENTAR() {
    let letra = document.getElementById("letra").value.toUpperCase();
    let nova_palavra_mostrada = "";
    let acerto = false;

    for (let i = 0; i < palavra_secreta.length; i++){
        if (palavra_secreta[i] === letra){
            nova_palavra_mostrada += letra + " ";
            acerto = true;
        }
        else {
            nova_palavra_mostrada += palavra_mostrada[i * 2] + " ";
        }
    }

    if (!acerto) {
        quantidade_erros++;
        document.getElementById("quantidade_erro").innerHTML = "ERROS: " + quantidade_erros;
    }

    palavra_mostrada = nova_palavra_mostrada;

    document.getElementById("palavra").innerHTML = palavra_mostrada.trim();

    document.getElementById("letra").value = "";

    check_gameover();

}

function check_gameover() {
    if (quantidade_erros >= max_erros){
        document.getElementById("mensagem").innerHTML = "VOCÊ PERDEU, A PALAVRA ERA: " + palavra_secreta;
        gameover();
    }
    else if (!palavra_mostrada.includes("_")) {
        document.getElementById("mensagem").innerHTML = "VOCÊ GANHOU!!!"
        gameover();
    }
}

function gameover() {
    document.getElementById("letra").disabled = true;
    document.querySelector("button").disabled = true;

}

