## DEV Bot Discord

> BOT multifuncional desenvolvido em node e de código aberto.

Pode ser útil pra você usar a [documentação oficial](https://discord.js.org/#/) da biblioteca [Discord.js](http://www.npmjs.com/package/discord.js)

----
# Tutorial

----
## Criando o Bot

Va até a [página de desenvolvimento do discord](https://discordapp.com/developers/applications) e crie uma aplicação em "New Application". Dê um nome e depois de criada, na página da aplicação, na aba bot, clique em Add Bot.

Ok, o bot já está criado, você pode editar as permissões dele e logo abaixo um número será gerado (referente às permissões :)

Para adicionar o bot em um servidor, use o link:

    https://discordapp.com/oauth2/authorize?=&client_id=####&scope=bot&permissions=####

Substitua as #### do client_id pelo ID da aplicação (Página da Aplicação -> General Information -> client id). As #### do permissions você substitui pelo número gerado lá no passo de edição de permissões (se for pra estudo, deixe as permissões em 8, tornando o BOT admin e podendo ter acesso a todo o servidor).

Com o bot no servidor, podemos ir para a parte do código :P

----
## Programando o Bot

Antes de mais nada, obviamente você vai criar uma pasta pro seu projeto xD e dentro dela, crie um arquivo "config.json" com a seguinte estrutura:

    {
        "prefix": "!",
        "token": ""
    }

A propriedade **prefix** irá ser o prefixo usado para os comandos, como padrão, usei a exclamação **!**. Ex. !comando1 !comando2

A propriedade **token** irá ser a nossa chave de identificação do bot, para podermos ter acesso a ele. Para pegar o seu token vá até a aba BOT da página da sua aplicação e copie a chave com o botão :)

Ok, com o arquivo config.json devidamente inserido, podemos continuar.

#### Pré requisitos

É claro que você pode pular as etapas, baixar o repositório e iniciar usando

    npm init

junto ao seu arquivo config.json para usar à sua vontade.

----

Durante o desenvolvimento, além do NODE, usei as bibliotecas

* [Discord.js](http://www.npmjs.com/package/discord.js)
* [fs (FileSystem)](https://www.npmjs.com/package/fs)

Se você for iniciante, pode usar os comandos

    npm i discord.js --save
    npm i fs --save

para instalar as bibliotecas na pasta do seu projeto e poder usá-las :)