module.exports={
    name:"ping",
    description:"Return the ping between the bot and Discord",
    execute(client,message,args){
        const ds=require("discord.js");
        const embed = new ds.MessageEmbed()
            .setTitle(":ping_pong: Pong!")
            .setDescription('```'+client.ws.ping+' ms```')
            .setFooter("GioTeck.js",client.user.avatarURL());
            
            message.reply(embed);
    }
}