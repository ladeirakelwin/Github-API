class ReposController{
  constructor(){

  }
  static requisicao(url, element){
    let req = new XMLHttpRequest();

    req.open('GET', url);
    req.onload = () => {
      if (req.status === 404) {
        element.innerHTML = "";
      }else if(req.status === 400){
        element.innerHTML = "";
      }else{
        let res = JSON.parse(req.responseText);
        let i = 0;
        while(res.length > i) {
          let repos = new Repos(
            res[i].name,
            res[i].private,
            res[i].language,
            res[i].stargazers_count,
          );

          element.innerHTML += ReposView.reposDiv(repos);
          i++;
        }
      }

    }
    req.send();
    };
  }
