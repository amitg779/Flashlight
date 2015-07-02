$(document).ready(function () {
    var state = "off";

    // Listener for Toggle Button
    $("#btnToggle").on("vmousedown", function () {
        if (state == "off") {
            state = "on";
            $(this).addClass("button-on");
            flash("on");
        }
        else {
            state = "off";
            $(this).removeClass("button-on");
            flash("off");
        }
    });

    // Listeners for Pulse Button
    $("#btnPulse").on("vmousedown", function () {
        flash("on");
    });
    $("#btnPulse").on("vmouseup", function () {
        flash("off");
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