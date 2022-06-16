// Alteração que houve em 2015 das definições de variáveis

// Antes definíamos como var [nome] = ["valor"]

var nome = "Nathan"; 
//Basicamente ao definir o var, acontece um processo chamado de HOISTING 
// Ou seja ela é enviada para o escopo geral do java script
// Isso significa que temos acesso a essa variável em qualquer área do sistema


if(nome == "Nathan") {
    var idade = 20;
}

console.log (window.nome);



let sobrenome = "Vieira";
//Ela fica disponível apenas em uma área específica do código js { }
//Se tentar acessar em outro local não vai funcionar 

if(sobrenome == "Vieira") {
    let idade = 30;
    console.log (idade); //Agora dentro da caixa de código {} ele funciona
}

//Se eu usar a variável let fora da caixa de código {} ela passa a não existir


const pessoa = {cabelo: 'Preto', olhos:'Castanhos'};

pessoa = {pele:'Escura'};

console.log(pessoa);

//Uma constante eu não posso modificar o valor dela, e sim trocar os valores dentro array {}