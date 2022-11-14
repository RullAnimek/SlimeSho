/*
Made by Aine
*/

let handler = async (m, { conn }) => {
	let img = 'https://telegra.ph/file/c70add3af64df4f9828e6.jpg'
	let dares = [
"Pakai foto profil megawati selama 1 hari",
"Keliling rumah 2 kali",
"Bilang aku jelek pakai vn",
"Hapus 1 aplikasi (apapun)",
"Foto kuburan tengah malam berani ga?",
"Bilang I Love You Ke Seseorang", 
"Ngomong UwU lewat VN dan kirim ke grup!", 
"Pakai bahasa asing selama 1 hari", 
"Katakan Meong disetiap akhir kalimat", 
"Telpon teman/crush/doi dan katakan kamu menyukai dirinya", 
"Ajak 1 orang untuk menjadi CP mu selama 1 hari", 
"Ambil foto profil bot, jadikan foto profil kamu selama 1 hari",
"VN nyanyi balonku ada 5",
"Kirim pesan ke mantan kamu dan bilang _aku masih suka sama kamu_",
"Telfon crush/pacar sekarang dan ss ke pemain",
"Pap ke salah satu anggota grup",
"SS recent call whatsapp",
"Kirim voice note bilang can i call u baby?",
"Pake foto rimuru sampe 3 hari'",
"Ketik pake bahasa daerah 24 jam",
"Ganti nama menjadi _gue anak lucinta luna_ selama 5 jam",
"Chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia _i lucky to hv you_",
"Prank chat mantan dan bilang *i love u, pgn balikan*",
"Record voice baca surah al-kautsar",
"Ganti nama jadi *ALOK* selama 24 jam",
"Sebutkan tipe pacar mu!",
"VN *aku mencintaimu*",
"Kamu harus pap sekarang!",
"Kamu harus bagi bagi limit, minimal 2 setiap pengguna",
"Chatingan selama 1 jam harus 4l4Y 8AN93T"
] // tambahin kata kata sendiri 
	conn.sendFile(m.chat, img, 'maker.jpeg', `*DARE*\n\n“${pickRandom(dares)}”`, m, false, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['dare']
handler.tags = ['fun']
handler.command = /^(dare|berani|tantangan)$/i
handler.limit = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
