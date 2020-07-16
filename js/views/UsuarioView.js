class UsuarioView{
  constructor(){

  }

  static userDiv(user){

    return `
    <img src="${user._imagem}" class="avatar">
    <ul class="infoList">
      <li class="list login">Usuário: ${user._nome}</li>
      <li class="list numRepos">Repositorios:  ${user._qteRepos}</li>
      <li class="list numGist">Gists: ${user._qteGists}</li>
      <li class="list followers">Seguidores: ${user._seguidores}</li>
      <li class="list following">Seguindo: ${user._pessoasSeguidas}</li>
    </ul>
    `
  }
}
