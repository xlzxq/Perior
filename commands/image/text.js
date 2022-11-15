module.exports = ({
    name: "text",
    code: `
    https://flamingtext.com/net-fu/proxy_form.cgi?script=tagline-logo&text=$replaceText[$message[]; ;+]&_loc=generate&imageoutput=true
    $argsCheck[<8;Too many arguments!]
    `
})