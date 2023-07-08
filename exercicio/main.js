document.addEventListener('DOMContentLoaded', function(){
    const perfil = document.querySelector('#perfil');    
    const nome = document.querySelector('#name');
    const username = document.querySelector('#username');
    const repo = document.querySelector('#repo');
    const seguidores = document.querySelector('#seguidores');
    const seguindo = document.querySelector('#seguindo');
    const link = document.querySelector('#link');

    fetch('https://api.github.com/users/DevTroli')
    .then(function (requisicao){
        return requisicao.json();
    })
    .then(function (json){
        nome.innerHTML = json.name;
        perfil.src = json.avatar_url;
        username.innerHTML = json.login;
        repo.innerHTML = json.public_repos;
        seguidores.innerHTML = json.followers;
        seguindo.innerHTML = json.following;
        link.href = json.html_url;
    })
})