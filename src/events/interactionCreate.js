module.exports = async (client, interaction)=>{
    if (interaction.isChatInputCommand()){
        const command = client.command.get(interaction.commandName);

        if(!interaction.guild) return interaction.reply({
            content: "Can't use this command in here !",
            ephemeral:true,
        })
        if(!command) return interaction.reply({
            content:"this command doesn't exist",
            ephemeral: true,
        })
        await command.run(client, interaction);
    }
}