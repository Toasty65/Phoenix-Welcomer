module.exports = async (client, member) => {
  if(member.user.bot) return
  const channel = await member.guild.channels.fetch(process.env.NOTIFICATIONCHANNEL)
  const embedCreator = require('../../util/embedCreator')
  channel.send({ embeds: [embedCreator.createWelcomeEmbed(member)] })
};