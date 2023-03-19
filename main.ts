input.onPinPressed(TouchPin.P0, function () {
    driving_cnt += 1
    basic.showNumber(driving_cnt)
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    if (driving_cnt > 0 && driving_cnt <= 5) {
        led.plot(0, 4)
    } else if (driving_cnt > 5 && driving_cnt <= 10) {
        led.plot(0, 4)
        led.plot(0, 3)
    } else if (driving_cnt > 10) {
        led.plot(0, 4)
        led.plot(0, 3)
        led.plot(0, 2)
    } else {
    	
    }
    if (public_transport_cnt > 0 && public_transport_cnt <= 5) {
        led.plot(1, 4)
    } else if (public_transport_cnt > 5 && public_transport_cnt <= 10) {
        led.plot(1, 4)
        led.plot(1, 3)
    } else if (public_transport_cnt > 10) {
        led.plot(1, 4)
        led.plot(1, 3)
        led.plot(1, 2)
    } else {
    	
    }
    if (walking_cycling_cnt > 0 && walking_cycling_cnt <= 5) {
        led.plot(2, 4)
    } else if (walking_cycling_cnt > 5 && walking_cycling_cnt <= 10) {
        led.plot(2, 4)
        led.plot(2, 3)
    } else if (walking_cycling_cnt > 10) {
        led.plot(2, 4)
        led.plot(2, 3)
        led.plot(2, 2)
    } else {
    	
    }
})
input.onPinPressed(TouchPin.P2, function () {
    walking_cycling_cnt += 1
    basic.showNumber(walking_cycling_cnt)
})
function resetIt () {
    basic.showIcon(IconNames.Heart)
    driving_cnt = 0
    public_transport_cnt = 0
    walking_cycling_cnt = 0
    most_used = 0
}
input.onButtonPressed(Button.AB, function () {
    resetIt()
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString("P0:")
    basic.showNumber(driving_cnt)
    basic.clearScreen()
    basic.showString("P1:")
    basic.showNumber(public_transport_cnt)
    basic.clearScreen()
    basic.showString("P2:")
    basic.showNumber(walking_cycling_cnt)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P1, function () {
    public_transport_cnt += 1
    basic.showNumber(public_transport_cnt)
})
let most_used = 0
let walking_cycling_cnt = 0
let public_transport_cnt = 0
let driving_cnt = 0
resetIt()
basic.forever(function () {
	
})
