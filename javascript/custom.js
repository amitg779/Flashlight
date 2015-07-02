$(document).ready(function () {
    var state = "off";

    // Listener for Flashlight Toggle
    $("#flipFlashlight").change(function () {
        if ($(this).is(":checked")) {
            flash("on");
        }
        else {
            flash("off");
        }
    });


    $("#btnPulse").keydown(function () {
        flash("on");
    });

    $("#btnPulse").keyup(function () {
        flash("off");
    });

    // Listener for Flicker Toggle
    var intrFlicker;
    $("#flipFlicker").change(function () {
        if ($(this).is(":checked")) {
            intrFlicker = setInterval(function () {
                switch (state) {
                    case "off":
                        state = "on";
                        flash("on");
                        break;
                    case "on":
                        state = "off";
                        flash("off");
                        break;
                }
            }, 1000);
        }
        else {
            clearInterval(intrFlicker);
        }
    });
});


// Flash function
function flash(state) {
    window.plugins.flashlight.available(function (isAvailable) {
        if (isAvailable) {
            switch (state) {
                case "on":
                    // switch on
                    window.plugins.flashlight.switchOn(); // success/error callbacks may be passed
                    break;
                case "off":
                    // switch off
                    window.plugins.flashlight.switchOff(); // success/error callbacks may be passed
                    break;
            }
        }
        else {
            alert("Flashlight not available on this device");
        }
    });
}