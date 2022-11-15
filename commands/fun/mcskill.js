module.exports = ({
    name: "skill",
    aliases: ["mcskill"],
    code: `
    $username[$mentioned[1]]'s stats:
Wins: $random[0;9999]
Losts: $random[1;9999]
W/L: $divide[$random[0;9999];$random[1;9999]]
    `
})