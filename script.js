// Discord APIを使ってサーバー人数を取得
const serverId = "YOUR_SERVER_ID"; // ここにサーバーIDを入力
const token = "YOUR_DISCORD_BOT_TOKEN"; // 必要ならBotトークンを設定

document.addEventListener("DOMContentLoaded", () => {
    fetch(`https://discord.com/api/v10/guilds/${serverId}?with_counts=true`, {
        headers: {
            Authorization: `Bot ${token}`
        }
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById("member-count").textContent = data.approximate_member_count || "N/A";
        })
        .catch(error => {
            console.error("Error fetching server data:", error);
        });
});
