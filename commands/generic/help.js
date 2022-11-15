module.exports = ({
    name: "help",
    aliases: ["halp", "commands"],
    code: `
    $title[Perior's commands]
    $color[#ffffff]
    $addField[Generic;p!help (halp, commands)
    p!usage (stats)
    p!userinfo (useri);yes]

    $addField[Image;p!achieve (achievement)
    p!cats (cat)
    p!dog (doggo, dog)
    p!head (mchead, minecrafthead)
    p!neko
    p!text;yes]

    $addField[Moderation;p!ban
    p!banid
    p!unban (pardon)
    p!kick
    p!lock (freeze)
    p!unlock (unfreeze)
    p!purge (clear);yes]

    $addField[Fun;p!cuddle (snuggle, hug)
    p!dox (leak)
    p!durv
    p!skill (mcskill)
    p!pp
    p!say
    p!ship;yes]

    $addField[Economic;p!bal (balance)
    p!daily
    p!fish
    p!fuck (intercourse, sex)
    p!lb (leaderboard)
    p!pvp (1v1, attack, duel)
    p!work;yes]
    `
  })