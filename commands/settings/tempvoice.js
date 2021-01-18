module.exports={
    execute(message,args,coll){
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
                    coll.find({type:"voice_generation",channelID:message.member.voice.channel.id},(err,docs)=>{
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
    }
}