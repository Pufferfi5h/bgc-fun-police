module.exports = {
    name: 'rules-and-roles-embed',
    description: "This is a Reaction Bot that allows the Discord Users to Select Roles",
    
    async execute(message, args, Discord, Client){
        
        const channel = Client.channels.cache.get('777887611322499072'); //Role Room (Founder Test Channel(785932283172749402))
        
        channel.messages.fetch().then((results) =>  // Fetch all of the messages in the channel
        setTimeout(function(){ 
            channel.bulkDelete(results); // Clear the channel of messages
        }, 3000)        
        );
        
//----------------------------------------------------------------------------------------------------------------------------------------
//  Create the Rules' Embed
//----------------------------------------------------------------------------------------------------------------------------------------

        let embedRules = new Discord.MessageEmbed()
        .setColor('#FF0070')
        .setTitle('BGC-Online (Discord) Rules')
        .setDescription("**1**.  We do not tolerate racism, homophobia, harassment, hate speech or bullying... no trolling!\n\n"
                    
                    + "**2**.  Please keep posts relevant to the rooms they are posted in.\n\n"
                    
                    + "**3**.  If you have an issue with another member, message an Admin.\n\n"
                    
                    + "**4**.  If you have an issue with an Admin, message a High Council member.\n\n"
                   
                    + "**5**.  Feel free to chat about your lives but please be aware of the impact that your posts may have on other members.\n\n"
                   
                    + "**6**.  Arguing with other members or staff etc, will not win you any votes in a debate… if you have an issue, please raise it via the #report-a-issue room.\n\n"
                   
                    + "**7**.  Please do not use the @ everyone / @ here / @ all roles etc… only Admin staff are permitted to use these.\n\n"
                   
                    + "**8**.  At no times are you to message Admin staff regarding discord related issues… please use the #report-an-issue.\n\n"
                   
                    + "**9**.  This is a family server so please keep things clean and free from offensive language or material.\n\n"
                   
                    + "**10**.  Do not use fancy fonts for your nicknames as they may show up as squares to come members.\n\n"
                   
                    + "**11**.  No sharing of other discord links, this is not an advertising site.\n\n"
                   
                    + "**12**.  No discussions surrounding religion or politics are to be posted.\n\n"
                   
                    + "**13**.  Above all else, please always abide by discords terms of service.\n\n"
                   
                    + "---------------------------------------------------------------------------------------------\n\n"
                   
                    + "**Note**: By clicking the role emojis below you are acknowledging that you have read and understood the rules outlined above.\n\n"

                    + "Please abide by them at all times and if you have any questions regarding our rules etc, please don't hesitate to raise them to a member of the Admin Council.\n\n"

                    + "Many thanks in advance,\n\n"
 
                    + "Pufferfi5h (Founder)"
        );
      
        let msgEmbedRules = await channel.send(embedRules);  //await message.channel.send(embed); Puts the embed in the channel that the message was sent from

//----------------------------------------------------------------------------------------------------------------------------------------
//  Create the Roles' Reactions Embed
//----------------------------------------------------------------------------------------------------------------------------------------

        const theLounge = message.guild.roles.cache.find(role => role.id === "781123508406452285"); //The Lounge
        const theLoungeEmoji = '💬';

        const arkPvE = message.guild.roles.cache.find(role => role.id === "777952130317025332"); //Ark PvE
        const arkPvEEmoji = '🐉';
        
        const conanPvP = message.guild.roles.cache.find(role => role.id === "774253960318943243"); //Conan PvP
        const conanPvPEmoji = '🗡️';

        const miniGames = message.guild.roles.cache.find(role => role.id === "776000404563558400"); //Mini Games
        const miniGamesEmoji = '🎲';

        let embedReactions = new Discord.MessageEmbed()
        .setColor('#FF0070')
        .setTitle('')
        .setDescription("**NOTE: By Selecting the following Emoji roles you are acknowledging the rules laid out above. " 
            + "Please respect and abide by the aforementioned rulings.**\n\n"
            + "---------------------------------------------------------------------------------------------\n\n"
            + "To select your roles/channels please smack the relevant emoji's below:\n\n"

            + `${theLoungeEmoji} - The Lounge (General Chat)\n\n`
            + `${arkPvEEmoji} - Ark Survival Evolved (PvE)\n\n`
            + `${conanPvPEmoji} - Conan Exiles (PvP)\n\n`
            + `${miniGamesEmoji} - Mini Games`);

            let msgEmbedReactions = await channel.send(embedReactions);  //await message.channel.send(embed); Puts the embed in the channel that the message was sent from
            msgEmbedReactions.react(theLoungeEmoji);
            msgEmbedReactions.react(arkPvEEmoji);
            msgEmbedReactions.react(conanPvPEmoji);
            msgEmbedReactions.react(miniGamesEmoji);

            Client.on('messageReactionAdd', async (reaction, user) =>{
                if(reaction.message.partial) await reaction.message.fetch();
                if(reaction.partial) await reaction.fetch();
                if(user.bot) return;
                if(!reaction.message.guild) return;
                
                if(reaction.message.channel.id == channel){
                    if(reaction.emoji.name === theLoungeEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.add(theLounge);
                    }
                    if(reaction.emoji.name === arkPvEEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.add(arkPvE);
                    }
                    if(reaction.emoji.name === conanPvPEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.add(conanPvP);
                    }
                    if(reaction.emoji.name === miniGamesEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.add(miniGames);
                    }
                }else{
                    return;
                }
            });

            Client.on('messageReactionRemove', async (reaction, user) =>{
                if(reaction.message.partial) await reaction.message.fetch();
                if(reaction.partial) await reaction.fetch();
                if(user.bot) return;
                if(!reaction.message.guild) return;
                
                if(reaction.message.channel.id == channel){
                    if(reaction.emoji.name === theLoungeEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(theLounge);
                    }
                    if(reaction.emoji.name === arkPvEEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(arkPvE);
                    }
                    if(reaction.emoji.name === conanPvPEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(conanPvP);
                    }
                    if(reaction.emoji.name === miniGamesEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(miniGames);
                    }
                }else{
                    return;
                }
            });       
    }
}