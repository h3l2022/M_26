class Pessoa {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

dizOla(): string {
    return `${this.nome} Olá Lucas`
}

}

class ContaBancaria {
    protected saldo: number = 0;
    numeroConta: number;

    constructor(numeroConta: number) {
        this.numeroConta = numeroConta;
    }

    getSaldo() {
        return this.saldo;
    }

    depositar(valor: number) {
        this.saldo += valor;
    }
}

class ContaBancariaConjunta  extends ContaBancaria {
    depositar(valor: number): void {
        this.saldo = valor * 2;
    }
}

