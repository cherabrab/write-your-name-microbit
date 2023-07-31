enum RadioMessage {
    message1 = 49434,
    message2 = 1435
}
input.onButtonPressed(Button.A, function () {
    basic.showString("" + (alphabet[p]))
    p += 1
    if (p > 25) {
        p = 0
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString(name)
    p = 0
})
input.onButtonPressed(Button.B, function () {
    name = "" + name + alphabet[p - 1]
})
input.onGesture(Gesture.Shake, function () {
    p = 0
    basic.clearScreen()
    name = ""
})
let alphabet: string[] = []
let name = ""
let p = 0
p = 0
name = ""
alphabet = [
"A",
"B",
"C",
"D",
"E",
"F",
"G",
"H",
"I",
"J",
"K",
"L",
"M",
"N",
"O",
"P",
"Q",
"R",
"S",
"T",
"U",
"V",
"W",
"x",
"Y",
"Z"
]
