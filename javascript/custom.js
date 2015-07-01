$("#flipFlashlight").change(function () {
    if ($("#flipFlashlight").is(":checked")) {
        window.plugins.flashlight.available(function (isAvailable) {
            if (isAvailable) {
                // switch on
                window.plugins.flashlight.switchOn(); // success/error callbacks may be passed
            } else {
                alert("Flashlight not available on this device");
            }
        });
    }
    else {
        window.plugins.flashlight.available(function (isAvailable) {
            if (isAvailable) {
                // switch off
                window.plugins.flashlight.switchOff(); // success/error callbacks may be passed
            } else {
                alert("Flashlight not available on this device");
            }
        });
    }
});

function flash() {
    window.plugins.flashlight.available(function (isAvailable) {
        if (isAvailable) {

            // switch on
            window.plugins.flashlight.switchOn(); // success/error callbacks may be passed

            // switch off after 3 seconds
            setTimeout(function () {
                window.plugins.flashlight.switchOff(); // success/error callbacks may be passed
            }, 3000);

        } else {
            alert("Flashlight not available on this device");
        }
    });
}