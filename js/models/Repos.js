class Repos{
  constructor(nomeRepos, privado, linguagenPrincipal, qteEstrelas){
    this._nomeRepos = nomeRepos;
    this._privado = (privado)?"sim":"não";
    this._linguagenPrincipal = (linguagenPrincipal != null)?linguagenPrincipal: "Não possui linguagem principal";
    this._qteEstrelas = qteEstrelas;
  }

  static retornaInfo(){
    return {
      nomeRepos: this._nomeRepos,
      privado: this._privado,
      linguagenPrincipal: this._linguagenPrincipal,
      qteEstrelas: this._qteEstrelas,
    }
  }
}
