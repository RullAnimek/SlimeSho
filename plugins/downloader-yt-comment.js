let handler = async (m, { conn, text }) => {
  if (!text) throw 'No Text'
  conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/youtube-comment', {
    avatar: await conn.getProfilePicture(m.sender).catch(_ => ''),
    comment: text,
    username: conn.getName(m.sender)
  }), 'yt-comment.png', 'you comment ', m)
}

handler.help = ['ytcomment [text]']
handler.tags = ['maker']
handler.command = /^(ytcomment)$/i
handler.limit = true

module.exports = handler
