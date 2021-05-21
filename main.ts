basic.forever(function on_forever() {
    basic.showNumber(input.temperature())
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
    if (input.temperature() >= 8 && input.temperature() <= 30) {
        if (pins.analogReadPin(AnalogPin.P0) >= 200 && pins.analogReadPin(AnalogPin.P0) <= 600) {
            basic.showString("T.OK")
            basic.showString("H.OK")
            basic.showIcon(IconNames.Yes)
        }
        
    }
    
    if (input.temperature() < 8 || input.temperature() > 30) {
        if (pins.analogReadPin(AnalogPin.P0) >= 200 && pins.analogReadPin(AnalogPin.P0) <= 600) {
            basic.showString("T.MAL")
        }
        
    }
    
    if (input.temperature() >= 8 && input.temperature() <= 30) {
        if (pins.analogReadPin(AnalogPin.P0) < 200 || pins.analogReadPin(AnalogPin.P0) > 600) {
            basic.showString("H.MAL")
        }
        
    }
    
    if (input.temperature() < 8 || input.temperature() > 30) {
        if (pins.analogReadPin(AnalogPin.P0) < 200 || pins.analogReadPin(AnalogPin.P0) > 600) {
            basic.showString("T.MAL")
            basic.showString("H.MAL")
        }
        
    }
    
})
