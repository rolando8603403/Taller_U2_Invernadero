def on_forever():
    basic.show_number(input.temperature())
    basic.show_number(pins.analog_read_pin(AnalogPin.P0))
    if input.temperature() >= 8 and input.temperature() <= 30:
        if pins.analog_read_pin(AnalogPin.P0) >= 200 and pins.analog_read_pin(AnalogPin.P0) <= 600:
            basic.show_string("T.OK")
            basic.show_string("H.OK")
            basic.show_icon(IconNames.YES)
    if input.temperature() < 8 or input.temperature() > 30:
        if pins.analog_read_pin(AnalogPin.P0) >= 200 and pins.analog_read_pin(AnalogPin.P0) <= 600:
            basic.show_string("T.MAL")
    if input.temperature() >= 8 and input.temperature() <= 30:
        if pins.analog_read_pin(AnalogPin.P0) < 200 or pins.analog_read_pin(AnalogPin.P0) > 600:
            basic.show_string("H.MAL")
    if input.temperature() < 8 or input.temperature() > 30:
        if pins.analog_read_pin(AnalogPin.P0) < 200 or pins.analog_read_pin(AnalogPin.P0) > 600:
            basic.show_string("T.MAL")
            basic.show_string("H.MAL")
basic.forever(on_forever)
