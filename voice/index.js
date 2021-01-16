module.exports={
    name:"voice_generator",
    execute(old,update,client,db){
        const coll=db.collection(`guild_${update.guild.id}`);
        coll.find({tempchannelID:update.channel.id},async (err,docs)=>{
            if(docs!==[]){
                const voice=await update.guild.channels
                .create(`${update.member.user.username}'s channel`,
                {
                    type:"voice",
                    permissionOverwrites: [
                    {
                        id: update.guild.id,
                        allow: ['VIEW_CHANNEL']
                    }]
                });
                coll.insertOne({tempchannelID:voice.id,tempchannelName:voice.name},(err)=>{
                    if(err) return console.log(err);
                });
                update.setChannel(voice.id);
            }else{
                if(!update.member.voice.channel){
                    update.channel.delete('Nobody is in the room!')
                        .then(console.log)
                        .catch(console.error);
                }
            }
        });


    }
}