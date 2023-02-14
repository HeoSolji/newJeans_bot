require("dotenv").config()
module.exports =(reaction, member)=>{
    // get role main
    const messageGetMainRoleId =process.env.MESSAGE_ROLE_MAIN_ID
    const roleMain = member.guild.roles.cache.find((role)=>role.name =='MAIN');
    if(roleMain===NULL) return;
    if(reaction.message.id === messageGetMainRoleId){
        reaction.guild.member(member).roles.add(roleMain)
    }

};