import * as fs from 'fs';

const dados = JSON.parse(fs.readFileSync('./faturamento.json', 'utf8'));

const diasUteis = dados.filter((dado: { dia: number; valor: number }) => dado.valor > 0);

const somaFaturamento = diasUteis.reduce((acc: number, dado: { valor: number }) => acc + dado.valor, 0);

const menorFaturamento = Math.min(...diasUteis.map((dado: { valor: number }) => dado.valor));

const maiorFaturamento = Math.max(...diasUteis.map((dado: { valor: number }) => dado.valor));

const mediaMensal = somaFaturamento / diasUteis.length;
const diasAcimaMedia = diasUteis.filter((dado: { valor: number }) => dado.valor > mediaMensal).length;


// Exibindo os resultados
console.log(menorFaturamento.toFixed(2));
console.log(maiorFaturamento.toFixed(2));
console.log(mediaMensal.toFixed(2));