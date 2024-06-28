const { Client } = require("discord.js-selfbot-v13");
const axios = require("axios");
const express = require("express");

const client = new Client();
const token = "MTAxMjQwNjE5NzA3MDA3Mzg2Nw.Goaoxe.xQ_Te03mSvSWTsig81He8-IRK_LGUqIDKbWFck";
const youtubeApiKey = "AIzaSyBbT4VFepT1qfRW1aJdbFiG4_8-zXLimBI";

const channelsAndServers = [
  { channelId: "1221429544137789460", serverId: "1221413384839495801" },
  { channelId: "1230908535634657301", serverId: "1230908535358099570" },
  { channelId: "1246068591535853650", serverId: "949531561244655647" },
  { channelId: "1228694927068889088", serverId: "1228692408858837013" },
  { channelId: "968575044097818674", serverId: "968569296412356629" },
  { channelId: "1207861415285628968", serverId: "1207828421363769364" },
  { channelId: "1253607923796676648", serverId: "1147987879465861130" },
];

const youtubeUrls = [
  "https://youtu.be/QA22HG7Ibik",
  "https://youtu.be/uQrG3DpLQdI",
  "https://youtu.be/mcdVCbZHv3Y",
  "https://youtu.be/eaSXSUxLoTk",
  "https://youtu.be/i4f4FdrdKsM",
  "https://youtu.be/jxkR_pIYSb0",
  "https://youtu.be/s9VKUjQI5E0",
  "https://youtu.be/Z0dAsPrmpyA",
  "https://youtu.be/22lqkXcjsbU",
  "https://youtu.be/8aGHw3JYRGc"
];

const sentUrls = new Set();

async function isValidYouTubeUrl(url) {
  const videoId = url.split("be/")[1];
  if (!videoId) return false;

  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${youtubeApiKey}&part=status`
    );
    return response.data.items.length > 0;
  } catch (error) {
    console.error("Error validating YouTube URL:", error);
    return false;
  }
}

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

async function sendToChannels() {
  const validUrls = youtubeUrls.filter(url => !sentUrls.has(url));

  for (const url of validUrls) {
    const isValid = await isValidYouTubeUrl(url);
    if (!isValid) {
      sentUrls.add(url); // Mark invalid URLs to avoid re-checking them
    }
  }

  const remainingUrls = validUrls.filter(url => !sentUrls.has(url));

  if (remainingUrls.length === 0) {
    console.log("No valid YouTube URLs to send.");
    return;
  }

  const urlToSend = getRandomItem(remainingUrls);
  const { channelId, serverId } = getRandomItem(channelsAndServers);

  try {
    const channel = await client.channels.fetch(channelId);
    if (channel && channel.guild.id === serverId) {
      await channel.send(urlToSend);
      console.log(`Sent URL to ${channelId} in ${serverId}`);
      sentUrls.add(urlToSend); // Mark this URL as sent
    } else {
      console.log(`Channel ${channelId} in ${serverId} not found or not accessible.`);
    }
  } catch (error) {
    console.error(`Error sending to channel ${channelId} in server ${serverId}:`, error);
  }
}

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.login(token);

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(`
    <html>
      <body>
        <button onclick="fetch('/send').then(response => response.text()).then(data => alert(data))">
          Send YouTube Links
        </button>
      </body>
    </html>
  `);
});

app.get("/send", async (req, res) => {
  await sendToChannels();
  res.send("YouTube links sent!");
});

app.listen(port, () => {
  console.log(`Web server running at http://localhost:${port}`);
});
