input.onButtonPressed(Button.A, function () {
    if (_switch == 0) {
        y2 += 1
        basic.showNumber(y2)
    } else if (_switch == 1) {
        y1 += 1
        basic.showNumber(y1)
    } else if (_switch == 3) {
        x2 += 1
        basic.showNumber(x2)
    } else if (_switch == 4) {
        x1 += 1
        basic.showNumber(x1)
    }
})
input.onButtonPressed(Button.AB, function () {
    op += 1
    if (op == 2) {
        basic.showNumber((y2 - y1) / (x2 - x1))
    } else if (op == 3) {
        basic.showNumber(y1 - (y2 - y1 / (x2 - x1 * x1)))
    } else if (op == 4) {
        basic.showString("y=" + (y1 - (y2 - y1 / (x2 + x1 * x1))) + "x" + "+" + (y2 - y1 / (x2 - x1)))
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    _switch += 1
    if (_switch == 2) {
        basic.showNumber(y2 - y1)
    } else if (_switch == 5) {
        basic.showNumber(x2 - x1)
    }
})
let _switch = 0
let op = 0
let y2 = 0
let y1 = 0
let x2 = 0
let x1 = 0
x1 = 0
x2 = 0
y1 = 0
y2 = 0
op = 1
_switch = 0
basic.forever(function () {
	
})
