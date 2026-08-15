//Para listar os usuarios
import { listarUsuarios } from "./contatos.js";

(listarUsuarios());

//Paralitar contatos do usuarios
import { idUser } from "./contatos.js"

(idUser(1));


//listar mensagens dos usuarios
import { ContactMsg, } from "./contatos.js";

(ContactMsg(1, 0));



const elemento = {

}

function criarContatos(srcFoto, nome, hora, ultima, naoLidas, idContato)

const cardContainer = document.createElement("article");
const fotoContato = document.createElement("img");
const nomeContato = document.createElement("p");
const hora_msg_recebida = document.createElement("p");
const msg_recebida = document.createElement("p");
const msg_nao_lidas = document.createElement("p");

cardContainer.className = "container_msg";
fotoContato.className = "foto";
nomeContato.className = "nome";
hora_msg_recebida.className = "nome";
