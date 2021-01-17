const Discord = require('discord.js')
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const embedColour = "1caed6";

const prefix = "!";
const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log('BGC-Fun-Police is Ready')
    client.user.setActivity('you closely!', { type: "WATCHING"}) //Set the BOT Status
        .catch(console.error);
})

// Work through the following commands if the user enters a command message.
client.on('message', message =>{

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(message.member.hasPermission('ADMINISTRATOR')){ // Make sure that only Administrators can run this command
        
        if(command === "bgc1"){ //Update Temp Admin Rules
            client.commands.get('admin-rules').execute(message, args, Discord, client, "798237916299657274", embedColour);  
        }  
        
        if(command === "bgc2"){ //Update Admin Rules
            client.commands.get('admin-rules').execute(message, args, Discord, client, "775998618645430283", embedColour); 
        }   

        if(command === "bgc3"){ //Update Temp Staff Rules 
            client.commands.get('staff-rules').execute(message, args, Discord, client, "775392785972461620", embedColour);
        }

        if(command === "bgc4"){ //Update Staff Rules
            client.commands.get('staff-rules').execute(message, args, Discord, client, "796821654294495252", embedColour); 
        }
    }

    if(command === "agree" && message.channel.id === '798237916299657274'){ //Update Admin Rules
        let newRole = message.member.guild.roles.cache.find(newRole => newRole.id === "776437405090971699"); // Add Admin Role
        if (newRole) message.guild.members.cache.get(message.author.id).roles.add(newRole);
        let oldRole = message.member.guild.roles.cache.find(oldRole  => oldRole.id === "783339993887146006"); // Remove Admin Temp
        if (oldRole) message.guild.members.cache.get(message.author.id).roles.remove(oldRole);
    }

    if(command === "agree" && message.channel.id === '775392785972461620'){
        let newRole = message.member.guild.roles.cache.find(newRole => newRole.id === "774223494803750942"); // Add Staff Role
        if (newRole) message.guild.members.cache.get(message.author.id).roles.add(newRole);
        let oldRole = message.member.guild.roles.cache.find(oldRole  => oldRole.id === "796823348898037812"); // Remove Staff Temp Role
        if (oldRole) message.guild.members.cache.get(message.author.id).roles.remove(oldRole);
        }
});

//Comment these following two lines of code before uploading
//const config = require('./config.json') 
//client.login(config.token)

//Uncomment the following line of code before uploading
client.login(process.env.DJS_TOKEN)