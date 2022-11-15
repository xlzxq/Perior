module.exports = ({
    name: "userinfo",
    aliases: ["useri"],
    code: `
    $title[$user[$mentioned[1];name]'s Information]
    $addField[Account's Creation Date;$user[$mentioned[1];created];yes]
    $addField[Account's ID;$user[$mentioned[1];id];yes]
    $addField[Account's Avatar URL;$user[$mentioned[1];avatar];no]
    $addField[Account's Last Message;$user[$mentioned[1];lastmessageurl];no]
    $addField[Account's Banner;$user[$mentioned[1];banner];yes]
    $addField[Account's Bot Check;$user[$mentioned[1];isbot];yes]
    `
})