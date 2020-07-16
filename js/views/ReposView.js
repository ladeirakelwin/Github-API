class ReposView{
  constructor(){

  }

  static reposDiv(repo){

    return `
    <div class="reposItem">
      <img src="assets/img/reposImg.png" class="avatar reposImg">
      <ul class="infoListRepos" >
        <li class="list ">Nome do Repositório: ${repo._nomeRepos}</li>
        <li class="list ">Privado:  ${repo._privado}</li>
        <li class="list ">Linguagem Principal: ${repo._linguagenPrincipal}</li>
        <li class="list ">Quantidade de Estrelas: ${repo._qteEstrelas}</li>
      </ul>
    <div>
    `
  }
}
