const { WebhookClient, MessageEmbed } = require('discord.js');
const moment = require('moment');


module.exports = async (client, guild) => {
  const hook = new WebhookClient({ url: client.config.hook.guild});

  let own = await guild.fetchOwner()
  
  const embed = new MessageEmbed()
    .setThumbnail(guild.iconURL({ dynamic: true, size: 1024}))
    .setTitle(`📥 Joined a Guild !!`)
    .addField('Name', `\`${guild.name}\``)
    .addField('ID', `\`${guild.id}\``)
    .addField('Owner', `\`${guild.members.cache.get(own.id) ? guild.members.cache.get(own.id).user.tag : "Unknown user"}\` ${own.id}\``)
    .addField('Member Count', `\`${guild.memberCount}\` Members`)
    .addField('Creation Date', `\`${moment.utc(guild.createdAt).format('DD/MMM/YYYY')}\``)
    .setColor(client.color)
    .addField(`${client.user.username}'s Server Count`, `\`${client.guilds.cache.size}\` Severs`)
    .setTimestamp()
    hook.send({embeds: [embed]})
	
}
