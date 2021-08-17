/*
Copyright 2021 Whirl

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



*/



// require the needed discord.js classes
const { Client, Intents, MessageActionRow, MessageSelectMenu } = require('discord.js');

// create a new Discord client
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const {token , r1 , r2 ,r3 ,r4,r5 , r1m , r2m , r3m , r4m , r5m} = require('./config.json')
//event triggered when the client is ready/online logs ready {@type string} in the console



client.once('ready', () => {
    console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
    

	if (interaction.commandName == 'roles') {
        const row = new MessageActionRow()
        .addComponents(
            new MessageSelectMenu()
                .setCustomId('roles')
                .setPlaceholder('Select a reaction role')
                .addOptions([
                    { //edit the option according to you ⚠leave the emoji fields like they are 
                        label: 'Reaction Role 1',
                        description: 'Take this role by clicking me ',
                        value: 'first_option',
                        emoji: r1m
                    },
                    {
                        label: 'Reaction Role 2',
                        description: 'Take this role by clicking me ',
                        value: 'second_option',
                        emoji: r2m
                    },
                    {
                        label: 'Reaction Role 3',
                        description: 'Take this role by clicking me ',
                        value: 'third_option',
                        emoji: r3m
                    },
                    {
                        label: 'Reaction Role 4',
                        description: 'Take this role by clicking me ',
                        value: 'fourth_option',
                        emoji: r4m
                    },
                    {
                        label: 'Reaction Role 5',
                        description: 'Take this role by clicking me s',
                        value: 'fifth_option',
                        emoji: r5m
                    },
                ]),
        );

    await interaction.reply({  content: "Hello There take your roles",  ephemeral: true ,components: [row]})//edit the content here
     //this sends it as empheral so that the chat does not get choked with these 
}



  //if the interaction is select menu then reply
  if(interaction.isSelectMenu()){
      
    let choice = interaction.values[0] 
    const member = interaction.member
     if(choice == 'first_option'){
        if (member.roles.cache.some(role => role.id == r1)) {
            interaction.reply({content: "The role was successfully removed from you" , ephemeral: true})
            member.roles.remove('847793663597608990')
        }
        else{
        member.roles.add(r1)
            await interaction.reply({ content: "The role was successfully added to you", ephemeral: true })}
          }

else if(choice == 'second_option'){
    if (member.roles.cache.some(role => role.id == r2)) {
        interaction.reply({content: "The role was successfully removed from you", ephemeral: true})
        member.roles.remove(r2)
    }
    else{
    member.roles.add(r2)
        await interaction.reply({ content: "The role was successfully added to you", ephemeral: true })}
      }


      else if(choice == 'third_option'){
        if (member.roles.cache.some(role => role.id == r3)) {
            interaction.reply({content: "The role was successfully removed from you", ephemeral: true})
            member.roles.remove(r3)
        }
        else{
        member.roles.add(r3)
            await interaction.reply({ content: "The role was successfully added to you", ephemeral: true })}
          }



          else if(choice == 'fourth_option'){
            if (member.roles.cache.some(role => role.id == r4)) {
                interaction.reply({content: "The role was successfully removed from you!", ephemeral: true})
                member.roles.remove(r4)
            }
            else{
            member.roles.add(r4)
                await interaction.reply({ content: "The role was successfully added to you", ephemeral: true })}
              }


              else if(choice == 'fifth_option'){
                if (member.roles.cache.some(role => role.id == r5)) {
                    interaction.reply({content: "The role was successfully removed from you", ephemeral: true})
                    member.roles.remove(r5)
                }
                else{
                member.roles.add(r5)
                    await interaction.reply({ content: "The role was successfully added to you", ephemeral: true })}
                  }
    
      
    
    } 
})

client.login(token);//logging into our bot 
