const usuario = {
    nome: "Pedro",
    idade: 25,
    email: "PPedro@lala.com"
}

// para dar set de um objeto no local storage é necessário passar para string

const usuarioStr = JSON.stringify(usuario);

localStorage.setItem("usuario", usuarioStr);

const usuarioCadastrado = JSON.parse(localStorage.getItem("usuario"));

console.log(usuarioCadastrado.idade)