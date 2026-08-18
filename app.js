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


//mudar no css
cardContainer.className = "container_msg";
fotoContato.className = "foto";
nomeContato.className = "nome";
hora_msg_recebida.className = "hora_msg_recebida";
msg_recebida.className = "ultimaMsg"
msg_nao_lidas.className = "msg_nao_lidas"

fotoContato.src = `https://i.pravatar.cc/207?img=${idContato + 1}`;
nomeContato.innerText = nome;
hora_msg_recebida.innerText = hora;
msg_recebida.innerText = ultima;
msg_nao_lidas.innerText = naoLidas;


cardContainer.id = idContato;


const listarUsuarios =









    fotoPerfil.addEventListener("click", function () {
        const telaIncial = fotoPerfil.classList.contains("ativo");
        if (telaIncial) {
            Perfil.classList.remove("ativo");
            container.innerHTML = contatos;
        } else {
            Perfil.classList.add("ativo");

            container.innerHTML = 'Abluba'
        }
    });



