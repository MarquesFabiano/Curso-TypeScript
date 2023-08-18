 const objetoA: { //forma de tipar o objeto
    readonly chaveA: string;
    chaveB: string;
    chaveC?: string; //opcional
    [key: string]: unknown; // quando há chances de precisar extender o objeto
 } = {
    chaveA: 'Valor A',
    chaveB: 'ValorB',
 };
 //Apartir do momento que foi inferido o tipo ts, ele não pode ser mais alterado

 console.log(objetoA);
