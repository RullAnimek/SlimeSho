let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'Sewa'
let dana = global.dana
let pulsa = global.pulsa
let saweria = global.saweria
let owner = global.owner
let anu = `
━━━〔 ıll *Price List* llı 〕━━ꕥ
⬡ *1 Bulan:* 5K
⬡ *Permanent:* 20K
┗━━━━━━━━━━━━━━━ꕥ
┏━━━〔 ıll *PAYMENT* llı 〕━━ꕥ
⬡ *DANA:* '6285850539404'
⬡ *GOPAY:* '6285607831412'
┗━━━━━━━━━━━━━━━━━━ꕥ
┏━━〔 ıll *RULES* llı 〕━ꕥ
⬡ [🏖️] *Dana yang sudah masuk tidak bisa di kembalikan*
┗━━━━━━━━━━ꕥ
Jika anda berminat hubungi nomor di bawah!!

⟩» *jangan lupa donasi kak* «⟨
Terimakasih yang sudah mendonasikan untuk bot

Contact person Sewa Bot:
wa.me/${6285850539404} (Owner)
`
  conn.send3ButtonImg(m.chat, fla + teks, anu, instagram, '𝚂𝚎𝚖𝚞𝚊 𝙿𝚎𝚛𝚒𝚗𝚝𝚊𝚑', '.allmenu', '𝙶𝚛𝚘𝚞𝚙 𝙱𝚘𝚝', '.gcbot', '𝙳𝚘𝚗𝚊𝚜𝚒 𝙺𝚊𝚔', '.donasi', m) 
}
handler.help = ['sewa']
handler.tags = ['info']
handler.command = /^(sewa|sewaslime|sewa|sewabot)$/i

module.exports = handler
