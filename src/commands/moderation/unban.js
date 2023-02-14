module.exports ={
    name:"unban",
    description:"Unban Member",
    default_member_permissions: 4,
    options: [
        {
            name: "memberid",
            description:"Choose member who you want to unban",
            type:3,
            required:true,
        }
    ],
    run: async (client, interaction) => {
        const memberId = interaction.options.getString("memberid");
        interaction.guild.bans.remove(memberId).then((user) => {interaction.reply(
            {
              content: `Unban complete for member ${user.username}`,
            });})
          .catch(() => {interaction.reply({
              content: `Cant unban for member: ${memberId}`,
              ephemeral: true,
            });
          });
      }
}