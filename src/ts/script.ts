const input = <HTMLTextAreaElement>document.getElementById("input")
const output = <HTMLTextAreaElement>document.getElementById("output")

function random(arr: any[]) {
    return arr[Math.floor(Math.random() * arr.length)]
}

const version = "b0.1"
const splash = <HTMLHeadingElement>document.querySelector("h2")
splash.innerText = `${version} — ${random(splashes)}`

const brainrot = {
    "noun": ["skibidi", "gyatt", "backshot"],
    "verb": ["rizz"],
    "proper_noun": ["Ohio"]
}
const always_translate = {
    "gyatt": ["ass", "butt", "buttocks", "booty", "bootie", "cheeks"]
}
const brainrotAll = [...brainrot.noun, ...brainrot.verb, ...brainrot.proper_noun]

input.onkeyup = () => {
    const words = [...input.value.split(" ")]
    
    for (let i = 0; i < words.length; i++) {
        let x = words[i].toLowerCase()
        if (brainrotAll.includes(words[i - 1])) continue

        if (always_translate["gyatt"].includes(x)) x = "gyatt"

        if (nouns.includes(x))  x = random([...brainrot["noun"], words[i]])
        if (verbs.includes(x))  x = random([...brainrot["verb"], words[i]])
        if (pNouns.includes(x)) x = random([...brainrot["proper_noun"], words[i]])

        words[i] = x
    }

    output.value = words.join(" ")
}