const { MessageEmbed } = require('discord.js');

module.exports = (client, event, id) => {
  
  const Giveaway = client.channels.cache.get(client.config.logs);
  
  const embed = new MessageEmbed()
  .setDescription(`Shard #${id} Disconnected`)
  .setColor('RED')
  .setTimestamp()
  Giveaway.send({embeds: [embed]})
}
