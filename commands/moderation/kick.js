module.exports = ({
    name: "kick",
    code: `$kick[$mentioned[1]]
I have managed to kick $message[1].
$onlyPerms[kick;Staff can only execute this command!]
$argsCheck[>0;You need to mention a user in order to kick.]
    `
})