module.exports = ({
    name: "work",
    code: `
    Working...
    $editIn[3s;You worked as a(n) $randomText[twitch streamer;youtube streamer;youtuber;cashier;farmer;developer;lawyer;nurse;physician;therapist;police officer;drug dealer;accountant;teacher;dentist] for $random[1;12] hours and got paid 💸$random[1;80] for your work.]
    $setUserVar[money;$sum[$random[1;80];$getUserVar[money]]]
    $cooldown[5m;You need to wait atleast 5 minutes before working again!]
    `
})