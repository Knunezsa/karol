let ns = 0
let la = 0
input.onButtonPressed(Button.A, function () {
    ns = randint(0, 10)
    basic.showNumber(ns)
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    la = randint(0, 10)
    basic.showNumber(la)
    basic.showLeds(`
        . . . . .
        # # # # #
        . . . . .
        # # # # #
        . . . . .
        `)
    basic.showNumber(ns + la)
})
input.onButtonPressed(Button.B, function () {
    ns = randint(0, 10)
    basic.showNumber(ns)
    basic.showLeds(`
        # . . . .
        . . # # #
        . . # . .
        . . # . .
        . . # # #
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        # # # # #
        . . . . .
        # # # # #
        . . . . .
        `)
    basic.pause(500)
    basic.showNumber(ns * 1.8 + 32)
    basic.pause(500)
    basic.showLeds(`
        # . . . .
        . . # # #
        . . # . .
        . . # # .
        . . # . .
        `)
})
