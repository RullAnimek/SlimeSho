let handler = async(m, { conn }) => {
conn.sendFile(m.chat, global.API('xteam', '/asupan/darkjoke', {}, 'APIKEY'), '', '🔦',m)
}
handler.help = ['darkjokes'|'dj']
handler.tags = ['internet']
handler.command = /^(darkjokes)$/i
handler.limit = true

module.exports = handler
