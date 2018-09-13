const Discord = require('discord.js');
const config = require('./config.json');
const disco = new Discord.Client();
const prefix = config.prefix;
const roles = config.roleToDisco;
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');

disco.on("ready", () => {
	    disco.user.setPresence({ watch: { name: `Axrets Disco Botu` }, type: 0 });
    console.log("Disco role bot online! Created by i am toast.");
});

disco.on("message", message => {

  function discoRole() {
    let random = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    roles.forEach((role) => {
      let theRole = message.guild.roles.find("name", role);
      theRole.edit({color: random}).catch(e => {
        
      });
    });
  }

  if(message.content.startsWith(prefix + "disko")) {
    setInterval(() => { discoRole(); }, config.ms);
    const embed = new Discord.RichEmbed()
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Disko**", `Disko Başladı`)

 
  return message.channel.sendEmbed(embed);
};
	

if(message.content.startsWith(prefix + "discodurdur")) {
setTimeout(() => { console.log(process.exit(0)); }, 300);
const embed = new Discord.RichEmbed()
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Disko**", `Disko Durduruldu`)

 
  return message.channel.sendEmbed(embed);
};
 
  

});

disco.login(process.env.BOT_TOKEN);
