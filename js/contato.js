"use strict";

/* Selecionando os elementos que serão manipulados */
const formulario = document.querySelector("form");
const campoCep = formulario.querySelector("#cep");
const campoEndereco = formulario.querySelector("#endereco");
const campoBairro = formulario.querySelector("#bairro");
const campoCidade = formulario.querySelector("#cidade");
const campoEstado = formulario.querySelector("#estado");
const botaoBuscar = formulario.querySelector("#buscar");
const mensagem = formulario.querySelector("#status");

// seleçao do campo telefone 
const campoTelefone= formulario.querySelector("#telefone")

// const campoTelefone=$("telefone")

//ativando a mascara para a telefone

$(campoTelefone).mask("(00) 00000-0000");

$(campoCep).mask("00000-000");







// Detectando o evento de CLICK no botão buscar
botaoBuscar.addEventListener("click", async function (event) {
    event.preventDefault();

    let cep; // undefined

    /* Verificando se o cep NÃO tem 8 dígitos.
    O operador !== significa "diferente de". */
    if (campoCep.value.length !== 9) {
        // Alerte o usuário sobre o erro de digitação
        mensagem.textContent = "Digite um CEP válido!";
        mensagem.style.color = "purple";


        //para a execuçao
        return;
    } else {
        // Caso contrário (ou seja, tem 8 dígitos), guarde o valor
        cep = campoCep.value;
    }
    const url = `https://viacep.com.br/ws/${cep}/json/`


    //etapa 2 :acessar a api (com a url) e aguadar o retorno delas
    const resposta = await fetch(url);

    //etapa 3 :extrair o dados da resposta em formato JSON
    const dados = await resposta.json();

    ///////////////////////etapa 4//////////////////////:lidar com os dados  de resposta///////////////// (em caso dew erro iu sucesso)//////////////////////
    if ("erro" in dados) {
        mensagem.textContent = "O CEP inexsitente ";
        mensagem.style.color = "red";
    } else {
        mensagem.textContent = "O CEP foi encontrado ";
        mensagem.style.color = "blue";

const exdmplo = document.querySelectorAll(".exemplo");



        campoEndereco.value = dados.logradouro;
        campoBairro.value = dados.bairro;
        campoCidade.value = dados.localidade;
        campoEstado.value = dados.uf;
    }


});