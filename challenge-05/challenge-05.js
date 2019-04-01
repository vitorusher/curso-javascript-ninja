/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [ 'Vítor', 24, 'Hamburguer', 'Diniz', true ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(arg) {
    return arg; 
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log( myFunction (arr)[1] ); // 24

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunction2(a, b) {;
	return a[b];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arr2 = [true, 'Blue', {ninja: true}, ['loja'], function (){}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
myFunction2(arr2, 0); // true
myFunction2(arr2, 1); // 'Blue'
myFunction2(arr2, 2); //{ninja: true}
myFunction2(arr2, 3); // ["loja"]
myFunction2(arr2, 4); // ƒ

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nomeDoLivro) {
	var livros = {
    	'Harry Potter e o Prisioneiro de Azkaban': { 
				quantidadePaginas: 288,
         	    autor: 'J.K Rowling',
       	    	editora: 'Rocco'
           	 },
    	'Harry Potter e a Ordem da Fênix': {
				quantidadePaginas: 640,
        	     autor: 'J.K Rowling',
            	 editora: 'Rocco'
           	 },
    	'Harry Potter e o Enigma do Príncipe': {
				 quantidadePaginas: 432,
        	     autor: 'J.K Rowling',
            	 editora: 'Rocco'
            }
	}

	return !nomeDoLivro ? livros : livros[nomeDoLivro];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log( book() );

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log( 'O livro Harry Potter e a Ordem da Fênix tem '+ book('Harry Potter e a Ordem da Fênix').quantidadePaginas +' páginas!' );

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log( 'O autor do livro Harry Potter e o Enigma do Príncipe é '+ book('Harry Potter e o Enigma do Príncipe').autor +'.' );

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log ( 'O livro Harry Potter e o Prisioneiro de Azkaban foi publicado pela editora '+ book('Harry Potter e o Prisioneiro de Azkaban').editora +'.' );
