// @ts-nocheck
import {
  joinVoiceChannel,
  createAudioPlayer,
  createAudioResource,
  StreamType,
} from '@discordjs/voice'
import { tts } from '../../systems/googleTextToSpeech'
import { addSpeechEvent } from './voiceUtils/addSpeechEvent'

//const transcriber = new Transcriber('288916776772018')
export function initSpeechClient(
  client,
  discord_bot_name,
  entity,
  handleInput
) {
  addSpeechEvent(client)

  client.on('speech', async msg => {
    const content = msg.content
    const connection = msg.connection
    const author = msg.author
    const channel = msg.channel

    console.log('got voice input:', content)
    if(!content) return undefined
    const response = await handleInput(
      content,
      author?.username ?? 'VoiceSpeaker',
      discord_bot_name,
      'discord',
      channel.id,
      entity
    )

    const audioPlayer = createAudioPlayer()
    const url = await tts(response)
    connection.subscribe(audioPlayer)
    console.log('speech url:', url)
    const audioResource = createAudioResource(url, {
      inputType: StreamType.Arbitrary,
    })
    audioPlayer.play(audioResource)
  })
}

/**
 * Join the voice channel and start listening.
 * @param {Discord.Receiver} receiver
 * @param {Discord.TextChannel} textChannel
 */
export async function recognizeSpeech(textChannel) {
  console.log('recognizeStream')
  if (textChannel) {
    joinVoiceChannel({
      channelId: textChannel.id,
      guildId: textChannel.guild.id,
      adapterCreator: textChannel.guild.voiceAdapterCreator,
      selfDeaf: false,
    })
  }
}
