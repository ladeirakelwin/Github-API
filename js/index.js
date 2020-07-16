const $ = document.querySelector.bind(document);
const divUsuario = $(".userInfo");
const divRepos = $(".repos");

$(".reqUser").onsubmit = (event) => {
  event.preventDefault();
  let input =  $(".userInput").value;
  const apiDaUrl = `https://api.github.com/users/${input}`;
  const apiDosRepos = apiDaUrl + `/repos`;

  UsuarioController.requisicao(apiDaUrl,divUsuario);
  ReposController.requisicao(apiDosRepos, divRepos);
}
