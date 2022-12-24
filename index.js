const { ResourcePack } = require("./src/ResourcePack")

let pack = new ResourcePack("pack1")

pack.image("assets/example.png", null, {
    ascent: 13,
    height: 139,
    chars: ["ㇺ"]
})

// pack["hello"]

pack.create()