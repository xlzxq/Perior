module.exports = ({
    name: "3dhentai",
    aliases: ["3d"],
    code: `
    $api[https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&tags=3d&json=1;$random[1;99];file_url]
    `
})