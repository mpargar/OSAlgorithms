export default {
    fillTags: function (name, tags) {
        name.split(' ').map(e => {
            tags.push(e)
        })
        return tags
    },
    createSoft: function (/* name */ n, /* imageName */ imgName, /* extension */ imgExt, /* Tags */ customTags) {
        return {
            name: n,
            image: {
                name: imgName,
                ext: imgExt
            },
            tags: this.fillTags(n, customTags)
        }
    },
    loadDefaultSoftware: function () {
        return [
            this.createSoft('McAfee AntiVirus Plus', 'mc', 'png', ['antivirus']),
            this.createSoft('Bitdefender Antivirus Plus', 'bitdefender', 'png', ['antivirus']),
            this.createSoft('Panda Dome', 'panda', 'png', ['antivirus']),
            this.createSoft('Symantec Norton Security Deluxe', 'norton', 'png', ['antivirus'])
        ]
    }
}