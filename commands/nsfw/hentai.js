module.exports = ({
    name: "hentai",
    code: `
    $api[https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&tags=1boy1girl+score:>=500+-video+-yuri+-yaoi+-gay&json=1;$random[1;99];file_url]
    $onlyNSFW[Please send this command in a NSFW channel!]
    `
})
