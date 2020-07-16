class UsuarioController{
  constructor(){

  }
  static requisicao(url, element){
    let req = new XMLHttpRequest();

    req.open('GET', url);
    req.onload = () => {
      if (req.status === 404) {
          alert("Invalid User!");
          $(".userInput").value = "";
          element.innerHTML = "";
          element.style.borderBottom = "0px";

      }else if(req.status === 400){
        alert("Too many wrong requests, server blocked. Try later.");
        $(".userInput").value = "";
        element.innerHTML = "";
        element.style.borderBottom = "0px";
      }else{
        let res = JSON.parse(req.responseText);

        let usuario = new Usuario(
          res.login,
          res.avatar_url,
          res.public_repos,
          res.public_gists,
          res.followers,
          res.following,
        );

        element.innerHTML = UsuarioView.userDiv(usuario);
        element.style.borderBottom = "1px solid #000";
      }

    }
    req.send();
    };
  }
