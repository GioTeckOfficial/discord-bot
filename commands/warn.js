const ds=require("discord.js");
const msg=new ds.Message();
module.exports = {
    name:"warn",
    dscription:"Warn a member for some reason if provided",
    execute(client,message,args){
        if(!message.guild) return message.reply("Comando disponibile solo se usato in un server!");
        const mongojs=require("mongojs");
        const db=mongojs("gioteckjs-ds");
        const coll=db.collection(`guild_${message.guild.id}`);
        /*const user=message.mentions.users.first();
        switch(args[0]){
            case msg.mentions.users.first():
                if(!message.guild) return message.reply("Non puoi warnare un membro in privata!");
                if(!user) return message.reply("Devi menzionare qualcuno!");
                if(!args[1]){
                    var reason="Non specificato";
                }else{
                    var reason=args[1];
                }
                let coll=db.collection(`guild_${message.guild.id}`);
                coll.findAndModify({
                    query:{type:"member",memberid:`${message.member.id}`},
                    update:{$inc:{warn:1}},
                    new:true
                },(err,docs,lasterr)=>{
                    if(err) return console.log(err);
                   message.reply(message.mentions.users.first().tag+" ha ricevuto un warn per: "+reason);
                   message.mentions.users.first().send("Hai ricevuto un warn da: "+message.author.tag+"\n Per "+reason);
                });
                break;
            case "remove":
                if(message.guild) return message.reply("Non puoi usare questo comando in privata!");
                if(!user) return message.reply("Devi menzionare qualcuno!");
                let coll2=db.collection(`guild_${message.guild.id}`);
                coll2.findAndModify({
                    query:{type:"member",memberid:`${message.member.id}`},
                    update:{$inc:{warn:-1}},
                    new:true
                },(err,docs,lasterr)=>{
                    if(err) return console.log(err);
                });
                break;
            default:
                let embed=new ds.MessageEmbed()
                .setTitle(":x: ERRORE!")
                .setDescription("Non hai menzionato nessuno o hai sbagliato la sintassi")
                .setFooter(client.user.tag);
                message.reply(embed);
                break;
        }*/
        
    }
}