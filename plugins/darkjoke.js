let handler = async(m, { conn }) => {
conn.sendFile(m.chat, global.API('xteam', '/asupan/darkjoke', {}, 'APIKEY'), '', ' (⁠◍⁠•⁠ᴗ⁠•⁠◍⁠)🔦',m)
}
handler.help = ['darkjokes']
handler.tags = ['internet']
handler.command = /^(dragjoles|darkjokes)$/i
handler.limit = true

module.exports = handler
