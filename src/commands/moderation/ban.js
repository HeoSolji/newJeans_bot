module.exports ={
    name:"ban",
    description:"Ban from server",
    default_member_permissions:4,
    options: [
        {
            name: "target",
            description:"Choose member who you want to ban",
            type:6,
            required:true,
        },
        {
            name: "reason",
            description:"Reason:",
            type: 3,
        },
    ],
    run: async (client, interaction) =>{
        const target =interaction.options.getMember("target");
        const reason = interaction.options.getString("reason")||"No reason";

        if(target.id === interaction.user.id) return interaction.reply({
            content:"You cant ban yourself",
            ephemeral:true,
        });
        if(target.id === client.user.id) return interaction.reply({
            content: "Ban me with my command =))) nice try!!!!",
            ephemeral:true,
        });
        if(target.roles.highest.position >= interaction.member.roles.highest.position)
            return interaction.reply({
                content:"You cant ban higher role member",
                ephemeral:true,
            });
        if(!target.bannable) return interaction.reply({
            content:"Sorry you cant kick this member",
            ephemeral:true,
        });
        interaction.reply({
            content:`✅ | Ban <@${target.id}> for reason: ${reason}`,

        });

        await target.send({
            content:`you have been Banned from the server ${interaction.guild.name}`,
        }).catch(()=>{});

        target.ban({reason: reason}).catch(()=>{});
    }
}

  