// reply.js

// Message එකක් එකතු කරන්න, reply text එකක් optional
export function addMessage(chatElement, messageText, replyText = ".mk") {
  const messageContainer = document.createElement("div");
  messageContainer.className = "message";

  if (replyText.trim() !== "මොකුත් නෑ 🤪") {
    const replyDiv = document.createElement("div");
    replyDiv.className = "reply";
    replyDiv.innerText = replyText;
    messageContainer.appendChild(replyDiv);
  }

  const mainMsgDiv = document.createElement("div");
  mainMsgDiv.innerText = messageText;
  messageContainer.appendChild(mainMsgDiv);

  chatElement.insertBefore(messageContainer, chatElement.firstChild);
  chatElement.scrollTop = 0;
}
