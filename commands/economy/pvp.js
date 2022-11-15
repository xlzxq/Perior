module.exports = ({
    name: "pvp",
    aliases: ["1v1", "attack", "duel"],
    code: `
    Dueling $randomText[Tryhard;Intel Edits;MeeZoid;Sharpness;ZIBLACKINGGG;bombies;Dream;fruitberries;Straight]...
    $editIn[3s;You $randomText[have fought;dueled;stream sniped;1v1ed;2v1ed;5v1ed;10v1ed;targetted;walked;fucked;hacked on;used vape on;obliterated;demolished;destroyed] $randomText[Tryhard;Intel Edits;MeeZoid;Sharpness;Ziblacking;bombies;Dream;fruitberries;Straight] on $randomText[minemen;mmc;coldpvp;pvpland;pvplegacy] and won 💸$random[1;50] from bets.]
    $setUserVar[money;$sum[$random[1;50];$getUserVar[money]]]
    $cooldown[1m;You need to rest your hands before the next duel!]
    `
})