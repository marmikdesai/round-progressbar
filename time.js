var timer;
var timerFinish;
var timerSeconds;

function progress(c, a) {
    $("#note_" + c).html('<div class="number"></div><div id="slice"' + (a > 5 ? ' class="mamu"' : "") + '><div class="part"></div>' + (a > 5 ? '<div class="part fill"></div>' : "") + "</div>");
    var b = 360 / 10 * a;
    $("#note_" + c + " #slice .part").css({
        "-moz-transform": "rotate(" + b + "deg)",
        "-webkit-transform": "rotate(" + b + "deg)",
        "-o-transform": "rotate(" + b + "deg)",
        transform: "rotate(" + b + "deg)"
    });
    a = Math.floor(a * 100) / 10;
    arr = a.toString().split(".");
    intPart = arr[0];
    $("#note_" + c + " .number").html('<span class="point">' + intPart + '</span>')
}
function stop(d, b) {
    var c = (timerFinish - (new Date().getTime())) / 1000;
    var a = 10 - ((c / timerSeconds) * 10);
    a = Math.floor(a * 100) / 100;
    if (a <= b) {
        progress(d, a)
    } else {
        b = $("#note_" + d).data("note");
        arr = b.toString().split(".");
        $("#note_" + d + " .number .point").html(arr[0]);
    }
}
$(document).ready(function() {
    timerSeconds = 3;
    timerFinish = new Date().getTime() + (timerSeconds * 1000);
    $(".mar").each(function(a) {
        note = $("#note_" + a).data("note");
		var mam = note / 10;
        timer = setInterval("stop(" + a + ", " + mam + ")", 0)
    })
});
