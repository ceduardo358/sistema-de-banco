function enviar() {
    alert("Enviando...")
}
class ContaBancaria {
    constructor(nome, tipo, numero) {
        this.nome = nome;
        this.tipo = tipo;
        this.numero = numero;
        this._saldo = 0;
    }
    get saldo() {
        return this._saldo;
    }
    set saldo(valor) {
        this._saldo =valor;
    }
}