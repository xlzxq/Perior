module.exports = ({
    name: "yuri",
    aliases: ["lesbian"],
    code: `
    $api[https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&tags=yuri&json=1;$random[1;99];file_url]
    $onlyNSFW[Please send this command in a NSFW channel!]
    `
})
