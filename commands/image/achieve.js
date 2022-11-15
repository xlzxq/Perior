module.exports = ({
    name: "achieve",
    aliases: ["achievement"],
    code: `
    https://minecraftskinstealer.com/achievement/1/Got+Achievement/$replaceText[$message[]; ;+]
    $argsCheck[>0;You need to type a phrase.]
    `
})