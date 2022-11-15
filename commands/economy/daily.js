module.exports = ({
    name: "daily",
    code: `
    $setUserVar[money;$sum[100;$getUserVar[money]]]
    Thanks for using this bot! In return, you have earned 💸100.
    $cooldown[24h;Please wait until tomorrow to claim your daily award.]
    `
})