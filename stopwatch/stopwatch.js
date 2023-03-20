let hr = 0;
let min = 0;
let sec = 0;

let timer = false;


function Start() {
    timer = true;
    stopwatch();
}

function Stop() {
    timer = false;
}

function Reset() {
    timer = false;

    hr = 0;
    min = 0;
    sec = 0;

    document.getElementById("hr").innerHTML = "00";

    document.getElementById("min").innerHTML = "00";

    document.getElementById("sec").innerHTML = "00";
}

function stopwatch() {
    if (timer == true) {
        sec = sec + 1;

        if (sec == 60) {
            sec = 0;
            min = min + 1;
        }

        if (min == 60) {
            min = 0;
            hr = hr + 1;
        }

        let hrString = hr;
        let minString = min;
        let secString = sec;


        if (hr < 10) {
            hrString = "0" + hrString;
        }

        if (min < 10) {
            minString = "0" + minString;
        }


        if (sec < 10) {
            secString = "0" + secString
        }




        document.getElementById("hr").innerHTML = hrString;

        document.getElementById("min").innerHTML = minString;

        document.getElementById("sec").innerHTML = secString;

        setTimeout("stopwatch()", 1000)
    }
}