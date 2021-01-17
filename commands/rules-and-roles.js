module.exports = {
    name: 'rules-and-roles',
    description: "This is a Bot that allows the Discord Users to agree to the Discord Rules... it also awards them the Lounge Role",
    
    async execute(message, args, Discord, Client, chan, embedColour){

    const channel = Client.channels.cache.get(chan); //Rules and Roles Room
        
//----------------------------------------------------------------------------------------------------------------------------------------
//  Create the Rules' Embed
//----------------------------------------------------------------------------------------------------------------------------------------

        let embedRules = new Discord.MessageEmbed()
        .setColor(embedColour)
        .setTitle('BGC-Online (Discord) Rules')
        .setDescription("Below you will find the Rules and Regulations for Beacon Gaming Community.\n\n"
        
                        + "To gain access to any of the available BGC channels you must first read the following BGC Rules and Regualtions:\n\n"
                        
                        + "---------------------------------------------------------------------------------------------")

        .addField("( 1 )", "" + 
                "We **do not** tolerate racism, homophobia, harassment, hate speech or bullying... no trolling!")

        .addField("( 2 )", "" + 
                "Please keep posts relevant to the rooms they are posted in.")

        .addField("( 3 )", "" + 
                "If you have an issue with another member, message an Admin.")

        .addField("( 4 )", "" + 
                "If you have an issue with an Admin, message a BGC Committee member.")

        .addField("( 5 )", "" + 
                "Feel free to chat about your lives but please be aware of the impact that your posts may have on other members.")

        .addField("( 6 )", "" + 
                "Arguing with other members or staff etc, will not win you any votes in a debate… if you have an issue, please raise it via the #report-a-issue room.")

        .addField("( 7 )", "" + 
                "Unless it is absolutly necessary, please refrain from using the  **@ everyone** / **@ here** / **@ all roles** etc.  Using these tags alerts all members within that role and this can become annoying... Therefore, __only__ BGC Staff and above are to use these tags.")

        .addField("( 8 )", "" + 
                "At no times are you to discord message (DM) Admin staff, or above, regarding discord related issues… please use the #report-an-issue channel for such issues.")
      
        .addField("( 9 )", "" + 
                "This is a family server so please keep things clean and free from offensive language or material.")

        .addField("( 10 )", "" + 
                "Do not use fancy fonts for your nicknames as they may show up as squares to some members.")

        .addField("( 11 )", "" + 
                "No sharing of other discord links, this is not an advertising site.")

        .addField("( 12 )", "" + 
                "No discussions surrounding religion or politics are to be posted at any time.")

        .addField("( 13 )", "" + 
                "Above all else, *please* abide by discords terms of service.");
      
        let msgEmbedRules = await channel.send(embedRules);
        

        if(chan === "777887611322499072"){
        let embedRules2 = new Discord.MessageEmbed()
        .setColor(embedColour)
        .setTitle('BGC-Online (Discord) Rules Acknowledgement')
        .setDescription("To open the initial channels you must first agree to abide by the afformentioned rules by entering the following command: **!agree**.\n\n"

        + "Please abide by them at all times and if you have any questions regarding our rules etc, please don't hesitate to raise them to a member of the Admin team.\n\n"

        + "Many thanks in advance,\n\n"

        + "Pufferfi5h (Founder)")
      
        let msgEmbedRules2 = await channel.send(embedRules2);
        }

        const arkPvEEmoji = ("<:BGCArk:798568372698087456>");
        const conanPvPEmoji = ("<:BGCConan:798568385418887208>");
        const miniGamesEmoji = ("<:BGCMinigames:798568397889470505>");

        if(chan === "799009246766956616"){
        let embedRules3 = new Discord.MessageEmbed()
        .setColor(embedColour)
        .setTitle('BGC-Online (Discord) Roles')
        .setDescription("To gain access to the various roles within the BGC, all you have to do is to enter the following commands:\n\n")

        .addField("---------------------------------------------------------------------------------------------", "" + 
                `${arkPvEEmoji} Ark Survival Evolved (PvE) = **!arkpve**`)

        .addField("---------------------------------------------------------------------------------------------", "" + 
                `${conanPvPEmoji} Conan Exiles (PvP) = **!conanpvp**`)

        .addField("---------------------------------------------------------------------------------------------", "" + 
                `${miniGamesEmoji} Mini-Games = **!minigames**`)
        
        .addField("---------------------------------------------------------------------------------------------", "" + 
                "If you have any issues regarding roles please don't hesitate to raise them to one of the Admin and they will endevour to assist you where they can.\n\n"
                
                + "Many thanks,\n\n"

                + "Pufferfi5h (Founder)")

        let msgEmbedRules3 = await channel.send(embedRules3);
        }

    }
}