$(document).ready(function () {
        $("#supercharged").click(function () {
            $("#main-image").hide(0, showPic);
        });
        $(".boxSlider").mouseenter(function () {
            var target = $(this).find('p');
            var h2 = $(this).find('h2');
            h2.animate({
                "margin-top": "10px"
            }, 300, function(){showPara(target);});
        });
        $("#notActual").click(function(event){
            event.preventDefault();
            $("#spaceInvaders").slideToggle(1000, closeScreen);
        });
});


function showPic() {
    $("#main-image-alternate").show();
    $("#notActual").show();
    $("#supercharged").hide();
    $("#shell, #colorScreen, #memory, #floppyDrive").fadeIn(400);
}


function showPara(target) {
    target.show(800);
}
 function closeScreen() {
    $("#notActual").text("Beautiful CGA graphics, nothing even comes close.");
 }

