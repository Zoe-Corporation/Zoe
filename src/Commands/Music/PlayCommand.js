module.exports = {
	config: {
	  name: 'play',
	  aliases: ['p'], 
          description: "",
	  category: "Music"
	},
    run: async (client, message, args) => {
      /*
      if(!args.join(" ")) {
        return message.channel.send("Voce não forneceu um nome ou um url")
      }

      const voiceCanal = message.member.voice.channel
      if(!voiceCanal) {
        return message.channel.send("Voce não está num canal de voz")
      }

    const memberChannel = message.member.voice.channel.id

    const player = await client.music.join({
      guild: message.guild.id,
      voiceChannel: memberChannel,
      textChannel: message.channel
    })
 
    const { tracks } = await client.music.fetchTracks(args.join(' '))
 
    player.queue.add(tracks[0], message.author.username)
 
    message.channel.send('Adicionado na Lista de Reprodução: ' + tracks[0].info.title)
 
    if (!player.playing) return player.play()
    */
message.channel.send("Desativado temporariamente")
    }
}
