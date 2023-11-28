import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

// const novoUser = new User ('Allisson', 'a@a.com', '2021-01-01')
// console.log(novoUser.exibirInfos());

const novoAdmin = new Admin ('CR7', 'c@c.com', '2021-01-01')
console.log(novoAdmin.nome);
novoAdmin.nome = ''
console.log(novoAdmin.nome);
console.log(novoAdmin.exibirInfos());
