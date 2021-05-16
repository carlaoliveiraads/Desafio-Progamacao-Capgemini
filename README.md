# Desafio-Progamacao-Capgemini
Projeto de Desenvolvido para o Desafio de Programação da Academia Capgemini 
Desafio de Programação –  Academia Capgemini


## O problema

 
A agência Divulga Tudo precisa de um programa para gerenciar os seus anúncios online. O objetivo dos anúncios faz parte de uma campanha nas redes sociais. O sistema de gerenciamento permitirá a gestão do anúncio e o rastreio dos resultados da campanha.
 
Este programa será composto de duas partes:
 
1ª Parte – Uma calculadora de alcance de anúncio online.

2ª Parte - Um sistema de cadastro de anúncios.

---
 
1ª Parte: [Clique Aqui](https://github.com/carlaoliveiraads/Desafio-Progamacao-Capgemini/blob/master/Parte%2001/calculadora.js)

Baseados em dados de análise de anúncios anteriores, a agência tem os seguintes dados:

1.	a cada 100 pessoas que visualizam o anúncio 12 clicam nele.
2.  a cada 20 pessoas que clicam no anúncio 3 compartilham nas redes sociais.
3.  cada compartilhamento nas redes sociais gera 40 novas visualizações.
4.	30 pessoas visualizam o anúncio original (não compartilhado) a cada R$ 1,00 investido.
5.  o mesmo anúncio é compartilhado no máximo 4 vezes em sequência
(1ª pessoa -> compartilha -> 2ª pessoa -> compartilha - > 3ª pessoa -> compartilha -> 4ª pessoa)


A partir destes dados foram levantados os requisitos de negócio da empresa de anúncios, onde:

- Requisito Nº 1 (RN1):  a cada 100 pessoas que visualizam o anúncio 12 clicam nele.

- Requisito Nº 2 (RN2):  a cada 20 pessoas que clicam no anúncio 3 compartilham nas redes sociais.

- Requisito Nº 3 (RN3): cada compartilhamento nas redes sociais gera 40 novas visualizações.


-	Requisito Nº 4 (RN4):  30 pessoas visualizam o anúncio original (não compartilhado) a cada R$ 1,00 investido.


-	Requisito Nº 5 (RN5):  o mesmo anúncio é compartilhado no máximo 4 vezes em sequência (1ª pessoa -> compartilha -> 2ª pessoa -> compartilha - > 3ª pessoa -> compartilha -> 4ª pessoa)


Então na primeira parte foi criado um script construído com a linguagem javascript que recebeu o nome de calculadora.js. 

Essa calculadora recebe o valor investido em reais ( o valor só poderá ser um valor inteiro). 

E partir da análise dos requisitos essa calculadora retornará a projeção aproximada da quantidade máxima de pessoas que visualizarão o mesmo anúncio.   (considerando o anúncio original + os compartilhamentos)
 

1-	Foi criada uma variável chamada calculadora que receberá a função que será declarada logo em seguida;
2-	A função calculadora receberá o valor informado, o qual será transformado em uma variável chamada valor formatado, para que o número inserido retorne no formato desejado.
 

3-	Ainda dentro da função calculadora foram declaradas as seguintes variáveis :

- Número de pessoas que visualizam que receberá o valor informado * 30;
 - Número de pessoas que clicam  que receberá o valos das pessoas que visualizam /100 * 12;
-Numero das pessoas que compartilham que receberá o  número das pessoas que clicam / 20 * 3;
E terá uma condição que limita o número de compartilhamento a 4.

A partir destas variáveis  é gerada uma nova variável que  corresponde ao número de novas visualizações a qual receberá  o número de pessoas que compartilham  * 40; 


Parte 02 

Foi construída a parte visual da página utilizando da linguagem HTML5 e CSS3. 

( colocar aqui o link da página)

Na página construída existe um cabeçalho com informações sobre a Academia Capgemini e sobre este desafio de programação.

Abaixo encontra-se sua parte principal onde o usuário irar cadastrar as seguintes informações: 

Nome do Anúncio:
Nome do Cliente: ( que poderá ser pessoa física ou jurídica)
Data de início do anúncio: 
Data de Termino do Anúncio:
Investimento diário: (onde deverá ser um valor inteiro)

Ao clicar no botão calcular o anúncio os dados que foram manipulados por meio do DOM serão retornados em forma de relatório que irá exibir os dados abaixo:

- Total investido:
- Total de visualizações:
 - Total de cliques:
 - Total de compartilhamentos: 

Os dados de retornos serão obtidos por meio do script da página , construído conforme orientações da parte 01 deste desafio.

 Em seguida serão encontradas informações sobre a autora do desafio e suas redes sociais. 
