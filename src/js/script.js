let nome = prompt("Digite seu nome: ");
let nome_vinho = prompt("Insira o nome do vinho: ");
let tipo_vinho = prompt("Insira o tipo do vinho: ");
let safra_vinho = prompt("Insira o ano da safra do vinho: ");
let qtde_vinho = parseInt(prompt("Digite a quantidade em estoque: "));

alert("Cadastro realizado! Veja os detalhes no console.");
console.log(`Vinho cadastrado por ${nome}.`);
console.log(`Vinho: ${nome_vinho}.
Tipo: ${tipo_vinho}.
Ano: ${safra_vinho}.
Quantidade em estoque: ${qtde_vinho}.`);
