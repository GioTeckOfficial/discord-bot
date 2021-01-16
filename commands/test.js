const { GuildMember } = require("discord.js");
const guild_create = require("../db_manager/guild_create");

module.exports = {
	name: 'test',
	description: 'Test the bot',
	async execute(client, message, args) {
		message.channel.send('Bot OK!');
		let members= await message.guild.members.fetch();
		let nmember=members.array();
		members.each((member,id)=>{message.reply(`ID: ${id}\n Nickname: ${member.user.username}`)});		
	}
};