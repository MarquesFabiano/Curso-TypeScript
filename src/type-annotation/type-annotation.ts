/* eslint-disable */

//TIpos básicos (Aqui ocorre inferência de tipos)
let nome: string = 'fabiano';
let idade: number = 26;
let adulto: boolean = true;
let simbilo: symbol = Symbol('qualquer-symbol');

//Arrays
let arrayOfNumbers: number[] = [1,2,3];
let arrayOfStrings: Array<string> = ['f', 'a','b'];

//Objetos

let pessoa: {nome: string, idade: number, adulto?: boolean} ={
    idade: 26,
    nome: 'Fabiano'
};

console.log(pessoa.nome);

// Funções
//             timapgem parametros    tipagem parametros
function soma(x:number, y: number): number {
    return x + y;
}

const soma2: (x: number, y:number) => number =  (x,y) => x+y;
