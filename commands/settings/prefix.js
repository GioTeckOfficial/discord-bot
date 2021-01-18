module.exports={
    execute(message,args,coll){
        const Discord=require("discord.js");
        if(!args[1]) return message.reply(noprefix);
        let prefix=args[1].toString();
        //if(prefix.contain(illegal)) return message.reply("Non puoi usare il carattere "+prefix);
        coll.update({type:"config"},{$set:{prefix:`${prefix}`}});
        message.reply(new Discord.MessageEmbed().setTitle(":ok:").setDescription("Il nuovo prefisso è: ```"+prefix+"```"));
        break;
    }
}