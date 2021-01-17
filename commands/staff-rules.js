module.exports = {
    name: 'staff-rules',
    description: "This is a Reaction Bot that allows the BGC Staff Members to agree the Staff rules",

    async execute(message, args, Discord, Client, chan, embedColour){

        const channel = Client.channels.cache.get(chan); //Staff Responsibilities Room
        
//----------------------------------------------------------------------------------------------------------------------------------------
//  Create the Rules' Embed
//----------------------------------------------------------------------------------------------------------------------------------------

        let embedRules = new Discord.MessageEmbed()
        .setColor(embedColour)
        .setTitle('Roles and Responsibilities (BGC Staff)')
        .setDescription("---------------------------------------------------------------------------------\n\n"
                    
                    + "**Role Overview**\n"
                    
                    + "To be a BGC Staff member takes commitment and enthusiasm. Our staff members are the backbone of our community as they are the ones who are on the ground, keeping the peace, advising the players and generally ensuring that our members are happy in their days. As you are our ‘front of house’ we expect a smile and a greeting from you whenever you are online.\n\n"
                    
                    + "---------------------------------------------------------------------------------\n\n"        
        
        )
        .addField("Responsibilities", "" + 
                "The following Rules and Responsibilities are to be adhered to at all times:")

        .addField("( 1 )", "" + 
                "Chatting in the Discord Channels as well as on the in-game chat facilities. This is very important as the biggest failing in any organisation is a lack of communication.")

        .addField("( 2 )", "" + 
                "Starting conversations in quiet rooms, thus getting the conversations going. Saying ‘Good Morning’ or simply asking how someone’s day is going can mean the world to them… generally being there when someone needs to talk is invaluable.")

        .addField("( 3 )", "" + 
                "Being the First Point of Assistance to other BGC Members is important. You may have the answer they need so offer your guidance where appropriate. If you can’t offer assistance, direct them to a BGC Admin via the #report-an-issue channel and one of them will guide accordingly.")

        .addField("( 4 )", "" + 
                "Helping the BGC Admin where possible… this is also important as the job of being a BGC Admin can become tiresome… therefore, acting as a Right Hand Man/Woman to the BGC Admin is a quality that the BGC Staff members need to demonstrate at all times.")

        .addField("( 5 )", "" + 
                "BGC Staff members should offer their advice and exhibit your personal knowledge regarding hosted games or Discord etc. Never be afraid to shout out if you know the answer to someone’s question… you probably know something that they don’t. However, do not make something up! Never offer advice on something that you do not know or understand as it could make you and the team look unprofessional.")

        .addField("( 6 )", "" + 
                "Promoting the Beacon Gaming Community via other social media outlets such as FaceBook/Twitter/Instagram etc is one of the main roles of the BGC Staff members. This is a huge task and arguably one of the most important as the BGC Staff members' word is what brings the players to our community. Getting out there and promoting our servers is something that rates pretty high on the BGC Staff members' To-Do list.")

        .addField("( 7 )", "" + 
                "BGC Staff members are the initial ‘Calming Influence’ on the server… one of their jobs is to diffuse situations before they escalate. If they cannot calm the situation then they bring the issue in question to the attention of a BGC Admin via the #report-an-issue channel and one of them will deal with it accordingly.")

        .addField("( 8 )", "" + 
                "BGC Staff members can run in-game events, with items provided by a BGC Admin, and also help others to run their events too. Events are a means to keep things interesting and fun on the servers. If you are running events and you need help then speak to a BGC Admin for guidance and assistance. We are a team and are all here to help make the members' lives fun and enjoyable.")

        .addField("---------------------------------------------------------------------------------------------", "" + 
                "BGC Staff members are expected to be friendly, approachable and above all fun to be around. They are the initiators in the chat rooms and the first people that members should go to if they have any issues in Discord or In-Game. They should be active on social media promoting the BGC-Online and should also be active within the Discord environment.\n\n" 

                + "Always smiling, always laughing and above all else, always representing the BGC-Online in the manner that encourages members to want to be within our family community.\n\n"
                
                );
      
        let msgEmbedRules = await channel.send(embedRules);

//----------------------------------------------------------------------------------------------------------------------------------------
//  Create the BGC Staff Rules Agreed Reactions Embed
//----------------------------------------------------------------------------------------------------------------------------------------

        const bgcAgree = ("<:BGCTick:800349960830189608>");

        if(chan === "775392785972461620"){
                let embedRules1 = new Discord.MessageEmbed()
                .setColor(embedColour)
                .setTitle('BGC-Online (Discord) Roles')
                .setDescription("**NOTE**: In order for you to become a fully fledged Staff member you must first agree to the aforementioned Rules and Regulations.\n\n#" 
                                 + " Simply enter the following command below to confirm that you concur with the above.\n\n")
        
                .addField("---------------------------------------------------------------------------------------------", "" + 
                        `${bgcAgree} Agree to the Rules and Resulations = **!agree**`)
                
                .addField("---------------------------------------------------------------------------------------------", "" + 
                        "If you have any issues regarding your future role or the responsibilities that go with it, please don't hesitate to raise them to one of the Admin and they will endevour to assist you where they can.\n\n"
                        
                        + "Many thanks,\n\n"
        
                        + "Pufferfi5h (Founder)")
        
                let msgEmbedRules1 = await channel.send(embedRules1);
         }
        
}
        
}

