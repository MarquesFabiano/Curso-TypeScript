// EVITE SEMPRE
function showMessage(msg: any) {
    return msg;
}

console.log(typeof showMessage([12,25,33]));

/* Em TypeScript, o tipo "any" é usado para representar valores de forma flexível, permitindo que variáveis aceitem qualquer tipo de dado. Embora possa ser útil para transições e interoperabilidade com JavaScript, seu uso deve ser evitado sempre que possível. O tipo "any" sacrifica a segurança de tipo estático oferecida pelo TypeScript, levando a erros de tempo de execução e dificultando a detecção de bugs. Em vez disso, é recomendado utilizar tipos mais precisos para aproveitar os benefícios de verificação de tipos durante o desenvolvimento. */
