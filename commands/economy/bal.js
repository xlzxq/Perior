module.exports = ({
    name: "bal",
    aliases: ["balance"],
    code: `
    $username[$mentioned[1]] currently has 💸$getUserVar[money;$mentioned[1]]
    `
})