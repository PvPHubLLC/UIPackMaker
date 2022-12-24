const { ResourcePack } = require("./src/ResourcePack")

let pack = new ResourcePack("pack1")

pack.image("assets/example.png", null, {
    ascent: 13,
    height: 139,
    chars: ["ㇺ"]
})
pack.image("assets/flame.png", null, {
    ascent: 96,
    height: 96,
    chars: ["✿"]
})

// pack["hello"]

pack.create()