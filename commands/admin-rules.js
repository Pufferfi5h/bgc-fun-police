module.exports = {
    name: 'admin-rules',
    description: "This is a Reaction Bot that allows the BGC Admin Members to agree the Admin rules",

    async execute(message, args, Discord, Client, chan, embedColour){

        const channel = Client.channels.cache.get(chan); //Admin Responsibilities Room
        
        channel.messages.fetch().then((results) =>  // Fetch all of the messages in the channel
        setTimeout(function(){ 
            channel.bulkDelete(results); // Clear the channel of messages
        }, 3000)
        );
        
//----------------------------------------------------------------------------------------------------------------------------------------
//  Create the Rules' Embed
//----------------------------------------------------------------------------------------------------------------------------------------

        let embedRulesOne = new Discord.MessageEmbed()
        .setColor(embedColour)
        .setTitle('Roles and Responsibilities (BGC Admin)')
        .setDescription("---------------------------------------------------------------------------------\n\n"
                    
                    + "**Role Overview**\n"
                    
                    + "To be an Admin within the Beacon Gaming Community takes a great deal of commitment and enthusiasm.  Our Admin represent the middle management within our community as they are the ones who manage our Sages and guide the members on a daily basis.  They keep the peace, advising the players and generally ensuring that our members are happy in their days.\n\n"
                    
                    + "---------------------------------------------------------------------------------\n\n"        
        
        )
        .addField("Responsibilities", "" + 
                "Admins are the ‘Duty Adults’ within the servers etc, therefore I expect every admin to act accordingly.  Our community thrives within the Discord environment so please interact with the players and staff members alike in a professional and courteous manner.\n\nThe following Rules and Responsibilities are to be adhered to at all times:")

        .addField("( 1 )", "" + 
                "As a BGC Admin you represent the community in both a pastoral and disciplinary role.  Do not always be the person who shouts and directs the players as they may sway away from you and that is not what we need within the Admin Council, but if a stern word is required don’t be afraid to take someone to the DMs to re-educate them on their misdemeanours.")

        .addField("( 2 )", "" + 
                "Remember that as an Admin you have been given a lot of power within the realms of the games you reside over.  Therefore, **do not** find yourself in a position where you are seen to be abusing that authority.  **Note**: Randomly spawning in items for favoured players, without prior consent of the High Council, will not be tolerated.")

        .addField("( 3 )", "" + 
                "**Always** remain impartial, no matter what your personal sway may be.  As an admin you cannot be seen to be taking sides in arguments or disagreements etc.  If you find yourself within the environment where you are policing an altercation then direct it through the ticket process to cover your back… don’t get caught out.")

        .addField("( 4 )", "" + 
                "Whilst wandering through the Discord corridors if you spot a conversation with negative content etc, please take it to the DMs.  Also, never try to, publically, override one of your fellow Admins.  If they are dealing with something and you have a negative input then please take that to the DMs so it remains out of the public eye.")

        .addField("( 5 )", "" + 
                "As soon as you log on always try to drop in a ‘Hello’ or a ‘Good Morning’ within the channels that you reside in.  Ask the members that you cater for if they are well and what their plans for the day may be etc.  Get the conversations flowing within the Discord channels and try to incorporate as many people into the chat as you can.")

        .addField("( 6 )", "" + 
                "Boosting the servers play an essential part of the day to day running of the BGC.  Promote the boosting process within the community so that we can continue to offer the best facilities available to our members.  Along side this come the promotion of all in-game rewards’ tiers etc.  You are to subtlety promote the tiers to all players, as the more income we can collate, the bigger our environment becomes.")

        .addField("( 7 )", "" + 
                "Encourage the Sages to carry out their duties as per their Roles and Responsibilities.  This also included promoting the server on platforms of all available social media.  If the Sages aren’t promoting the BGC then external players will be unaware that our community exists.  All Admins are expected to keep on top of the promoting aspect of the community.")
 
        .addField("( 8 )", "" + 
                "If you encounter Trolls on the servers or within Discord, report it immediately via the Ticket Process and remove them from the public channels if required."
        
                );

        let msgEmbedRulesOne = await channel.send(embedRulesOne);

        let embedRulesTwo = new Discord.MessageEmbed()
        .setColor(embedColour)
        .setTitle('')
        .setDescription("")

        .addField("( 9 )", "" + 
                "The Admin Council channels are private and are to be kept that way.  Anything discussed within the confines of the aforementioned channels are to be held in the strictest of confidence.")

        .addField("( 10 )", "" + 
                "Ensure that the Discord Rules are being upheld by the players and staff alike.  If you identify any breach of the regulations then cordially clamp down on it.  Do not, get into a verbal battle with a player; simply advise them regarding their misgivings.  This also includes the taboo subject policing regarding such details as politics or religions etc.")

        .addField("( 11 )", "" + 
                "If you are asked a question within Discord, please do not ignore said query.  There is nothing worse than someone needing assistance and the people who are in the position to offer that guidance simply ignoring them.  If you do not know the answer then take it to the Admin Council channel and ask your peers for their advice, but ensure that the player in question knows that you are dealing with their query.")

        .addField("( 12 )", "" + 
                "Always remain approachable within the public forums.  We really want our members to feel at home within our community and so if they feel they can approach you with their issues they will hopefully encourage their friends and family to come and join us also.")

        .addField("( 13 )", "" + 
                "Remember that at the end of the day our members and supporters are the reason why this community is here.  Remain courteous at all times and if you need to don your disciplinary outfit take the issue to the DMs, please keep all matters that may humiliate others out of the public eye.  Never come across as sarcastic as you are there to maintain morale and offer the guiding light for our members, not to embarrass them.")

        .addField("( 14 )", "" + 
                "Final point to keep in mind: **Always** remember that being a BGC Admin is a voluntary position, real life must always comes first.  Don’t be the Admin that feels they have to do everything, if you are tired etc, ask for help as your peers will offer lighten your load.  Keep playing the games that you love and if you can assist the players on that game that’s fine but time must be set aside for you and your well-being."

                );

        let msgEmbedRules = await channel.send(embedRulesTwo);

//----------------------------------------------------------------------------------------------------------------------------------------
//  Create the BGC Staff Rules Agreed Reactions Embed
//----------------------------------------------------------------------------------------------------------------------------------------

        if (chan === "798237916299657274"){

                const bgcAdmin = message.guild.roles.cache.find(role => role.id === "776437405090971699"); //BGC Admin Role Added
                const bgcTempAdmin = message.guild.roles.cache.find(role => role.id === "783339993887146006"); //BGC Temp Admin Role Removed

                const agreedEmoji = '☑️';

                let embedReactions = new Discord.MessageEmbed()
                .setColor(embedColour)
                .setTitle('')
                .setDescription("**NOTE**: By Selecting the " + agreedEmoji + " below you are acknowledging that you have read and understood the rules laid out above.\n\n" 
                
                + "**Please smack the emoji below to acknowledge the rules of being a BGC Admin.**");

                let msgEmbedReactions = await channel.send(embedReactions);  //await message.channel.send(embed); Puts the embed in the channel that the message was sent from
                msgEmbedReactions.react(agreedEmoji);

                Client.on('messageReactionAdd', async (reaction, user) =>{
                        if(reaction.message.partial) await reaction.message.fetch();
                        if(reaction.partial) await reaction.fetch();
                        if(user.bot) return;
                        if(!reaction.message.guild) return;
                        
                        if(reaction.message.channel.id == channel){
                        if(reaction.emoji.name === agreedEmoji){
                                await reaction.message.guild.members.cache.get(user.id).roles.remove(bgcTempAdmin);
                                await reaction.message.guild.members.cache.get(user.id).roles.add(bgcAdmin);
                        }
                        }else{
                        return;
                        }
                })      
        }   
}
}

