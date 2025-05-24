// 📁 song.js - Song Command Handler

function handleSongCommand(msg, botReply) { if (!msg.startsWith(".song ")) return;

const query = msg.replace(".song ", "").trim(); botReply.innerText = 🎵 Searching for: ${query}...;

fetch(https://your-api-url.com/api/song?q=${encodeURIComponent(query)}) .then(res => res.json()) .then(data => { if (data.downloadUrl) { botReply.innerHTML = 🎧 <b>${data.title}</b><br/><a href="${data.downloadUrl}" target="_blank">⬇️ Download</a>; } else { botReply.innerText = "❌ Song not found."; } }) .catch(() => { botReply.innerText = "❌ Error downloading song."; }); }

// 📌 Usage example in main script // setTimeout(() => { //   const botReply = document.createElement("div"); //   botReply.className = "reply";

//   if (msg.startsWith(".song ")) { //     handleSongCommand(msg, botReply); //   } else { //     botReply.innerText = "Ruply bot: Coming Soon... 🤫"; //   }

//   chat.appendChild(botReply); //   chat.scrollTop = chat.scrollHeight; // }, 1000);

// ✅ Don't forget to include this script in index.html: // <script src="song.js"></script>

