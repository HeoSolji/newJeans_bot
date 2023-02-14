// const moment = require("moment");
const { EmbedBuilder } = require("discord.js");
require("dotenv").config();

module.exports = (client, member) => {
  const WelcomeEmbed = new EmbedBuilder()
    .setTitle(member.guild.name)
    .setDescription(
      ` <Tạm biệt @${member.user.id}> mong rằng **${member.guild.name}** đã cho bạn một khoảng thời gian vui vẻ\n Sớm trở lại nhé, support cho NewJeans hết mình nào!!!!!!!!**`
    )
    .setFooter({
      text: `${member.user.username}#${member.user.discriminator}`,
      iconURL: member.user.displayAvatarURL({ dynamic: true, size: 512 }),
    })
    .setColor(0xc27c0e)
    .setImage(`https://media.giphy.com/media/26u4b45b8KlgAB7iM/giphy.gif`)
    .setTimestamp();

  member.guild.channels.cache
    .get(process.env.WELCOME_ID)
    // .send(`Welcome, <@${member.user.id}>`, {WelcomeEmbed});
    .send({ content: `Goodbye, <@${member.user.id}>`,embeds: [WelcomeEmbed] });
};
