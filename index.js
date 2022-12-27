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
    chars: ["\uE001"]
})
pack.image("assets/testhutop_left.png", null, {
    ascent: 10,
    height: 120,
    chars: ["\uE002"]
})
pack.image("assets/testhutop_right.png", null, {
    ascent: 10,
    height: 120,
    chars: ["\uE003"]
})
pack.image("assets/testhudbottom.png", null, {
    ascent: 32,
    height: 118,
    chars: ["\uE004"]
})

// pack["hello"]

pack.create()