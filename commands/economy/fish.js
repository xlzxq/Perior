module.exports = ({
    name: "fish",
    code: `
    Fishing... 🎣
    $editIn[3s;You fished a $randomText[🐟;🐠;🐡;🍥;🦈;🦦;🚲;🛒] and got 💸$random[1;30] for selling it.]
    $setUserVar[money;$sum[$random[1;30];$getUserVar[money]]]
    $cooldown[1m;You need to wait a little before fishing again!]
    `
})