module.exports = {
    name:"settings",
    description:"settings <args>",
    execute(client,message,args){
        let guildid=`guild_${message.guild.id}`;
        const mongojs=require("mongojs");
        const db=mongojs("gioteckjs-ds");
        const coll=db.collection(guildid);
        const noprefix=new Discord.MessageEmbed().setTitle(":x: Errore").setDescription("Non hai messo un prefisso per il bot!");
        let illegal=['"',"'","\\"];
        switch (args[0]) {
            case "prefix":
                const prefix=require("./settings/prefix");
                prefix.execute(message,args,coll);
                break;
            case "tempchannel":
                const tempchannel=require("./settings/tempvoice");
                tempchannel.execute(message,args,coll);
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