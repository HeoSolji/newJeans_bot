module.exports = {
    name: "kick",
    description:"kick member",
    default_member_permissions:2,
    options:[
        {
            name: "target",
            description: "Choose member who you want to kick",
            type: 6,
            required:true,
        },
        {
            name: "reason",
            description: "the reason for being kicked from the server",
            type:3
        }
    ],
    run: async (client, interaction) =>{
        const target = interaction.options.getMember("target");
        const reason = interaction.options.getString("reason") || "No reason";

        if(target.id === interaction.user.id) return interaction.reply({
            content:"You cant kick yourself",
            ephemeral:true,
        });
        if(target.id === client.user.id) return interaction.reply({
            content: "Kick me with my command =))) nice try!!!!",
            ephemeral:true,
        });
        if(target.roles.highest.position >= interaction.member.roles.highest.position)
            return interaction.reply({
                content:"You cant kick higher role member",
                ephemeral:true,
            });
        if(!target.kickable) return interaction.reply({
            content:"Sorry you cant kick this member",
            ephemeral:true,
        });
        interaction.reply({
            content:`✅ | Kick <@${target.id}> for reason: ${reason}`,

        });

        await target.send({
            content:`you have been kicked from the server ${interaction.guild.name}`,
        }).catch(()=>{});

        target.kick(reason).catch(()=>{});
    },
}