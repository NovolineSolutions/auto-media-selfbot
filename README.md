🎬 Discord YouTube Link Self-Bot
Welcome to the Discord YouTube Link Self-Bot repository! This self-bot automatically sends YouTube links to specified media channels in your Discord servers. Whether you're sharing your favorite videos or promoting your content, this bot has got you covered.


🌟 Features
Automated YouTube Sharing: Automatically send YouTube links to designated media channels.
Customizable Settings: Easily configure which channels to post in and the interval between posts.
Easy Setup: Quick and straightforward setup process.
Secure: Only you have control over the self-bot, ensuring your data remains private.
🚀 Getting Started
Prerequisites
Before you begin, ensure you have met the following requirements:

Node.js 14+
Discord Account
YouTube API Key
Installation
Clone the repository:

sh
Copy code
git clone https://github.com/yourusername/discord-youtube-selfbot.git
cd discord-youtube-selfbot
Install the required dependencies:

sh
Copy code
npm install
Configure the bot:

Rename .env.example to .env.
Open .env and add your Discord token, YouTube API key, and the channel IDs where you want to post links.
makefile
Copy code
DISCORD_TOKEN=YOUR_DISCORD_TOKEN
YOUTUBE_API_KEY=YOUR_YOUTUBE_API_KEY
CHANNEL_IDS=CHANNEL_ID_1,CHANNEL_ID_2
Run the bot:

sh
Copy code
node bot.js
🛠️ Configuration
Customize your .env file to suit your needs:

DISCORD_TOKEN: Your Discord account's token.
YOUTUBE_API_KEY: Your YouTube API key.
CHANNEL_IDS: A comma-separated list of channel IDs where the bot will post YouTube links.
Example .env:

makefile
Copy code
DISCORD_TOKEN=YOUR_DISCORD_TOKEN
YOUTUBE_API_KEY=YOUR_YOUTUBE_API_KEY
CHANNEL_IDS=123456789012345678,234567890123456789
🤖 Usage
Start the bot: Ensure the bot is running.
Watch it in action: The bot will automatically post YouTube links at specified intervals in the configured channels.
🔒 Security
Keep your token safe: Do not share your Discord token or YouTube API key publicly.
Use responsibly: This self-bot is for personal use. Be mindful of Discord's terms of service.
🎨 Contributing
Contributions are welcome! Please fork this repository and submit a pull request with your changes. For major changes, please open an issue first to discuss what you would like to change.

📄 License
This project is licensed under the MIT License. See the LICENSE file for details.

Made with ❤️ by Novo
