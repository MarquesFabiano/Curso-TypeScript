// void é quando não há um dado de retorn

function semRetorno(...args: string[]): void {
    console.log(args.join(' '));
}

semRetorno('Fabiano', 'Marques');

const pessoa = {
    nome: 'Fabiano',
    sobrenome: 'Marques',

    exibirNome(): void {
        console.log(this.nome + ' ' + this.sobrenome);
    }
}
pessoa.exibirNome();


export { pessoa }; //para usar o escopo global
