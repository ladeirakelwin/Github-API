class Usuario{
  constructor(nome, imagem, qteRepos, qteGists, seguidores, pessoasSeguidas){
    this._nome = nome;
    this._imagem = imagem;
    this._qteRepos = qteRepos;
    this._qteGists = qteGists;
    this._seguidores = seguidores;
    this._pessoasSeguidas = pessoasSeguidas;
  }

  retornaInfo(){
    return {
      nome: this._nome,
      imagem: this._imagem,
      qteRepos: this._qteRepos,
      qteGists: this._qteGists,
      seguidores: this._seguidores,
      pessoasSeguidas: this._pessoasSeguidas,
    }
  }
}
