// Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.

alert("Hello Worl!")

// Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

let numberOne = Number (prompt('Digite o primeiro número'));
let numberTwo =  Number (prompt('Digite o segundo número'));

sum = numberOne + numberTwo

alert(`A soma dos dois números é: ${sum}`)

// Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

let valueIsNumber = 'A'

if (typeof valueIsNumber == 'number') {
  alert('É um número') 
} else {
  alert('Não é um número')
}

// Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".


const valueIsString = "Filipe"

if (typeof valueIsString == 'string') {
  alert('É uma string')
} else {
  alert('Não é uma string')
}

// Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

const isBoolean = 10

if (typeof isBoolean == 'boolean') {
  alert('É um booleano')
} else {
  alert ('Não é um booleano')
}

// Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

let subOne = 10
let subTwo = 6

resultSub = subOne - subTwo

alert(`${resultSub}`)

// Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

let multOne = 4
let multTwo = 3

resultMult = multOne * multTwo

alert(`${resultMult}`)

// Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

let divOne = 20
let divTwo = 3

resultDiv = divOne / divTwo

alert(`${resultDiv}`)

// Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".



let isNumberPar = Number (prompt('Digite um número'))

if (isNumberPar % 2 == 0) {
  alert('É um número par')
} else {
  alert('Não é um núero par')
}

// Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

let isNumberImpar = Number (prompt('Digite um número'))

if (isNumberImpar % 2 == 1) {
  alert('É um número ímpar')
} else {
  alert('Não é um número ímpar')
}