# Perior Bot
An advanced open-source Discord Bot made with DBScript. ~~[Invite me!](https://discord.com/oauth2/authorize?client_id=972441096435163146&scope=bot&permissions=1072935854023)~~ Discontinued for the time being.

## Features
- 35 Commands
- Economy Commands
- Easy to setup

## Screenshots
![List of commands](https://media.discordapp.net/attachments/972803542744170527/1042107002735820921/image.png)
![Economic commands](https://cdn.discordapp.com/attachments/972803542744170527/1042107003234955324/image.png)
![More generic use](https://cdn.discordapp.com/attachments/972803542744170527/1042107003578875944/image.png)

## Run Locally
1. Clone the repository
```bash
  git clone https://github.com/xlzxq/Perior
```

2. Install dependencies
```bash
  npm install
```

3. Paste in token (index.js | line 6)
```bash
  token: "YOUR_TOKEN",
```

4. Change things in help.js (optional)
```bash
  "...le[(BOT_NAME)'s com..."
  "...tion[(BOT_PREFIX)achieve - Gen..."
```

5. Start the bot
```bash
  node index.js
```

# Bugfixes
Due to DBScript being discontinued, you need to edit some files in the api in order for this bot to work fully.

## NSFW Bugfix
Go to node_modules/discordbot-script/package/functions/onlyNSFW.js and change line 12 and 35 to `if (message.channel.nsfw === false)`
The class should look something like this:

![Bugfix](https://cdn.discordapp.com/attachments/972803542744170527/1042167896559853670/image.png)

## Args Bugfix
Go to node_modules/discordbot-script/package/functions/argsCheck.js and change line 28 to `if (args[n - 1] === undefined || args[n - 1] === "") cond = false`
