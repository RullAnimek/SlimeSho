let handler = async (m, { conn }) => {
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)

m.reply(`
┌─〔 𝐏𝐞𝐦𝐢𝐥𝐢𝐤 𝐛𝐨𝐭 〕
├ 𝐉𝐚𝐫𝐨𝐭 𝐨𝐟𝐟𝐜
├ http://wa.me/6282146218274
├ 𝐍𝐨𝐦𝐞𝐫 𝐛𝐨𝐭 𝐊𝐡𝐮𝐫𝐮𝐬𝐡𝐢
├ http://wa.me/6283813417529
└────
┌─〔 R U N T I M E 〕
├ 𝐁𝐨𝐭 𝐀𝐤𝐭𝐢𝐟 𝐒𝐞𝐥𝐚𝐦𝐚
├ ${uptime}
├𝐉𝐚𝐧𝐠𝐚𝐧 𝐋𝐮𝐩𝐚 𝐒𝐮𝐬𝐜𝐫𝐢𝐛𝐞
├ RIELLBOTZ OFFC
└────
    `)
}
handler.help = ['runtime']
handler.tags = ['info']
handler.command = /^(uptime|runtime)$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
