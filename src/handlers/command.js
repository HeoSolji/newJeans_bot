const path = require("path");
const fs = require("fs");
const { dir } = require("console");

module.exports = async (client) =>{
    const commandPath = path.join(__dirname, "..", "commands");
    fs.readdirSync(commandPath).forEach((dir) =>{
        const commandFile = fs.readdirSync(`${commandPath}/${dir}`).filter((file)=>file.endsWith(".js"));
        commandFile.map(file => {
            const command = require(`../commands/${dir}/${file}`);
            client.command.set(command.name, command);
            // console.log(command.name)
        })
    })
}