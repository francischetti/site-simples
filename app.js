// Introdução à Linguagem JavaScript

'use strict'  // Para usar o JavaScript no "MODO ESTRITO", isso reduz erros e melhora o desempenho



// Adicionando um "MANIPULADOR DE EVENTO" do tipo "CLICK", para o botão que criamos no arquivo HTML:

const switcher = document.querySelector('.btn');  // OBTENDO A REFERÊNCIA DO BOTÃO

switcher.addEventListener('click', function() {   // ADICIONANDO O "OUVINTE" E O "MANIPULADOR DO EVENTO CLICK"
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;

    if (className == "light-theme") {
        this.textContent = "Escuro";
    }
    else {
        this.textContent = "Claro";
    }

    console.log('current class name: ' + className); // PARA VISUALIZAR NO CONSOLE (INSPETOR) DO NAVEGADOR O VALOR DA VARIÁVEL
});







