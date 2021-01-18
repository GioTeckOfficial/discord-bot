const fs = require('fs');
const Discord = require('discord.js');
const mongojs=require("mongojs");
const db=mongojs("gioteckjs-ds");
const config = require('./config.json');
const { exit } = require('process');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

console.log("Started...");

db.on('connect',()=>{
    console.log("MongoJS ready!");
});
db.on('error',(err)=>{
    console.log("MongoJS error: ",err);
});
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}
client.on('ready', async () => {
    console.log(`${client.user.tag} is ready!`);
    setTimeout(()=>{
        console.log(`Ping: ${client.ws.ping} ms\t Status:${client.ws.status}`);
        client.user.setPresence({ activity: { name: 'Creating Open Source Projects' , type:'CUSTOM_STATUS'}, status: 'online' })
            .then()
            .catch(console.error);
    },3000);
});
client.on('guildCreate',guild=>{{
    console.log("Joined this guildID: "+guild.id);
    const createguild=require("./db_manager/guild_create");
    createguild.execute(client,guild);
}});
client.on('guildDelete',guild=>{
    console.log("Deleted this guildID: "+guild.id);
    const collection=`guild_${guild.id}`
    let coll=db.collection(collection);
    coll.remove();
});
client.on('message', async message => {
    var guild=`guild_${message.guild.id}`;
    const coll=db.collection(guild);
    coll.findOne({type:"config"},(err,docs)=>{
        if(err) return console.log(err);
        console.log(docs);
        if(docs===null){
            var prefix="gioteck!";
        }else{
            var prefix=docs.prefix;
        }
        const preload=message.content.replace(prefix,"");
        const args=preload.split(" ");
        const first=args[0];
        args.shift();
        if (!client.commands.has(first)) return;
    
        try {
            client.commands.get(first).execute(client, message, args, db);
        } catch (error) {
            console.error(error);
            const embed=new Discord.MessageEmbed()
            .setTitle("Errore!")
            .setDescription('```'+error+'```');
            message.channel.send(embed);
        }
    });

});
client.on('voiceStateUpdate', async (old,update)=>{
    const voice_generator=require("./voice/index.js");
    //voice_generator.execute(old,update,client);
});
client.login(config.token);