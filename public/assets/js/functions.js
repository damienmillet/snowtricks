function navBar() {
    var x = document.getElementById("navMenu");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    }
    else {
        x.className = x.className.replace(" w3-show", "");
    }
}

$(document).ready(function () {
    $("#showmore").click(function () {
        $("#more").toggleClass("w3-hide");
        $("#arrowup").toggleClass("w3-hide");
        $("#showmore").hide();
    });
});
