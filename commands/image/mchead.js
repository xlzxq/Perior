module.exports = ({
    name: "head",
    aliases: ["mchead", "minecrafthead"],
    code: `
    https://cravatar.eu/helmhead/$message[]/600.png
    $argsCheck[>0;You need to mention a premium username.]
    `
})