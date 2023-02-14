module.exports = {
    name: "ping",
    description: "xem toc do phan hoi cua bot",
    run: async (client, interaction) =>{
        interaction.reply({ content:`Pong! ${client.ws.ping}ms!` });
    }
}