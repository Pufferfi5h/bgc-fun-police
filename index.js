const Discord = require('discord.js')
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const embedColour = "1caed6";

const prefix = "^";
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

//
//---- ADMIN RULES ----
//
    if(command === 'bgcfp1'){ //Update Admin Rules
        const chan = ["798237916299657274","775998618645430283"];       

        if(message.member.hasPermission('ADMINISTRATOR')){ // Make sure that only Administrators can run this command
            for (let i = 0; i < chan.length; i++) {
                client.commands.get('admin-rules').execute(message, args, Discord, client, chan[i], embedColour); // Update the Admin RUles Embeds
            }
        }
    }

//
//---- STAFF RULES ----
//
    if(command === "bgcfp2"){ //Update Staff Rules
        const chan = ["775392785972461620","796821654294495252"];       

        if(message.member.hasPermission('ADMINISTRATOR')){ // Make sure that only Administrators can run this command
            for (let i = 0; i < chan.length; i++) {
                client.commands.get('staff-rules').execute(message, args, Discord, client, chan[i], embedColour); // Update the Staff RUles Embeds
            }
        }
    }
});

//Comment these following two lines of code before uploading
const config = require('./config.json') 
client.login(config.token)

//Uncomment the following line of code before uploading
//client.login(process.env.DJS_TOKEN)