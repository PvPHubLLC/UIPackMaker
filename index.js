const { ResourcePack } = require("./src/ResourcePack")

let pack = new ResourcePack("pack1")
pack.pack_png = "assets/pvphub_smaller.png"

pack.image("assets/example.png", null, {
    ascent: 13,
    height: 139,
    chars: ["ㇺ"]
})
pack.image("assets/pvphub_smaller.png", null, {
    ascent: 32,
    height: 64,
    chars: ["⅍"]
})

// pack["hello"]

pack.create()