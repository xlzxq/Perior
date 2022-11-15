module.exports = ({
    name: "cuddle",
    aliases: ["snuggle", "hug"],
    code: `
    $username[] $randomText[snuggles;cuddles;hugs;bear hugs] $username[$mentioned[1]]!
$randomText[https://tenor.com/view/horimiya-hug-anime-miyamura-hori-gif-20848980;https://tenor.com/view/anime-hug-sweet-love-gif-14246498;https://tenor.com/view/hugs-gif-25241864;https://tenor.com/view/anime-hug-anime-hugging-hugging-hug-anime-gif-26094868;https://tenor.com/view/aharen-san-anime-hug-gif-25553401;https://tenor.com/view/enage-kiss-anime-hug-kisara-gif-26118528;https://tenor.com/view/hug-gif-25588769]
$argsCheck[>0;You need to mention another user.]    
    `
})