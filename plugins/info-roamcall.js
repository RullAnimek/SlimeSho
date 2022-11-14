//made by Jarot offc
let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `
Nih kak :)

https://call.whatsapp.com/video/6x9Wc2hLTPWQBEgyuQp7s4

`.trim()
  m.reply(text)
}
handler.help = ['roamcall']
handler.tags = ['info']
handler.command = /^(roamcall)$/i
handler.limit = true

module.exports = handler
