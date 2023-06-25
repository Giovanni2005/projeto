//1.Campos  nome,  Data  de  Nascimento,  Sexo,  Nome  Materno,  CPF,  Telefone  Celular,  Telefone  Fixo, Endereço Completo, Login e Senha devem ser preenchidos.
//2 –O campo nome deve ter no mínimo 15 caracteres e no máximo 60 caracteres alfabéticos.
//3 –Oscampos Telefone Celular e Telefone Fixo devem ter os seguintes formatos (+55)XX-XXXXXXXX.
//4 –O campo Login deve ter exatamente 6 caracteres alfabéticos.
//5 –O campo Senha deve ter 8 caracteres alfabéticos.
//6 –Os campos Senha e Confirma Senha devem ser iguais.

let menu = document.querySelector('@menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
   menu.classList.toggle('bx-x')
   navbar.classList.toggle('active')
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}



