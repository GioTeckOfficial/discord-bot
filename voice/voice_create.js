module.exports={
    execute(old,update,coll){
        coll.find({
            type:"tempChannel",
            channelID:`${update.channelID}`
        },(err,docs)=>{
            if(err) return console.error(err);
            if(docs==null || docs==[]){
                coll.find({type:"voice_generation",channelID:`${update.channelID}`},(err,docs)=>{
                    if(err) return console.error(err);
                    if(!docs) return;
                    if(docs)return update.channel.clone({name:`${update.member.user.username}'s channel`,parent:`${update.channel.parentID}`,type:"voice",userLimit:99});
                });
            }else{
            if(update.channel){
                update.channel.delete("Non c'è nessuno nella stanza temporanea!");
                coll.remove({
                    type:"tempChannel",
                    channelID:`${update.channelID}`
                },(err)=>{
                    if(err) return console.log(err);
                });
            }
        }
        });
    }
}