const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
var db = require('./data.json');
var playlist = require('./playlist.json');
const fs = require('fs');

function savedb(){
    fs.writeFile('./data.json', JSON.stringify(db), err =>{
        console.log(err || "Arquivo Salvo!");
        db = require('./data.json');
    })
}
function saveYT(){
    fs.writeFile('./playlist.json', JSON.stringify(playlist), err =>{
        console.log(err || "Arquivo Salvo!");
        playlist = require('./playlist.json');
    })
}

const commands = {
    teste: (message) =>{
    },
    np: (message) => {
        var args = message.content.split("&");
        if(args.length == 4){
            var project = {
                name: args[1],
                desc: args[2],
                status: args[3],
                createdAt: new Date()
            };
            db.push(project);
            savedb();
            message.channel.send("Projeto Criado :thumbsup:!\nUse !projetos");
        }else{
            message.channel.send("Use '!np &nome &desc &status' para criar um novo projeto :thumbsup:")
        }
    },
    projetos: (message)=>{
        var msg = "Projetos salvos:\n";
        db.forEach((e, i, arr)=>{
            msg +="Projeto " + (i+1) + "\nNome: "
            + e.name + "\nDesc: " + e.desc + "\nStatus: " + e.status +"\n---------------\n";
        });
        message.channel.send(msg);
    },
    nyp: (message) =>{
        //nyp link
    },
    comandos: (message) => {
        var content = "Comandos disponiveis:\n";
        Object.keys(commands).forEach((element, index, array)=>{
            content += " !"+element;
        });
        message.channel.send(content);
    },
    about: (message) => {
        message.channel.send("DEV Bot orgulhosamente desenvolvido por @BrunoSana#1220 :heart_eyes: :heart_eyes:")
    },
    ajuda: (message)=>{
        message.channel.send("Ajuda de cu é rola!");
    }
}


client.on('ready', () =>{
    console.log(`Bot Iniciado`);
    client.user.setActivity('twitch.tv/brunosana', { type: 'WATCHING' });
});

client.on("message", async message => {
    if(!message.author.bot && message.channel.type !="dm"){
        var msg = message.content;
        if (msg[0] == config.prefix){
            msg = msg.substring(1);
            Object.keys(commands).indexOf(msg.split(" ")[0]) > -1 ? commands[msg.split(" ")[0]](message) : message.channel.send("Comando inexistente, !comandos pode te ajudar :)")
        }
    }
});

client.login(config.token);