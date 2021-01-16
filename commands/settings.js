module.exports = {
    name:"settings",
    description:"settings <args>",
    execute(client,message,args,db){
        const Discord=require("discord.js");
        const noprefix=new Discord.MessageEmbed().setTitle(":x: Errore").setDescription("Non hai messo un prefisso per il bot!");
        let illegal=['"',"'","\\"];
        switch (args[0]) {
            case "prefix":
                if(!args[1]) return message.reply(noprefix);
                let prefix=args[1].toString();
                //if(prefix.contain(illegal)) return message.reply("Non puoi usare il carattere "+prefix);
                let guildid=`guild_${message.guild.id}`;
                const coll=db.collection(guildid);
                coll.update({type:"config"},{$set:{prefix:`${prefix}`}});
                message.reply(new Discord.MessageEmbed().setTitle(":ok:").setDescription("Il nuovo prefisso è: ```"+prefix+"```"));
                break;
            case "voice_generator":
                let novoice=new Discord.MessageEmbed().setTitle(":x: ERRORE")
                .setDescription("Devi specificare un nome per questo modello di generazione delle stanze");
                if(!args[1])return message.reply(novoice);
                if(!message.member.voice.channel){
                    let join=new Discord.MessageEmbed().setTitle(":x: ERRORE")
                    .setDescription("Devi entrare in un canale prima!");
                    message.reply(join);
                }else{
                    let guildid=`guild_${message.guild.id}`;
                    const coll=db.collection(guildid);
                    coll.find({channelID:message.member.voice.channel.id},(err,docs)=>{
                        if (err) return message.reply("C'è stato un errore con il database!");
                        if(docs){
                            coll.insert({voice:args[1],channelID:message.member.voice.channel.id});
                            let ok=new Discord.MessageEmbed().setTitle(":ok:")
                                .setDescription("La stanza con ID: "+message.member.voice.channel.id+" e nome: "+message.member.voice.channel.name+" è stata impostato come canale per la generazione automatica!");
                            message.reply(ok);
                        }else{
                            message.reply("Esiste già una stanza auto-generante con questo nome!");
                        }
                    })
                }
                break;
            default:
                if(args[0]){
                    var desc=args[0]+" non è un argomento valido!";
                }else{
                    var desc="Non hai inserito nessun argomento!";
                }
                const embed=new Discord.MessageEmbed()
                .setTitle(":x: Errore!")
                .setDescription(desc);
                message.reply(embed);
                break;
        }
    }
}