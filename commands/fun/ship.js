module.exports = ({
    name: "ship",
    code: `
    $username[$mentioned[1]] and $username[$mentioned[2]] are a $random[0;100]% match!
    $argsCheck[>0;You need to mention another user.]
    `
})