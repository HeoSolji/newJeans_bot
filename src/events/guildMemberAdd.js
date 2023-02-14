// const moment = require("moment");
const { EmbedBuilder } = require("discord.js");
require("dotenv").config();

module.exports = (client, member) => {
  const WelcomeEmbed = new EmbedBuilder()
    .setTitle(member.guild.name)
    .setDescription(
      `Chào mừng <@${member.user.id}> đã đến với **${member.guild.name}**\'s Discord Server! nhaaaaaaaaaa\nHãy đọc kỹ luật của server trước khi hoạt động nhé, mong bạn có một khoảng thời gian thú vị ở đây\nSố lượng thỏ của server: **${member.guild.memberCount}**`
    )
    .setFooter({
      text: `${member.user.username}#${member.user.discriminator}`,
      iconURL: member.user.displayAvatarURL({ dynamic: true, size: 512 }),
    })
    .setColor(0xc27c0e)
    .setImage(`https://media.giphy.com/media/EOpZ7XsVfTN2E/giphy-downsized-large.gif`)
    .setTimestamp();

  member.guild.channels.cache
    .get(process.env.WELCOME_ID)
    // .send(`Welcome, <@${member.user.id}>`, {WelcomeEmbed});
    .send({ content: `Welcome, <@${member.user.id}>`,embeds: [WelcomeEmbed] });

  member.roles.add(member.guild.roles.cache.get(process.env.MEMBER_ROLE_ID));
};
