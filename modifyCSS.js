header = document.getElementsByTagName('yt-live-chat-header-renderer')[0];
ticker = document.getElementById("ticker");
chat = document.getElementById("chat");
header.style.display = "none";
ticker.style.display = "none";
chat.style.display = "none";

document.onkeydown = function(e) {
    if(e.key === "Escape") window.close();
}