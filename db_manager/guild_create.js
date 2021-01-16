module.exports={
    name:"guild_create",
    description:"Generate a collection for the new guild",
    async execute(client,guild){
        const mongojs=require("mongojs");
        const db=mongojs("gioteckjs-ds");
        const coll=db.collection(`guild_${guild.id}`);
        const members= await guild.members.fetch();
        const num=members.array().length;
        console.log("MEMBERS: " + num);
        coll.insertOne({
            type:"info",
            guildID:`${guild.id}`,
            guildName:`${guild.name}`,
            joinedAt:`${guild.joinedAt}`,
            owner:`${guild.ownerID}`,
            isVerified:`${guild.verified}`,
            /*members:`${members}`*/
        },(err)=>{
            if(err) return console.error(err);
        });
        coll.insertOne({
            type:"config",
            prefix:"gioteck!",
            isPremium:true
        },err=>{
            if(err) return console.log(err);
        });
    }
}