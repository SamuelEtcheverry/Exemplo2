//DECLARAÇÕES E VARIAVEIS
//VAR, LET E CONST

var nome="Fiap";
console.log(nome);
var nome="Dev";
console.log(nome);

if(true){
    var avatar="Fiapinho";

}

console.log(avatar);

let exemplo1="Ola Dev-let";
console.log(exemplo1);

const exemplo2="Olá Dev-const";
console.log(exemplo2);

let exemplo3=20;
console.log(typeof exemplo3);

let exemplo4=true;
console.log(typeof exemplo4)

let exemplo5={nome:"fiap"}
console.log(exemplo5)

let exemplo6=["PHP","JAVA","HTML"]
console.log(exemplo6)

//valor undefined

let exemplo7;
console.log(exemplo7)

//valor null

let exemplo8=null;
console.log(exemplo8)

//OPERADORES ARITMÉTICOS

const valor1=10;
const valor2=20;

console.log(valor1 + valor2);
console.log(valor1 - valor2);
console.log(valor1 / valor2);
console.log(valor1 * valor2);

//OPERADORES LOGICOS

const valor3=40;
const valor4="40";

console.log(valor3 > valor4);
console.log(valor3 < valor4);
console.log(valor3 > valor4 && valor4 < 0);
console.log(valor3 == valor4 || valor4 > 10);

//OPERADORES DE COMPARAÇÃO

console.log(valor3 == valor4); //COMPARA
console.log(valor3 === valor4); //COMPARA E VERIFICA O TIPO

/*
Utilizando as variáveis p (preço do produto) e  v(valor do desconto), crie uma nova variável 
chamada precoFinal que subtraia o desconto do preço e exiba o resultado.		
*/

let p = 500;
let v = 100;
let precoFinal = p-v;
console.log(precoFinal);

//estrutura condicional

//if
if(true){
    console.log("Verdadeiro")
}

let nome1="fiap";
if(nome1=="fiap"){
    console.log("Nome correto")
}
else{
    console.log("Nome errado")
}

//if, if, else encadeado/alinhado

let idade =13;

if (idade <= 13){
    console.log("Uma criança")
}
else if(idade >13 && idade < 18){
    console.log("Um adolescente")
}
else{
    console.log("Um adulto")
}

//switch case

let times="corinthians"

switch(times){
    case "corinthians":
        console.log("Um time de tradição")
        break;
    case "sao paulo":
        console.log("sem tradição")
        break
    case "palmeiras":
        console.log("sem mundial")
        break;
    default: 
        console.log("nenhuma das opções(santos")
}

// condicional ternaria

let numero = 100;
let resultado = numero == 100 ? "Certo":"Errado";
console.log(resultado)

let usuario="fiap"
let usuariologado = usuario == "fiap" ? "Logado com sucesso":"Usuario invalido";
console.log(usuariologado)