window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("id-navbar").style.backgroundColor = "#BE5D00";
    } else {
        document.getElementById("id-navbar").style.backgroundColor = "transparent";
    }
}