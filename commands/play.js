module.exports={
    name:"play",
    description:"Play a song by link",
    async execute(client,message,args){
        const ytdl = require('ytdl-core');
        if (!message.guild) return;
        // Only try to join the sender's voice channel if they are in one themselves
        if (message.member.voice.channel) {
            if(args[0]&&args[0].startsWith("https://")){
                const connection = await message.member.voice.channel.join();
                const stream = ytdl(args[0], { filter: 'audioonly' });
                const dispatcher = connection.play(stream);
                dispatcher.on('finish', () => message.member.voice.channel.leave());
            }else{
                message.reply(`@${message.author.tag} Manca il link o non è valido!`);
            }
        } else {
          message.reply('You need to join a voice channel first!');
        }
    }
}